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
  contentGrid,
} from './getTheLook.styles';
import getTheLook from '~assets/get-the-look.png';
import closeIcon from '~assets/icon-close.svg?url';
import ProductCard from '~shared/components/productCard/productCard.component';
import img from '~/assets/faq-image.png';
import Button from '~shared/components/button/button.component';

const GetTheLook = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<div className={box}>
				<h2 style={h2}>FURNITURE THAT DEFINES YOU</h2>

				<div className={content}>
					<img src={getTheLook} alt="getTheLook" className={image} />
					<button className={button} onClick={() => setIsOpen(true)}>
						<Button text="Get the look" type="button" />
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
						<div
							style={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
							}}
						>
							<button
								className={closeButton}
								onClick={() => setIsOpen(false)}
							>
								<img
									src={closeIcon}
									alt="Close"
									className={closeButton}
								/>
							</button>
							<h2
								style={{
									...h2,
									flexGrow: 1,
									textAlign: 'center',
									margin: 0,
								}}
							>
								GET THE LOOK
							</h2>
						</div>

						<div className={contentGrid}>
							<ProductCard
							    id={1}
								mainImage={img}
								title="Bed Vintage"
								price={400}
								category="Living Room"
								isNew
							/>
							<ProductCard
							    id={1}
								mainImage={img}
								title="Bed Vintage"
								price={400}
								category="Living Room"
								isNew
							/>
							<ProductCard
							    id={1}
								mainImage={img}
								title="Bed Vintage"
								price={400}
								category="Living Room"
								isNew
							/>
							<ProductCard
							    id={1}
								mainImage={img}
								title="Bed Vintage"
								price={400}
								category="Living Room"
								isNew
							/>
						</div>
					</div>
				</>
			)}
		</>
	);
};

export default GetTheLook;
