import { css } from '@emotion/css';
import { colors } from '~shared/styles';

export const box = css`
	position: absolute;
	top: 238px;
	z-index: 100;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	gap: 100px;
`;

export const heading = css`
	color: ${colors.white};
  font-size: 54px;
  font-weight: 400;
`;
