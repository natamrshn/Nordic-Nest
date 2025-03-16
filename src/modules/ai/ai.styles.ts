import { css } from '@emotion/css';
import { fonts } from '~shared/styles';

export const box = css`
	min-height: 50vh;
	margin-top: 120px;
	padding: 40px;

	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
`;

export const text = css`
	font-weight: 400;
	font-size: 16px;
	margin-top: 24px;
	text-align: center;
`;

export const button = css`
	margin-top: 44px;
	padding: 14px 120px;
	text-align: center;
	background: #31251f;
	color: #f7f6f4;
	font-size: 24px;
	font-weight: 400;
	font-family: ${fonts.secondary};
	cursor: pointer;
`;
