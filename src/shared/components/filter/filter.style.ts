import { css } from '@emotion/css';
import { colors } from '~shared/styles';

export const filter = css`
  display: flex;
  align-items: start;
  flex-direction: column;
  gap: 20px;
`;

export const titlecontainer = css`
  display: flex;
  width: 90%;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 10px 0 0;
  height: 40px; 
  
`;

export const closeButton = css`
  position: absolute;
  right: -72px;
  top: 50%;
  padding: 10px 0 0;
  transform: translateY(-50%);
  background: none;
  border: none;
  font-size: 20px;
  color: rgba(49, 49, 54, 1);
  cursor: pointer;
`;


export const title = css`
  text-aling: center;
  font-family: Inria Serif;
  font-weight: 400;
  font-size: 24px;
  line-height: 120%;
  letter-spacing: 0%;
  color: rgba(18, 18, 21, 1);

`;

export const price = css`
  display: flex;
  align-items: start;
  // flex-direction: column;
  gap: 12px;
  color: rgba(49, 49, 54, 1);
  margin: 6px 0;
`;

export const priceName = css`
  display: flex;
  align-items: start;
  margin: 0 0 40px;
`;

export const sort = css`
  display: flex;
  align-items: start;
  flex-direction: column;
  padding-right: 24px;
  padding-left: 24px;
  gap: 40px;
  color: rgba(128, 128, 132, 1);

  input[type="radio"] {
    accent-color: rgba(49, 49, 54, 1);

  }
`;


export const sortName = css`
  display: flex;
  align-items: start;
  // flex-direction: column;
  gap: 12px;
  color: rgba(49, 49, 54, 1);

  input[type="checkbox"] {
    accent-color: rgba(49, 49, 54, 1); 
    width: 18px;
    height: 18px;
    margin-right: 8px;
    cursor: pointer;
  }


`;

export const furnitureName = css`
  display: flex;
  align-items: start;
  flex-direction: column;
  gap: 12px;
  color: rgba(49, 49, 54, 1);

`;

export const button = css`
  height: 40px;
  width: 200px;
  background: rgba(49, 37, 31, 1);
  color: rgba(237, 235, 235, 1);
  font-size: 18px;
  margin: 0 0 10px;
`;

export const buttonWrite = css`
  height: 36px;
  width: 200px;
  background: trapsporant;
  color:rgba(49, 37, 31, 1);
  font-size: 18px;
  border: 1px solid rgba(49, 37, 31, 1)
`;

export const rangeStyles = css`
  .rc-slider {
    margin: 20px 0;
    height: 6px;
  }

  .rc-slider-rail {
    background-color: rgba(237, 235, 235, 1);
    height: 6px;
    border-radius: 3px;
  }

  .rc-slider-track {
    background-color: rgba(184, 173, 173, 1);
    height: 6px;
    border-radius: 3px;
  }

  .rc-slider-handle {
    border: 3px solid rgba(184, 173, 173, 1);
    height: 20px;
    width: 20px;
    margin-top: -7px;
    background-color: #fff;
    cursor: pointer;
    box-shadow: 0 0 5px rgba(184, 173, 173, 0.5);
    transition: 0.3s;
  }

  .rc-slider-handle:hover {
    border-color:  rgba(184, 173, 173, 1); 
  `;
