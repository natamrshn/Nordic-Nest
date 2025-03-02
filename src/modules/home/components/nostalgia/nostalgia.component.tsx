import { box, content } from './nostalgia.styles';
import nostalgia from '~/assets/nostalgia.png';

const Nostalgia = () => {
	return (
		<div className={box}>
			<h2>THIS IS THE NEW NOSTALGIA</h2>
			<div className={content}>
				<div>
					REDISCOVER TIMELESS ELEGANCE
					<br /> <br /> At <span>NORDICEST</span> , we craft
					exclusive, high-end furniture that seamlessly blends
					sophistication and expert craftsmanship. Each piece is
					designed with precision, using premium materials to ensure
					exceptional quality and distinctive style. <br /> <br />
					We believe that furniture is more than just
					functionality—it`s a reflection of your unique taste.
					Explore our luxurious collections and let us help you create
					a home that is truly extraordinary.
				</div>
				<img src={nostalgia} alt="nostalgia photo" />
			</div>
		</div>
	);
};

export default Nostalgia;
