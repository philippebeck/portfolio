import "./list.css"

const List = ({ array }) => {

  return (
    <ul>
      { array.map((item, index) =>
        <li key={index}>
          {item}
        </li>
      )}
    </ul>
  )
}

export default List
