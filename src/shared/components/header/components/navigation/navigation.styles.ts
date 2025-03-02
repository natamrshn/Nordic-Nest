import { css } from '@emotion/css';
import { colors } from '~shared/styles';

export const navigation = css`
	display: flex;
	align-items: center;
	gap: 12px;
`;

export const navigationItem = (isLight: boolean) => css`
	list-style: none;
	padding-inline: 32.5px;
	font-size: 16px;
	font-weight: 400;

	a {
		color: ${isLight ? colors.black : colors.white };
	}

	
`;

export const button = (isLight: boolean) => css`  
  padding: 12px;
  background: transparent;
  border: none;
  color: ${isLight ? colors.black : colors.white };
`;
