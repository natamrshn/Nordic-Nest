
import { css } from '@emotion/css';
import { colors } from '~shared/styles';

export const container = css`
	width: 100%;
  height: max-content;
`;

export const title = css`
  padding: 0 0 10px;
`;

export const linkContainer = css`
  display: flex;
  gap: 20px;
`;
export const description = css`
  width: 50%;
  padding: 0 20px 0 0;
`;

export const link = css`
  font-family: Open Sans;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0%;
  text-transform: uppercase;
  vertical-align: middle;
  color: rgba(128, 128, 132, 1);
`;

export const spaceItem = css`
  list-style: none;
  text decoration: none;
  font-family: Open Sans;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: 0%;
  color: rgba(128, 128, 132, 1);

`;


export const productContainer = css`
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;
  gap: 16px;
  padding: 24px;
`;

