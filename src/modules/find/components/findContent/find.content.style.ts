
import { css } from '@emotion/css';
import { colors } from '~shared/styles';

export const container = css`
	display: flex;
	justify-content: space-between;
	width: 100%;
  height: max-content;
  align-items: center;
  gap: 40px;

`;

export const imageStyle = css`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

export const icon = css`
	width: 20px;
	height: 20px;
	object-fit: fit;
  padding:0 4px;
`;



export const title = css`
  font-family: Inria Serif;
  font-weight: 700;
  font-size: 54px;
  line-height: 64.8px;
  letter-spacing: 0%;
  padding: 24px 0;
`;

export const box = css`  
	width: 100%;
`;

export const description = css`
  font-family: Open Sans;
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  letter-spacing: 0%;
  padding: 0 10px 20px;
  width: 100%;
  text-align: justify;
`;


export const contactContainer = css`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px;
`;

export const infoBlock = css`
  display: flex;

`;

export const block = css`
  display: flex;
  justify-content: space-between;

`;
export const link = css`
  text-decoration: none;
  color: inherit;
  padding: 0 4px;
  font-family: Open Sans;

  font-size: 16px;

`;



export const text = css`
  display: flex;
  font-family: Open Sans;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  letter-spacing: 0%;

`;

export const footerText = css`
  margin-top: 40px;
  font-size: 14px;
  font-family: Open Sans;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0%;

`;

export const imageArrow = css`
  width: 24px;
  height: 22px;
  object-fit: cover;
  padding: 0 0 0 12px;
`;