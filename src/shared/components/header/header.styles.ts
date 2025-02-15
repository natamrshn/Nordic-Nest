import { css } from '@emotion/css';
import { colors, fonts } from '~shared/styles';

export const box = css`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	padding: 30px 40px;
	display: flex;
	justify-content: space-between;
	flex-direction: row;
	background: grey;
`;

export const section = css`
	display: flex;
	gap: 32px;
	align-items: center;
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
