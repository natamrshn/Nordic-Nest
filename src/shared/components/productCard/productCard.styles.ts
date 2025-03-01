import { css } from '@emotion/css';
import { fonts } from '~shared/styles';

export const cardStyle = css`
	max-width: 330px;
	overflow: hidden;
	background: white;
  position: relative;

	&:hover .overlay {
		opacity: 1;
	}
`;

export const imageContainer = css`
	position: relative;
	width: 330px;
	height: 330px;
`;

export const imageStyle = css`
	width: 330px;
	height: 330px;
	object-fit: cover;
`;

export const newLabel = css`
	position: absolute;
	width: 75px;
	height: 47px;
	top: 14px;
	left: 14px;
	background: #f7f6f4;
	display: flex;
	justify-content: center;
	align-items: center;
	color: #131215;
	font-size: 18px;
`;

export const favoriteButton = css`
	position: absolute;
	top: 14px;
	right: 14px;
	background: none;
	border: none;
	cursor: pointer;

	img {
		width: 24px;
		height: 24px;
	}
`;

export const infoStyle = css`
	padding: 12px;
`;

export const headerStyle = css`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const titleStyle = css`
	font-size: 18px;
	font-weight: bold;
`;

export const priceStyle = css`
	font-size: 18px;
	font-weight: bold;
	color: #333;
`;

export const categoryStyle = css`
	font-size: 14px;
	color: #777;
`;

export const overlay = css`
	position: absolute;
	bottom: 0px;
	width: 330px;
	opacity: 0;
	transition: opacity 0.3s ease-in-out;

	&:hover {
		opacity: 1;
    cursor: pointer;
	}
`;

export const addToCartButton = css`
	width: 100%;
	padding: 14px 0;
	background: #31251f;
	color: white;
	font-size: 18px;
	text-align: center;
  font-weight: 400;
  font-family: ${fonts.secondary};
`;
