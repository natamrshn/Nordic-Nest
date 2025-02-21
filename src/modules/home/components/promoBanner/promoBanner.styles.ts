import { css } from '@emotion/css';
import { colors, fonts } from '~shared/styles';

export const box = css`
position: absolute;
top: 0;
left: 0;
right: 0;

z-index: 1000;
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
