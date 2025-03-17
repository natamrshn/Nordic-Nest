import { css } from '@emotion/css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const sliderContainer = css`
	display: flex;
	justify-content: center;
	width: 100vw;
	margin-bottom: 100px;

	.slick-slider {
		width: 100%;
		max-width: 1440px;
	}

	.slick-slide {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;

		img {
			width: 330px;
			height: 330px;
			object-fit: cover;
			object-position: center;
		}

		p {
			margin-top: 12px;
		}
	}
`;

export const slickArrow = css`
	width: 36px;
	height: 36px;
	display: flex;
	align-items: center;
	justify-content: center;
	background: #edebeb;
	cursor: pointer;
	transition: background 0.3s;

	&:hover {
		background: #e0e0e0;
	}

	img {
		width: 100%;
		height: auto;
	}
`;

export const nextArrowStyle = css`
	top: 0;
	right: 140px;
`;

export const prevArrowStyle = css`
	top: 0;
	right: 40px;
`;

export const headerContainer = css`
	margin-top: 100px;

	width: 100%;
	max-width: 1440px;
	position: relative;
	text-align: center;
	margin-bottom: 16px;

	button {
		border: none;
		width: 56px;
		height: 45px;

		img {
			width: 24px;
			height: 24px;
		}
	}
`;

export const arrowsContainer = css`
	position: absolute;
	right: 40px;
	top: 50%;
	transform: translateY(-50%);
	display: flex;
	gap: 12px;
`;
