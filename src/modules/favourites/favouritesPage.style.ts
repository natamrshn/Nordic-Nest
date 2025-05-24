import { css } from '@emotion/css';

export const boxs = css`
	min-height: 100vh;
	margin-top: 120px;
	padding: 40px;
	display: flex;
	flex-direction: column;
`;

export const title = css`
  font-family: Inria Serif;
  font-weight: 700;
  font-size: 54px;
  line-height: 120%;
  letter-spacing: 0%;
  color: #313136;
  margin: 0 0 40px;
`;

export const productName = css`
  font-family: Open Sans;
  font-weight: 700;
  font-size: 18px;
  line-height: 150%;
  letter-spacing: 0%;

  color: #131215;
  padding: 0 0 6px;
`;

export const productCategory = css`
  font-family: Open Sans;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  letter-spacing: 0%;
  

  color: #515158;
  padding: 0 0 6px;
`;



export const productCard = css`
	display: flex;
	justify-content: space-between;
    gap: 20px;

	padding: 16px;
	box-shadow: 0px 0px 8px 0px rgba(184, 173, 173, 0.6);
	transition: background 0.3s ease;

	&:hover {
	  background: rgba(255, 255, 255, 0.5);
	}
`;

export const productMain= css`
	display: flex;
  width: 60%;
  gap: 20px;
`;


export const product = css`
	display: flex;
	width: 100%;
	flex-direction: column;
	justify-content: space-between;
  gap: 12px;

`;

export const productImage = css`
	width: 50%;
	height: 305px;
  object-fit: cover;
  object-position: center;
	border-radius: 12px;
	margin-bottom: 12px;
`;

export const quantityControls = css`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-top: 16px;
	gap: 12px;
`;
export const quantityContainer = css`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 40px 0;
	gap: 12px;
`;

export const qtyButton = css`
	width: 48px;
	height: 48px;
	background-color: #EDEBEB;
    color: #313136;
	font-weight: bold;
	font-size: 18px;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	transition: background-color 0.2s;
	border: none;

	&:hover {
		background-color: #d1d5db;
	}
`;

export const qtyDisplay = css`
	font-size: 16px;
	font-weight: 500;
	width: 24px;
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const removeButton = css`
	color: #313136;
	padding: 0 16px;
  border:none;
  background-color: transparent;

	// transition: background-color 0.2s;
	font-size: 24px;
	height: 24px;
	// display: flex;
	// align-items: center;
	// justify-content: center;

	&:hover {
		// background-color: #dc2626;
	}
`;


export const price = css`
	font-family: Open Sans;
	font-weight: 700;
	font-size: 18px;
	line-height: 120%;
	letter-spacing: 0%;
  color: #000000;

`;

export const addToCarts = css`
	width: 25%;
  display: flex;
	align-items: end; 

`;
