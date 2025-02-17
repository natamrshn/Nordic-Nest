import Button from '~shared/components/button/button.component';
import { box, heading } from './text.styles';

const Text = () => {
	return (
		<div className={box}>
			<h1 className={heading}>EXCLUSIVE LUXURY FURNITURE</h1>
			<div>
				<Button text="Shop Now" type="button" />
			</div>
			<p>Timeless design. Unmatched quality. Crafted for you</p>
		</div>
	);
};

export default Text;
