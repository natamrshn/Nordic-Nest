import { css } from '@emotion/css';
import { fonts } from '~shared/styles';

export const box = css`
	margin-top: 144px;
	position: relative;

	h2 {
		text-align: center;
		z-index: 10;
		font-size: 80px;
		font-weight: 300;
		font-family: ${fonts.primary};
	}
`;

export const content = css`
	display: flex;
	justify-content: space-between;
	padding: 0 20px;
	gap: 40px;

	img {
		width: 660px;
		height: 990px;
		z-index: -10;
		margin-top: -150px;
	}
	div {
		margin-top: 214px;
		width: 660px;
		font-size: 24px;
		font-family: ${fonts.secondary};
		font-weight: 400;
		font-style: italic;
	}
	span {
		font-weight: 600;
	}
`;
