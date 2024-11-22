import Popup from 'reactjs-popup'
import {IoMdClose} from 'react-icons/io'
import ReactPlayer from 'react-player'
import './index.css'

const MovieItem = props => {
  const {movieDetails} = props
  const {thumbnailUrl, videoUrl} = movieDetails
  return (
    <Popup
      modal
      trigger={
        <div className="movie-item">
          <img src={thumbnailUrl} alt="thumbnail" className="movie-thumbnail" />
        </div>
      }
    >
      {close => (
        <div className="popup-container">
          <button
            className="popup-close-btn"
            type="button"
            onClick={() => close()}
            data-testid="closeButton"
          >
            <IoMdClose className="popup-close-icon" />
          </button>
          <ReactPlayer url={videoUrl} controls />
        </div>
      )}
    </Popup>
  )
}
export default MovieItem
