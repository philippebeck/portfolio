import { components } from '../../../assets/data.json'
import Title from '../../atoms/title/title'
import './header.css'

const Header = () => {

  return (
    <header id="intro">
      <Title name={components.title} lvl="1" />
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
