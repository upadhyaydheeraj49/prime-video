import Slider from 'react-slick'
import MovieItem from '../MovieItem'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const MoviesSlider = props => {
  const {movieList} = props
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  }
  return (
    <Slider {...sliderSettings}>
      {movieList.map(movieDetails => (
        <MovieItem key={movieDetails.id} movieDetails={movieDetails} />
      ))}
    </Slider>
  )
}

export default MoviesSlider
