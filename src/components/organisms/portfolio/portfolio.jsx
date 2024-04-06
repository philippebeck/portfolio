import { portfolio } from '../../../assets/data.json'
import Gallery from '../../molecules/gallery/gallery'
import './portfolio.css'

const Portfolio = () => {

  return (
    <article id="portfolio">
      <h2>Portfolio</h2>
      
      <Gallery name="Packages" gallery={portfolio.packages} />
      <Gallery name="Websites" gallery={portfolio.websites} />
    </article>
  )
}

export default Portfolio
