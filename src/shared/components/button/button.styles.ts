import { css } from '@emotion/css';
import { colors, fonts } from '../../styles';

export const btnStyles = (disabled: boolean): string => {
	return css`
		padding: 10px 116px;
		font-size: 24px;
		color: ${colors.white};
		background-color: ${disabled ? colors.light_gray : 'transparent'};
		font-family: ${fonts.primary};
		border: 1px solid ${colors.white};
		text-align: center;
		backdrop-filter: blur(30px);

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
