import { css } from '@emotion/css';
import { fonts } from '~shared/styles/fonts';

export const box = css`
	margin-top: 100px;
`;

export const content = css`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 20px;
`;

export const button = css`
	position: absolute;
	left: 50%;
	bottom: 50%;
	transform: translate(-50%, 50%);
	background-color: transparent;
	backdrop-filter: blur(10px);
	border: none;
	cursor: pointer;
`;

export const image = css`
	width: 100vw;
	height: 700px;
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
	width: 500px;
	max-height: 100vh; /* Ограничиваем максимальную высоту */
	background: white;
	padding: 20px;
	box-shadow: -5px 0 10px rgba(0, 0, 0, 0.1);
	transition: right 0.3s ease-in-out;
	z-index: 1000;
	overflow-y: auto; /* Добавляем прокрутку */

	scrollbar-width: none;

	/* Скрываем скроллбар в Chrome, Safari, Edge */
	&::-webkit-scrollbar {
		display: none;
	}
`;

export const modalOpen = css`
	right: 0; /* Выдвигаем модалку */
`;

export const closeButton = css`
	background: none;
	border: none;
	cursor: pointer;
	top: 44.5px;
	right: 24px;
`;

export const contentGrid = css`
	display: flex;
  flex-direction: column;
  gap: 34px;
  margin-top: 44px;
  margin-bottom: 44px;
	justify-content: center;
	align-items: center;
`;
