import { css } from '@emotion/css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const sliderContainer = css`
	position: relative;
	display: flex;
	justify-content: center;
	width: 100vw;
	height: 100vh;

	z-index: 10;

	.slick-slider {
		width: 100%;
		height: 100vh;
	}

	.slick-list {
		width: 100%;
		height: 100vh;
	}

	.slick-slide {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100vh;

		img {
			width: 100vw;
			height: 100vh;
			object-fit: cover;
			object-position: center;
		}
	}
	.slick-dots {
		position: absolute;
		bottom: 20px;
		display: flex;
		justify-content: center;
		width: 100%;
		z-index: 1;
		gap: 20px;
	}

	.slick-dots li {
		width: 40px;
		height: 4px;
	}

	.slick-dots li button {
		width: 100%;
		height: 100%;
		padding: 0;
	}

	.slick-dots li button:before {
		content: '';
		display: block;
		width: 100%;
		height: 100%;
		background-color: #000;
		border-radius: 3px;
		transition: background-color 0.3s ease;
	}

	.slick-dots li.slick-active button:before {
		background-color: #fff;
	}
`;

