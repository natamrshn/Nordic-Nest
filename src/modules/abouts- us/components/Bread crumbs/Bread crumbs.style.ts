import { css } from '@emotion/css';

export const container  = css`
  display: flex;
  justify-content: flex-start;
  align-items: center; 
  text-decoration: none;
  gap: 8px;
  padding: 0 0 20px;
`;

export const title = css` 
  font-family: Open Sans;
  font-weight: 400;
  font-size: 14px;
  line-height: 120%;
  letter-spacing: 0%;
  vertical-align: middle;
  text-align: end;
  text-decoration: none;
`;

export const titleHome = css`
  display: flex;
  align-items: center; 
  gap: 5px; 
  font-family: Open Sans;
  font-weight: 400;
  font-size: 14px;

  color: rgba(135, 141, 152, 1);
`;

export const imageStyle = css`
  width: 24px;
  height: auto;
  object-fit: cover;
  padding: 0 0 0 4px;
`;