import React from 'react'
import './LocationSearch.css'

export default function LocationSearch() {
  return (
    <section className="locations-search-section text-center position-relative" style={{ backgroundImage: 'url(https://agarwals-219c6.kxcdn.com/wp-content/themes/dragarwal/assets/img/search-bg.webp)' }}>
      <div className="container">
        <h1 className="my-md-2 pb-md-2 my-0 pb-2 h3">Find Dr Agarwals Eye Hospital near you</h1>
        <div className="search-bar-top">
          <div className="position-relative d-flex justify-content-center align-items-center search-bar-wrap">
            <button type="button" className="submit-search border-0 p-0 d-flex justify-content-center align-items-center rounded-circle" aria-label="Search">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M24.155 22.4989L20.1896 18.5452C21.469 16.9152 22.1632 14.9024 22.1607 12.8303C22.1607 10.985 21.6134 9.18104 20.5882 7.64668C19.563 6.11231 18.1058 4.91642 16.4009 4.21023C14.696 3.50404 12.82 3.31927 11.0101 3.67928C9.20017 4.0393 7.53766 4.92792 6.23279 6.23279C4.92792 7.53766 4.0393 9.20017 3.67928 11.0101C3.31927 12.82 3.50404 14.696 4.21023 16.4009C4.91642 18.1058 6.11231 19.563 7.64668 20.5882C9.18104 21.6134 10.985 22.1607 12.8303 22.1607C14.9024 22.1632 16.9152 21.469 18.5452 20.1896L22.4989 24.155C22.6073 24.2643 22.7363 24.3511 22.8784 24.4103C23.0205 24.4695 23.173 24.5 23.3269 24.5C23.4809 24.5 23.6334 24.4695 23.7755 24.4103C23.9176 24.3511 24.0466 24.2643 24.155 24.155C24.2643 24.0466 24.3511 23.9176 24.4103 23.7755C24.4695 23.6334 24.5 23.4809 24.5 23.3269C24.5 23.173 24.4695 23.0205 24.4103 22.8784C24.3511 22.7363 24.2643 22.6073 24.155 22.4989ZM5.83259 12.8303C5.83259 11.4463 6.243 10.0934 7.01192 8.94259C7.78084 7.79182 8.87374 6.8949 10.1524 6.36526C11.4311 5.83561 12.8381 5.69704 14.1955 5.96705C15.553 6.23705 16.7998 6.90353 17.7785 7.88218C18.7571 8.86083 19.4236 10.1077 19.6936 11.4651C19.9636 12.8226 19.825 14.2296 19.2954 15.5083C18.7658 16.7869 17.8688 17.8798 16.7181 18.6487C15.5673 19.4177 14.2144 19.8281 12.8303 19.8281C10.9744 19.8281 9.19451 19.0908 7.88218 17.7785C6.56985 16.4662 5.83259 14.6862 5.83259 12.8303Z" fill="#707070"/>
              </svg>
            </button>
            <input type="text" className="form-control border-0 search-input" placeholder="Search for Location" />
          </div>
        </div>
      </div>
      <div className="or-tag position-absolute d-flex justify-content-center align-items-center rounded-circle">OR</div>
    </section>
  )
}
