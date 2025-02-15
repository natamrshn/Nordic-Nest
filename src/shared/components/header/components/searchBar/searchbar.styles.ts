import { css } from '@emotion/css';
import { colors, fonts } from '~shared/styles';

export const search = css`
	position: relative;
	width: 236px;
`;

export const input = css`
	width: 100%;
	height: 24px;
	padding-left: 32px;
  border: none;
  border-bottom: 1px solid ${colors.nude};
	outline: none;
	font-size: 16px;
  background: transparent;

	&::placeholder {
		color: #aaa;
	}
`;

export const searchIcon = css`
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
`;
