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
	box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
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
	// display: flex;
	// align-items: center;
	// justify-content: center;
`;

export const loginButton = css`
	width: 100%;
	padding: 12px;
	background-color: #8b7e7e;
	color: white;
	font-size: 16px;
	border: none;
	cursor: pointer;
	margin-top: 10px;
`;

export const footer = css`
	font-size: 12px;
	color: #555;
	text-align: center;
	margin-top: 20px;
`;

export const link = css`
	color: #000;
	font-weight: 500;
	text-decoration: underline;
	margin-left: 4px;
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