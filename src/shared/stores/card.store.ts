import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface Product {
  id: string
  mainImage: string
  title: string
  price: number
  category: string
  isNew: boolean
  amount?: number 
}

interface StoreState {
  cart: Product[]
  favourites: Product[]
  addToCart: (product: Product) => void
  removeFromCart: (id: string) => void
  toggleFavorite: (product: Product) => void
}

const useStore = create<StoreState>()(
  persist(
    (set) => ({
      cart: [],
      favourites: [],

      addToCart: (product) =>
        set((state) => {
          const exists = state.cart.find((item) => item.id === product.id)
          if (exists) {
            return {
              cart: state.cart.map((item) =>
                item.id === product.id
                  ? { ...item, amount: (item.amount || 1) + 1 }
                  : item
              ),
            }
          } else {
            return {
              cart: [...state.cart, { ...product, amount: 1 }],
            }
          }
        }),

      removeFromCart: (id) =>
        set((state) => {
          const existingItem = state.cart.find((item) => item.id === id)
          if (existingItem && (existingItem.amount || 1) > 1) {
            return {
              cart: state.cart.map((item) =>
                item.id === id
                  ? { ...item, amount: (item.amount || 1) - 1 }
                  : item
              ),
            }
          } else {
            return {
              cart: state.cart.filter((item) => item.id !== id),
            }
          }
        }),

      toggleFavorite: (product) =>
        set((state) => {
          const exists = state.favourites.find((item) => item.id === product.id)
          if (exists) {
            return {
              favourites: state.favourites.filter((item) => item.id !== product.id),
            }
          } else {
            return {
              favourites: [...state.favourites, product],
            }
          }
        }),
    }),
    {
      name: 'store-storage',
    }
  )
)

export default useStore
