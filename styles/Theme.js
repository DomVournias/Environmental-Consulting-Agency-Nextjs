export const theme = {
  blue: "rgba(12, 132, 255, 1)",
  green: "rgba(156, 190, 43, 1)",
  brown: "#363635",
  orange: "#fe5e41",
  tint: "#d6fff6",
  black: "#000",
  white: "#fff",
  silver: "rgba(229, 229, 229, 0.6)",
  font: {
    headingLG: "clamp(2rem, 10vw, 4.5rem)",
    plg: "clamp(1rem, 10vw, 1.2rem)",
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
