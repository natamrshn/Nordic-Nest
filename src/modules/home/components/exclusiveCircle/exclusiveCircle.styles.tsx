import { css } from '@emotion/css';
import { colors } from '~shared/styles';

export const container = css`
	display: flex;
	justify-content: space-between;
	width: 90%;
  height: 960px;
  align-items: center;

`;

export const imageStyle = css`
	width: 90%;
  padding: 10px;
	height: 960px;
	object-fit: cover;
`;

export const icon = css`
	width: 24px;
	height: 24px;
	object-fit: cover;
`;

export const container_field = css`
  display: flex;

  &:focus {
		border: 1px solid rgba(8888); 
	}
`;

export const field = css`
	width: 90%;
	padding: 10px;
	background: transparent;
	border: none;
	border-bottom: 1px solid rgba(184, 173, 173, 1);

	&:focus {
		outline: none;
		border-bottom: 1px solid rgba(184, 173, 173, 0.6); 
	}

`;

export const form = css`
	width: 100%;
  padding: 20px 10px;
`;

export const titel = css`
  font-family: Inria Serif;
  font-weight: 700;
  font-size: 54px;
  line-height: 64.8px;
  letter-spacing: 0%;
  text-align: center;
  padding: 0  0 40px;
  color: rgba(19, 18, 21, 1);
`;

export const box = css`  
	width: 50%;
`;

export const description = css`
  font-family: Open Sans;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: 0%;
  color: rgba(19, 18, 21, 1);
  padding: 0 10px;
`;

export const button = css`
  padding: 12px;
  background: transparent;
  border: none;
  border-bottom: 1px solid rgba(184, 173, 173, 1)
`;

