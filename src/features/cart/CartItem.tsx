import { formatCurrency } from "../../utils/helpers"

function CartItem({
  item,
}: {
  item: {
    pizzaId: string
    name: string
    quantity: number
    totalPrice: number
  }
}) {
  const {pizzaId, name, quantity, totalPrice} = item

  return (
    <li>
      <p>
        {quantity}&times; {name}
      </p>
      <div>
        <p>{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  )
}

export default CartItem
