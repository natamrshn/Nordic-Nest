import { css } from '@emotion/css';

export const boxs = css`
	min-heigth: 100vh;
	margin-top: 120px;
	padding: 40px;
	display: flex;
	flex-direction: column;
	font-family: Open Sans;
	font-weight: 400;
`;

export const container = css`
	display: flex;
	width: 100%;
	justify-content: space-between;

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
  font-weight: 700;
  font-size: 18px;
  line-height: 150%;
  letter-spacing: 0%;

  color: #131215;
  padding: 0 0 6px;
`;

export const productCategory = css`
  font-size: 14px;
  line-height: 150%;
  letter-spacing: 0%;
  

  color: #515158;
  padding: 0 0 6px;
`;



export const productCard = css`
	display: flex;
	width: 80%;
  gap: 20px;
  justify-content: space-between;

	padding: 16px 0;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	transition: box-shadow 0.3s ease;

	&:hover {
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
	}
`;



export const product = css`
	display: flex;

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
	margin: 0 20px;
`;


export const quantityContainer = css`
	display: flex;
	align-items: center;
	justify-content: start;
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

export const order= css`
  width: 434px;
  background: #EDEBEB;
  height: max-content;

  padding: 0 44px 40px;

  font-family: Open Sans;
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  letter-spacing: 0%;
  color: rgba(81, 81, 88, 1);

`;

export const orderTitle = css`
	line-height: 135%;
	letter-spacing: 0%;
  color: #515158;
  
  padding: 48px 0 20px;
  border-bottom: 1px solid rgba(215, 209, 209, 1);
`;

export const text = css`
	font-size: 14px;
  padding: 6px 0 0;

`;

export const text1 = css`
  padding: 24px 0 18px;

`;
export const text2 = css`
  font-size: 24px;
  padding: 24px 0 24px;
  color: rgba(49, 49, 54, 1);
`;

export const textBottom = css`
  border-bottom: 1px solid rgba(215, 209, 209, 1)

`;

export const orderCarts = css`
  widht: 80%;
`;