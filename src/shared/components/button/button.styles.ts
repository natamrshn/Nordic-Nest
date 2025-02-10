import { css } from '@emotion/css';
import { colors, fonts } from '../../styles';

export const btnStyles = (disabled: boolean): string => {
	return css`
		padding: 10px;
		font-size: 14px;
		color: ${colors.white};
		background-color: ${disabled ? colors.light_gray : colors.light_blue};
		font-family: ${fonts.primary};
		border: none;
		border-radius: 10px;
		text-align: center;

		&:hover {
			cursor: pointer;
		}

		&:focus {
			outline: none;
			box-shadow: none;
		}
	`;
};

export const btnContentWrapper = css`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const iconWrapper = css`
	display: flex;
	align-items: center;
`;

export const mr = css`
	margin-right: 15px;
`;
