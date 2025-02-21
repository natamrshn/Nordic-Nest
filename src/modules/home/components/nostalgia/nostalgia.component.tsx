import { box, content } from "./nostalgia.styles";
import nostalgia from "~/assets/nostalgia.png";

const Nostalgia = () => {
  return (
		<div className={box}>
			<h2>THIS IS THE NEW NOSTALGIA</h2>
			<div className={content}>
				<p>
					REDISCOVER TIMELESS ELEGANCE <br /> At NORDICEST, we craft
					exclusive, high-end furniture that seamlessly blends
					sophistication and expert craftsmanship. Each piece is
					designed with precision, using premium materials to ensure
					exceptional quality and distinctive style.We believe that
					furniture is more than just functionality—it`s a reflection
					of your unique taste. Explore our luxurious collections and
					let us help you create a home that is truly
					extraordinary.19:36
				</p>
				<img src={nostalgia} alt="" />
			</div>
		</div>
  );
}

export default Nostalgia;