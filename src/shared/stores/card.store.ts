// store.ts
import { create } from 'zustand'

interface Product {
	id: string
	mainImage: string
	title: string
	price: number
	category: string
	isNew: boolean
	quantity?: number
}

interface StoreState {
	cart: Product[]
	favorites: Product[]
	addToCart: (product: Product) => void
	removeFromCart: (id: string) => void
	toggleFavorite: (product: Product) => void
}

const useStore = create<StoreState>((set) => ({
	cart: [],
	favorites: [],

	addToCart: (product) =>
		set((state) => {
			const exists = state.cart.find((item) => item.id === product.id)
			if (exists) {
				return {
					cart: state.cart.map((item) =>
						item.id === product.id
							? { ...item, quantity: (item.quantity || 1) + 1 }
							: item
					),
				}
			} else {
				return {
					cart: [...state.cart, { ...product, quantity: 1 }],
				}
			}
		}),

		removeFromCart: (id) =>
			set((state) => ({
				cart: state.cart.filter((item) => item.id !== id),
			})),
			
	toggleFavorite: (product) =>
		set((state) => {
			const exists = state.favorites.find((item) => item.id === product.id)
			if (exists) {
				return {
					favorites: state.favorites.filter((item) => item.id !== product.id),
				}
			} else {
				return {
					favorites: [...state.favorites, product],
				}
			}
		}),
}))

export default useStore
