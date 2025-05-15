
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

export const icon = css`
  width: 24px;
  heigth: 24px;
`;


export const filter = css`
  background: transparent;
  border: none; 
`;

export const filterChange = css`
  position: relative;
  display: flex; 
  width: 224px;
  height: 40px;
  padding: 0 10px;
  background:rgba(237, 235, 235, 1);
  align-items: center; 


`;

export const filterContainer = css`
  position: relative;
  display: flex; 
  gap: 8px;
  padding: 24px 0 0;
`;

export const furnitureContainer = css`
  position: relative;
  display: flex; 
  gap: 8px;
  color: rgba(136, 122, 122, 1);
`;



export const filterTitle = css`
  font-family: Open Sans;
  font-weight: 400;
  font-size: 24px;
  line-height: 120%;
  letter-spacing: 0%;
  color: rgba(128, 128, 132, 1);
`;

export const filterBlock = css`
  position: relative;
  display: flex; 
  margin-bottom: 10px;
  width: 224px;
  height: 40px;
  background:rgba(237, 235, 235, 1);
  color: rgba(136, 122, 122, 1);
  padding: 0 6px;
  font-family: Open Sans;
  font-size: 16px;
  align-items: center; 


`;

export const closeButton = css`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: rgba(136, 122, 122, 1);
  font-size: 18px;
  cursor: pointer;
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

export const LeftPanelModal = css`
  height: 100%;

  padding: 0 100px;
  margin-left: 0;
  position: fixed;
  top: 0;
  left: 0;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1);
  background: rgba(247, 246, 244, 1);
  z-index: 1000;
  overflow-y: auto;

`;