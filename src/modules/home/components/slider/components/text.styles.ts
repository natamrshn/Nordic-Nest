import { css } from '@emotion/css';
import { colors } from '~shared/styles';

export const box = css`
	position: absolute;
	top: 30%;
	z-index: 1000;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;

export const heading = css`
	color: ${colors.white};
  font-size: 54px;
  font-weight: 400;
`;

export const button = css`
  margin-top: 118px;
`;

export const text = css`
  color: ${colors.white};
  font-size: 18px;
  font-weight: 700;
  margin-top: 36px;
`;