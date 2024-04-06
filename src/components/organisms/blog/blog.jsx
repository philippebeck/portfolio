import { blog } from '../../../assets/data.json'
import Gallery from '../../molecules/gallery/gallery'
import './blog.css'

const Blog = () => {

  return (
    <article id="blog">
      <h2>Blog</h2>

      <Gallery name="HTML5" gallery={blog.html} />
      <Gallery name="CSS3" gallery={blog.css} />
      <Gallery name="JavaScript" gallery={blog.js} />
      <Gallery name="PHP" gallery={blog.php} />
      <Gallery name="Sass" gallery={blog.sass} />
    </article>
  )
}

export default Blog
