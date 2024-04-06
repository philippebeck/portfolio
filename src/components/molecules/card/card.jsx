import Image from '../../atoms/image/image'
import './card.css'

const Card = ({ url, alt, content }) => {

  return (
    <figure>
      <Image url={url} alt={alt} />

      <figcaption>{content}</figcaption>
    </figure>
  )
}

export default Card
