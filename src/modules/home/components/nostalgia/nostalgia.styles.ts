import { css } from '@emotion/css';
import { fonts } from '~shared/styles';

export const box = css`
	margin-top: 834px;
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
	align-items: center;
	padding: 0 20px;
	margin-top: 10px;

	img {
		width: 660px;
		height: 990px;
		margin-top: -144px;
		z-index: -10;
	}
	p {
		margin-top: 214px;
	}
`;
