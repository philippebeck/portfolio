import "./title.css"

const Title = ({ name, lvl="2" }) => {

  return (
    lvl === "1" ? <h1>{name}</h1> :
    lvl === "2" ? <h2>{name}</h2> :
    lvl === "3" ? <h3>{name}</h3> :
    lvl === "4" ? <h4>{name}</h4> :
    lvl === "5" ? <h5>{name}</h5> :
    <h6>{name}</h6>
  )
}

export default Title
