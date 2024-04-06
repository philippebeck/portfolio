import { components } from '../../../assets/data.json'
import Icon from '../../atoms/icon/icon'
import Link from '../../atoms/link/link'
import Logo from '../../atoms/logo/logo'
import './nav.css'

const Nav = () => {

  return (
    <nav id="nav">
      <ul>
        { components.nav.out.map((item, index) =>
          <li key={index}>
            <Link
              url={item.url}
              content={
                <>
                  <Icon cat={item.iconCat} name={item.iconName} />
                  <b>{item.text}</b>
                </>
              }
            />
          </li>
        )}
      </ul>

      <Link
        url="#intro"
        content={<Logo />}
      />

      <ul>
        { components.nav.in.map((item, index) =>
          <li key={index}>
            <Link
              url={item.url}
              content={
                <>
                  <Icon cat={item.iconCat} name={item.iconName} />
                  <b>{item.text}</b>
                </>
              }
            />
          </li>
        )}
      </ul>
    </nav>
  )
}

export default Nav
