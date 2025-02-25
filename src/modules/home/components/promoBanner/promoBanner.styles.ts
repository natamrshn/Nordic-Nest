import { css } from '@emotion/css';
import { colors, fonts } from '~shared/styles';

export const box = css`
	position: fixed;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 65px;
	height: 34px;
	background-color: ${colors.black};
	color: ${colors.white};

	hr {
		height: 20px;
		color: black;
	}

	p {
		font-size: 12px;
		font-weight: 400;
		font-family: ${fonts.primary};
	}
`;
