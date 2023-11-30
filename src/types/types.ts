export type Pizza = {
  id: number
  name: string
  unitPrice: number
  ingredients: string[]
  soldOut: boolean
  imageUrl: string
}

export type CartItem = {
  pizzaId: number
  name: string
  quantity: number
  unitPrice: number
  totalPrice: number
}

export type NewOrder = {
  customer?: string
  phone?: string
  address?: string
  cart: CartItem[]
  priority: boolean
}