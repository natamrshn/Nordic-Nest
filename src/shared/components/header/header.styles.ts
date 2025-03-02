import { css } from '@emotion/css';
import { colors } from '~shared/styles';

export const box = (isLight: boolean) => css`
	position: fixed;
	top: 34px;
	left: 0;
	right: 0;
	z-index: 1000;
	padding: 30px 40px;
	display: flex;
	justify-content: space-between;
	flex-direction: row;
	background: ${isLight ? colors.white : `transparent`};
	color: ${isLight ? colors.black : colors.white};
	transition:
		background 0.3s ease-in-out,
		color 0.3s ease-in-out;
`;

export const section = css`
	display: flex;
	gap: 32px;
	align-items: center;
`;

export const ai = css`
	display: flex;
	align-items: center;
  margin-left: -200px;
`;

export const buttonLogout = (isLight: boolean) => css`
	min-width: 88px;
	color: ${isLight ? colors.black : colors.light_gray};
	border: 1px solid ${isLight ? colors.black : colors.light_gray};
	background: ${isLight ? colors.light_gray : colors.white};

	&:hover {
		color: ${isLight ? colors.white : colors.black};
		background: ${isLight ? colors.black : colors.light_gray};
	}
`;

export const button = (isLight: boolean) => css`
	min-width: 88px;
	border: 1px solid ${isLight ? colors.black : colors.light_blue};
`;
