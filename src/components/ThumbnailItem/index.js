// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {eachThumbNail, ThumbnailImage, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = eachThumbNail

  const thumbnailClassName = isActive ? `thumbnail active` : `thumbnail`

  const changeThumbnail = () => {
    ThumbnailImage(id)
  }
  return (
    <li className="list-images">
      <button type="button" className="button" onClick={changeThumbnail}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={thumbnailClassName}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
