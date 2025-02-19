import { box } from "./promoBanner.styles";

const PromoBanner = () => {
	return (
		<div className={box}>
			<p>Free Shipping on Orders Over $99 </p>
			<hr />
			<p>Limited Time: 40% Off Home & Decor</p>
			<hr />
			<p>Sign Up & Get 20% Off Your First Order</p>
			<hr />
			<p>Sign Up for Texts & Save 15%*</p>
		</div>
	);
};

export default PromoBanner;
