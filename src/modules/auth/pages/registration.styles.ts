import { css } from '@emotion/css';

export const form = css`
	width: 300px;
	margin: 250px auto;
	padding: 20px;
	border: 1px solid #ccc;
	border-radius: 8px;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	background-color: #fff;
`;

export const title = css`
	font-size: 24px;
	font-weight: bold;
	text-align: center;
	margin-bottom: 20px;
`;

export const input = css`
	width: 100%;
	padding: 10px;
	margin: 10px 0;
	border: 1px solid #ddd;
	border-radius: 4px;
	font-size: 14px;
`;

export const button = css`
	width: 100%;
	padding: 12px;
	border: none;
	border-radius: 4px;
	background-color: #4caf50;
	color: white;
	font-size: 16px;
	cursor: pointer;
	margin-top: 10px;
	transition: background-color 0.3s;

	&:hover {
		background-color: #45a049;
	}
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
