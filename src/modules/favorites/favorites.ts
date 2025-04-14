import React from 'react'
import useStore from '../../shared/stores/card.store'

const FavoritesPage: React.FC = () => {
	const favorites = useStore((state) => state.favorites)
	const toggleFavorite = useStore((state) => state.toggleFavorite)

	if (favorites.length === 0) {
		return <h2>У вас поки немає обраних товарів ❤️</h2>
	}

	return (
		<div style={{ padding: '2rem' }}>
			<h1>Обране</h1>
			<div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1rem' }}>
				{favorites.map((item) => (
					<div key={item.id} style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '1rem' }}>
						<img src={item.mainImage} alt={item.title} style={{ width: '100%', borderRadius: '8px' }} />
						<h3>{item.title}</h3>
						<p>{item.category}</p>
						<p>${item.price}</p>
						<button onClick={() => toggleFavorite(item)}>Видалити з обраного</button>
					</div>
				))}
			</div>
		</div>
	)
}

export default FavoritesPage
