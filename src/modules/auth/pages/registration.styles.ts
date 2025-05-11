import { css } from '@emotion/css';
import { fonts } from '~shared/styles';

export const form = css`
	margin: 20px auto;
	background-color: transparent;
	position: relative;
	width: 400px;
`;

export const formFieldsWrapper = css`
	display: flex;
	flex-direction: column;
	gap: 20px;
`;

export const subtitle = css`
	text-align: center;
	margin-top: 20px;
	font-size: 16px;
`;

export const title = css`
	font-size: 54px;
	font-family: ${fonts.primary};
	font-weight: 700;
	text-align: center;
	margin-top: 120px;
`;

export const label = css`
	font-size: 14px;
	color: #000000;
	display: block;
	font-family: ${fonts.secondary};
`;

export const input = css`
	padding: 12px 24px;
	background-color: transparent;
	width: 100%;
	font-size: 18px;
	border: none;
	border-bottom: 1px solid #d7d1d1;
	&::placeholder {
		color: #d7d1d1;
		font-size: 18px;
		font-weight: 400;
		font-family: ${fonts.secondary};
	}
`;

export const button = css`
	width: 100%;
	padding: 14px 89px;
	border: none;
	color: white;
	font-size: 24px;
	font-weight: 400;
	font-family: ${fonts.secondary};
	border: none;
	cursor: pointer;
	background-color: #887a7a;
	margin-top: 40px;

	&:hover {
		background-color: #1e1814;
	}
`;

export const checkboxLabel = css`
	font-size: 14px;
	font-family: ${fonts.secondary};
	font-weight: 400;
	display: flex;
	align-items: center;
	gap: 8px;
	margin-top: 8px;
	text-align: center;
`;

export const error = css`
	color: #ff4d4d;
	font-size: 14px;
	text-align: center;
	margin-top: 10px;
`;

export const success = css`
	color: #4caf50;
	font-size: 14px;
	text-align: center;
	margin-top: 10px;
`;
