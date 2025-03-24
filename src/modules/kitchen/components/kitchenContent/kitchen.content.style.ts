
import { css } from '@emotion/css';
import { colors } from '~shared/styles';

export const container = css`
	width: 100%;
  height: max-content;
  margin: 0 0 100px;  
`;

export const title = css`
  padding: 0 0 10px;
`;

export const linkContainer = css`
  display: flex;
  gap: 20px;
  justify-content: space-between;
`;
export const description = css`
  width: 50%;
  padding: 0 20px 0 0;
`;

export const productContainer = css`
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;
  gap: 16px;
  padding: 24px 0;
`;
export const buttonContainer = css`
  display: flex;
  justify-content: center;
`;
export const button = css`
  height: 56px;
  width: 360px;
  background: rgba(49, 37, 31, 1);
  color: rgba(237, 235, 235, 1);
  font-family: Open Sans;
  font-weight: 400;
  font-size: 24px;
  line-height: 120%;

`;
