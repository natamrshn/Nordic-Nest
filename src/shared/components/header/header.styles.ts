import { css } from '@emotion/css';
import { colors, fonts } from '~shared/styles';

export const box = css`
	display: flex;
	justify-content: space-between;
	padding: 20px 40px;
`;

export const divLogo = css`
	display: flex;
	gap: 20px;
	align-items: center;
`;

export const spanLogo = css`
	display: flex;
	font-size: 40px;
	font-family: ${fonts.logo};
`;

export const nav = css`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	gap: 20px;
`;

export const link = css`
	color: ${colors.black};
	&:focus {
		outline: none;
	}
	&:hover {
		color: ${colors.light_blue};
		text-decoration: none;
	}
`;

export const buttonLogout = css`
	min-width: 88px;
	color: ${colors.light_gray};
	border: 1px solid ${colors.light_gray};
	background: ${colors.white};

	&:hover {
		color: ${colors.white};
		background: ${colors.light_gray};
	}
`;

export const button = css`
	min-width: 88px;
	border: 1px solid ${colors.light_blue};
`;
