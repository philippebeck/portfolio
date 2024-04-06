import Card from '../../molecules/card/card'
import Link from '../../atoms/link/link'
import './gallery.css'

const Gallery = ({ name, gallery }) => {

  return (
    <section className="gallery">
      <h3>{name}</h3>

      <ul>
        { gallery.map((item, index) => 
          <li key={index}>

            <Link
              url={item.url}
              content={
                <Card url={item.image} alt={item.alt} content={item.name} />
              }
            />
          </li>
        )}
      </ul>
    </section>
  )
}

export default Gallery
