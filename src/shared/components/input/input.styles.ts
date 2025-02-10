import { css } from '@emotion/css';
import { colors } from '../../styles';

export const inputWrapper = css`
	display: flex;
	flex-direction: column;
	width: 100%;
`;

export const inputStyles = (hasError: boolean): string => {
	return css`
		width: 100%;
		padding: 10px;
		font-size: 14px;
		font-weight: 400;
		color: ${colors.black};
		background-color: ${colors.white};
		border: 1px solid ${hasError ? colors.light_red : colors.gray};
		border-radius: 10px;
		box-shadow: 0px 1px 1px rgba(255, 255, 255, 0.06);
		text-align: left;
		outline: none;

		&:focus {
			border-color: ${colors.light_blue};
		}

		&:disabled {
			cursor: not-allowed;
		}
	`;
};

export const errorTextStyles = css`
	color: ${colors.light_red};
	font-size: 14px;
	margin-top: 8px;
	text-align: left;
`;
