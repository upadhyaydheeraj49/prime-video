import MoviesSlider from '../MoviesSlider'
import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props
  const actionMoviesList = moviesList.filter(
    movie => movie.categoryId === 'ACTION',
  )
  const comedyMoviesList = moviesList.filter(
    movie => movie.categoryId === 'COMEDY',
  )

  return (
    <div className="movie-page-main-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="prime-video-img"
      />
      <div className="movies-section">
        <div className="movies-container">
          <h4 className="movie-category-heading">Action Movies</h4>
          <div className="slider-container">
            <MoviesSlider movieList={actionMoviesList} />
          </div>
        </div>
        <div className="movies-container">
          <h4 className="movie-category-heading">Comedy Movies</h4>
          <div className="slider-container">
            <MoviesSlider movieList={comedyMoviesList} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PrimeVideo
