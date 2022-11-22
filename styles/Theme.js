import { m } from "framer-motion";

export const theme = {
  blue: "#006270",
  green: "#9cbe2b",
  hero: "rgba(229, 239, 240, 1)",
  brown: "#363635",
  orange: "#fe5e41",
  tint: "#d6fff6",
  black: "#000",
  white: "#fff",
  silver: "rgba(229, 229, 229, 0.6)",
  font: {
    h: {
      sm: "clamp(2rem, 10vw, 4rem)",
      md: "clamp(2rem, 10vw, 4.2rem)",
      lg: "clamp(2rem, 10vw, 4.7rem)",
    },
    p: {
      sm: "clamp(1rem, 10vw, 1.2rem)",
      md: "clamp(1rem, 10vw, 1.4rem)",
      lg: "",
    },
    base: "1rem",
    sm: "2rem",
    md: "3rem",
    lg: "4rem",
    h4: "clamp(0.4rem, 5vw, 1.2rem)",
  },
  margin: {
    bottom: {
      s7: "7rem",
      s10: "10rem",
    },
  },
};

// Conditional hover effects on links for Projects.js

export const activeColorLink = (i, imageIndex) => {
  if (i === imageIndex) {
    return theme.white;
  }
  return theme.black;
};

export const activeBackgroundLink = (i, imageIndex) => {
  if (i === imageIndex) {
    return theme.blue;
  }
  return "transparent";
};
export const activeTranslateArrow = (i, imageIndex) => {
  if (i === imageIndex) {
    return "translate(0)";
  }
  return "translateX(-20px)";
};
export const activeOpacity = (i, imageIndex) => {
  if (i === imageIndex) {
    return "1";
  }
  return "0";
};
