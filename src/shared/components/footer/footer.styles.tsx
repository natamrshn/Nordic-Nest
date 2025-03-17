import { css } from '@emotion/css';
import { colors } from '~shared/styles';

export const box = css`
	width: 100%;
	color: rgba(247, 246, 244, 1);
	padding: 40px;
	background: ${colors.footer};
	font-family: Open Sans;
	font-weight: 400;
	font-size: 18px;
	letter-spacing: 0%;

`;

export const icon = css`
	width: 20px;
	height: 20px;
	object-fit: cover;
`;


export const container = css`
	display: flex;
	justify-content: space-between;
	width: 100%;
`;

export const span = css`
	color: ${colors.black};
	font-weight: 500;
`;
export const titel = css`
	color: ${colors.white};
	padding: 10px 0;
  font-family: League Spartan;
  font-weight: 400;
  font-size: 24px;
  line-height: 24px;
  letter-spacing: -10%;

`;


export const section = css`
	width: 30%;
`

export const section_1 = css`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 0 32px; 
`; 

export const contact= css`
  white-space: nowrap;
	display: flex;
  gap: 5px;
  align-items: center;
`;

export const a = css`
	text-decoration: none;
	color: inherit;
`;


export const description = css`
	color: ${colors.white};
	font-family: Open Sans;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: 0%;

`;

