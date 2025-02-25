import { css } from "@emotion/css";
import { fonts } from "~shared/styles/fonts";

export const faqItemStyle = css`
	width: 660px;
`;

export const questionStyle = css`
	display: flex;
	align-items: center;
	justify-content: space-between;
	cursor: pointer;
  font-size: 24px;
  font-weight: 400;
  font-family: ${fonts.secondary};
`;

export const iconStyle = css`
	cursor: pointer;
`;

export const answerStyle = css`
	cursor: default;
	margin-top: 8px;
  font-size: 16px;
  font-weight: 400;
  font-family: ${fonts.secondary};
  font-style: italic;
`;
