import { text } from "~modules/home/components/slider/components/text.styles";
import { colors } from "./colors";

/* eslint-disable quotes */
export const fonts = Object.freeze({
	primary: "'Inria Serif', sans-serif",
	secondary: "'Open Sans', sans-serif",
});

export const h2 = Object.freeze({
  fontSize: '54px',
  fontWeight: 700,
  lineHeight: '64px',
  fontFamily: fonts.primary,
  color: colors.text2,
  textAlign: 'center',
});
