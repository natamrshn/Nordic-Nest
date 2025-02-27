import { css } from '@emotion/css';

export const cardStyle = css`
	max-width: 330px;
	overflow: hidden;
	background: white;
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
