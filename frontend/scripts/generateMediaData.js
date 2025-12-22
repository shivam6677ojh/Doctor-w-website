const https = require('https')
const fs = require('fs')
const path = require('path')

const url = 'https://www.dragarwal.com/news-media/'

function decodeHtml(str = '') {
  const named = {
    '&amp;': '&',
    '&nbsp;': ' ',
    '&rsquo;': '\'',
    '&lsquo;': '\'',
    '&ldquo;': '"',
    '&rdquo;': '"',
    '&ndash;': '-',
    '&mdash;': '-',
  }

  return str
    .replace(/&#(x?)([0-9a-fA-F]+);/g, (_, hex, code) => {
      const base = hex ? 16 : 10
      return String.fromCharCode(parseInt(code, base))
    })
    .replace(/&[a-zA-Z]+;/g, (entity) => named[entity] || entity)
}

function cleanText(str = '') {
  return decodeHtml(str)
    .replace(/[\u2018\u2019]/g, '\'')
    .replace(/[\u201c\u201d]/g, '"')
    .replace(/[\u2013\u2014]/g, '-')
    .replace(/\s+/g, ' ')
    .trim()
}

function extractCards(html) {
  const cards = []
  const cardRegex = /<div class="col-md-4 mb-5">([\s\S]*?)<\/div>\s*<\/div>/g
  let match

  while ((match = cardRegex.exec(html)) !== null) {
    const block = match[1]
    const linkMatch = block.match(/href="([^"]+)"/)
    const imgMatch = block.match(/<img[^>]+src="([^"]+)"/)
    const altMatch = block.match(/alt="([^"]*)"/)
    const dateMatch = block.match(/<p>([^<]+)<\/p>/)
    const titleMatch = block.match(/<h5>([\s\S]*?)<\/h5>/)

    if (!linkMatch || !imgMatch || !dateMatch || !titleMatch) continue

    const link = linkMatch[1]
    const image = imgMatch[1]
    const alt = altMatch ? cleanText(altMatch[1]) : ''
    const date = cleanText(dateMatch[1])
    const title = cleanText(titleMatch[1])

    cards.push({ title, date, link, image, alt })
  }

  return cards
}

https.get(url, (res) => {
  let html = ''
  res.on('data', (chunk) => {
    html += chunk.toString()
  })

  res.on('end', () => {
    const cards = extractCards(html)
    const outputPath = path.join(__dirname, '..', 'src', 'data', 'mediaNews.js')
    const lines = [
      'const mediaNews = [',
      ...cards.map((card) => `  {\n    title: ${JSON.stringify(card.title)},\n    date: ${JSON.stringify(card.date)},\n    link: ${JSON.stringify(card.link)},\n    image: ${JSON.stringify(card.image)},\n    alt: ${JSON.stringify(card.alt)}\n  },`),
      ']',
      '',
      'export default mediaNews',
      '',
    ]

    fs.writeFileSync(outputPath, lines.join('\n'))
    console.log(`Wrote ${cards.length} media entries to ${outputPath}`)
  })
}).on('error', (err) => {
  console.error('Failed to fetch media page', err)
})
