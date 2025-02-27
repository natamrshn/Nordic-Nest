import { useState } from 'react';
import { h2 } from '~shared/styles';
import {
	box,
	button,
	content,
	image,
	modal,
	modalOpen,
	modalOverlay,
	closeButton,
} from './getTheLook.styles';
import getTheLook from '~assets/get-the-look.png';
import shopIcon from '~assets/icon-shop.svg?url';
import closeIcon from '~assets/icon-shop.svg?url';

const GetTheLook = () => {
  const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<div className={box}>
				<h2 style={h2}>FURNITURE THAT DEFINES YOU</h2>

				<div className={content}>
					<img src={getTheLook} alt="getTheLook" className={image} />
					<button className={button} onClick={() => setIsOpen(true)}>
						<img src={shopIcon} alt="" />
						<p>Get the look</p>
					</button>
				</div>
			</div>

			{/* Модалка */}
			{isOpen && (
				<>
					<div
						className={modalOverlay}
						onClick={() => setIsOpen(false)}
					/>
					<div className={`${modal} ${isOpen ? modalOpen : ''}`}>
						<button
							className={closeButton}
							onClick={() => setIsOpen(false)}
						>
							<img src={closeIcon} alt="Close" />
						</button>
						<h2>Selected Look</h2>
						<p>Here you can add selected furniture items...</p>
					</div>
				</>
			)}
		</>
	);
};

export default GetTheLook;
