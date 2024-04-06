import { components } from '../../../assets/data.json'
import './header.css'

const Header = () => {

  return (
    <header id="intro">
      <h1>{components.title}</h1>
      <strong>{components.subtitle}</strong>

      <ul>
        { components.header.map((item, index) =>
          <li key={index}>
            {item}
          </li>
        )}
      </ul>
    </header>
  )
}

export default Header
