import { css } from '@emotion/css';
import { fonts } from '~shared/styles';

export const overlay = css`
	position: fixed;
	inset: 0;
	background-color: rgba(0, 0, 0, 0.4);
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const modal = css`
	background-color: #fff;
	padding: 40px 72px;
	width: 490px;
	border-radius: 8px;
	position: relative;
	box-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
`;

export const closeButton = css`
	position: absolute;
	top: 20px;
	right: 20px;
	background: none;
	border: none;
	font-size: 24px;
	cursor: pointer;
`;

export const title = css`
	text-align: center;
	font-size: 54px;
	font-weight: 700;
	font-family: ${fonts.primary};
	color: #313136;
`;

export const subtitle = css`
	text-align: center;
	font-size: 14px;
	color: #313136;
	font-weight: 400;
	font-family: ${fonts.secondary};
`;

export const label = css`
	font-size: 14px;
	color: #000000;
	display: block;
	font-family: ${fonts.secondary};
`;

export const input = css`
	padding: 12px 24px;
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

export const formFieldsWrapper = css`
	display: flex;
	flex-direction: column;
	gap: 20px;
  margin-top: 80px;
`;

export const passwordWrapper = css`
	position: relative;
	width: 100%;
`;

export const eyeIcon = css`
	position: absolute;
	right: 24px;
	top: 50%;
	transform: translateY(-50%);
	cursor: pointer;
	width: 24px;
	height: 24px;
`;

export const loginButton = css`
	width: 100%;
	padding: 14px 139px;
	border: none;
	color: white;
	font-size: 24px;
	font-weight: 400;
	border: none;
	cursor: pointer;
	background-color: #887a7a;
	margin-top: 80px;

	&:hover {
		background-color: #1e1814;
	}
`;

export const footer = css`
	display: flex;
	gap: 15px;
	font-size: 14px;
	color: #515158;
	margin-top: 40px;
	margin-bottom: 20px;
	font-family: ${fonts.secondary};
`;

export const link = css`
	color: #31251f;
	font-weight: 500;
	text-decoration: underline;
  cursor: pointer;
  font-size: 14px;
  font-family: ${fonts.secondary};
`;

export const error = css`
	color: #ff4d4d;
	font-size: 16px;
	text-align: center;
	margin-top: 10px;
`;
export const success = css`
	color: #4caf50;
	font-size: 16px;
	text-align: center;
	margin-top: 10px;
`;
