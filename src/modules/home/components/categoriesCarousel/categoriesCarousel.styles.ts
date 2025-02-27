import { css } from '@emotion/css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const sliderContainer = css`
	display: flex;
	justify-content: center;
	width: 100vw;
	height: 374px;

	.slick-slider {
		width: 100%;
		height: 374px;
	}

	.slick-slide {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 374px;

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
	background: #f5f5f5;
	border-radius: 8px;
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
	width: 100%;
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
