import Button from '~shared/components/button/button.component';
import { box, button, heading, text } from './text.styles';

const Text = () => {
	return (
		<div className={box}>
			<h1 className={heading}>EXCLUSIVE LUXURY FURNITURE</h1>
			<div className={button}>
				<Button text="Shop Now" type="button" />
			</div>
			<p className={text}>Timeless design. Unmatched quality. Crafted for you</p>
		</div>
	);
};

export default Text;
