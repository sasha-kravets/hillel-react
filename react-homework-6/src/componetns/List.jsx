import { useContext } from 'react'
import { Context } from '../App';

const List = () => {

  const {items} = useContext(Context);

  return (
    <div>
      <div>List of Users</div>
      <ul>{items && items.map((u) => <li key={u.id}>{u.name}</li>)}</ul>
    </div>
  )
}

export default List