import { css } from '@emotion/css';
import { fonts } from '~shared/styles/fonts';

export const box = css`
	margin-top: 100px;
`;

export const content = css`
	position: relative;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 20px;
`;

export const button = css`
	position: absolute;
	left: 28px;
	bottom: 46px;

	padding: 8px 12px;

	display: flex;
	justify-content: center;
	align-items: center;
	gap: 12px;

	font-size: 24px;
	font-weight: 400;
	font-family: ${fonts.secondary};
	background-color: #eeeeee;
	border: none;
	cursor: pointer;

	img {
		width: 24px;
		height: 24px;
	}
`;

export const image = css`
	width: 100vw;
`;
export const modalOverlay = css`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.5);
	z-index: 999;
`;

export const modal = css`
	position: fixed;
	top: 0;
	right: -100%; /* Начальное положение за пределами экрана */
	width: 50vw;
	height: 100vh;
	background: white;
	padding: 20px;
	box-shadow: -5px 0 10px rgba(0, 0, 0, 0.1);
	transition: right 0.3s ease-in-out;
	z-index: 1000;
`;

export const modalOpen = css`
	right: 0; /* Выдвигаем модалку */
`;

export const closeButton = css`
	background: none;
	border: none;
	cursor: pointer;
	position: absolute;
	top: 10px;
	right: 10px;
`;