export const theme = {
  blue: "#006270",
  green: "#9cbe2b",
  blueTint: {
    dark: {
      a: "#000a0b",
      b: "#001416",
      c: "#001d22",
      d: "#00272d",
      e: "#003138",
      f: "#003b43",
      g: "#00454e",
      h: "#004e5a",
      i: "#005865",
    },
    light: {
      a: "#e6eff1",
      b: "#cce0e2",
      c: "#b3d0d4",
      d: "#99c0c6",
      e: "#80b1b8",
      f: "#66a1a9",
      g: "#4d919b",
      h: "#33818d",
      i: "#1a727e",
    },
  },
  hero: "#cce0e2",
  brown: "#363635",
  orange: "#fe5e41",
  tint: "#d6fff6",
  black: "#000",
  white: "#fff",
  silver: "rgba(229, 229, 229, 0.6)",

  breakpoints: {
    mobileS: "screen and (max-width: 20rem)",
    mobileM: "screen and (max-width: 23.43rem)",
    mobileL: "screen and (max-width: 26.56rem)",
    tablet: "screen and (max-width: 48rem)",
    laptop: "screen and (max-width: 64rem)",
    laptopL: "screen and (max-width: 90rem)",
    desktop: "screen and (max-width: 160rem)",
  },
  font: {
    h: {
      xs: "clamp(1.3rem, 10vw, 3.5rem)",
      sm: "clamp(2rem, 10vw, 4rem)",
      md: "clamp(2rem, 10vw, 4.2rem)",
      lg: "clamp(2rem, 10vw, 4.7rem)",
      xl: "clamp(2rem, 10vw, 5.7rem)",
    },
    p: {
      sm: "clamp(1rem, 10vw, 1.2rem)",
      sl: "clamp(1rem, 10vw, 1.3rem)",
      md: "clamp(1rem, 10vw, 1.4rem)",
      lg: "clamp(1.2rem, 10vw, 1.8rem)",
      xl: "clamp(1.2rem, 10vw, 3.2rem)",
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
