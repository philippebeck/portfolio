import { links } from '../../../assets/data.json'
import List from '../../molecules/list/list'
import Title from '../../atoms/title/title'
import './links.css'

const Links = () => {

  return (
    <article id="links">
      <Title name="Links" />

      <List array={links.html} />
      <List array={links.css} />
      <List array={links.js} />
      <List array={links.vue} />
      <List array={links.node} />
      <List array={links.php} />
      <List array={links.python} />
      <List array={links.db} />
      <List array={links.git} />
      <List array={links.dev} />
    </article>
  )
}

export default Links
