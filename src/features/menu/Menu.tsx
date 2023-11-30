import {useLoaderData} from 'react-router-dom'
import {getMenu} from '../../services/apiRestaurant'
import {Pizza} from '../../types/types'
import MenuItem from './MenuItem'

type MenuLoaderData = Pizza[]

function Menu() {
  const menu = useLoaderData() as MenuLoaderData
  return (
    <ul>
      {menu.map(pizza => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export async function loader() {
  const menu = await getMenu()
  return menu
}

export default Menu
