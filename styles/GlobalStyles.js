import styled, { createGlobalStyle } from "styled-components";
import { mobileS } from "./Breakpoints";

export const GlobalStyles = createGlobalStyle`



  html {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    
  }

  body {
    font-family: Roboto, Arial;
    text-size-adjust: none;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    
  }

  body.disable-scroll {
    overflow: hidden;
}
  body.gray-background {
    background-color: #e5e5e5;
  }

  a:hover {
      opacity: .9;
      cursor: pointer;
    }

  input, a {
    all: unset;
  }

  input {
  color-scheme: dark;
  
  
}

  ul, li, button, h1, h2, h3, h4, h5, h6, p {
    all: unset;
    
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: inherit;
    font-weight: 500;
    color: inherit;
  }

  img {
    vertical-align: middle;
    border-style: none;
  }

* {
  box-sizing: border-box;
  /* Breakpoints */
  --container: 73rem;
  --left: 40rem;
  --sm: 20rem; // 320px
  --ml: 25rem; // 400px
  --t: 48rem; // 768px
  --l: 64rem; // 1024px
  --xl: 90rem; // 1440px
  --d: 160rem; // 2560px
  --c1:1;
  --c2:2;
  --c4:4;
  --c8:8;

  /* Typography */

  --headingLG: 2rem, 10vw, 6rem;

}

pre, code {
  overflow: scroll;
}

*:focus {
  outline: none !important;
}

svg {
  box-sizing: content-box;
}

::-webkit-scrollbar {
  width: 0.5em;
  
  
  
}

::-webkit-scrollbar-button {
  height: 0;
  transition: background-color .4s cubic-bezier(.23, 1, .32, 1);
  mix-blend-mode: difference;
}

::-webkit-scrollbar-track {
  background-color: rgba(0,0,0,0);
  mix-blend-mode: difference;
  
}

::-webkit-scrollbar-thumb {
  background: hsl(120 100% 20% / 1);
  border-radius: 100vw;
  transition: background-color .4s cubic-bezier(.23, 1, .32, 1);
  mix-blend-mode: difference;
  background-color: hsla(0,0%,0%,0.6);
  -webkit-transition: background-color .4s cubic-bezier(.23, 1, .32, 1);
  transition: background-color .4s cubic-bezier(.23, 1, .32, 1);
  mix-blend-mode: difference;
}

::-webkit-scrollbar-thumb:hover {
  background-color: hsla(0,0%,0%,0.7);
}

/* Global Components */

`;

export const OnlyMobile = styled.div`
  display: none;
  @media ${({ theme }) => theme.device.tablet} {
    display: flex;
    padding: 0em 1em;
  }
`;

export const Container = styled.div`
  margin: 0 auto;
  max-width: ${(props) => props.mx};
  padding: ${(props) => props.p};
  height: ${(props) => props.h};
`;

export const Section = styled.section`
  display: block;
  position: ${(props) => props.pos};
  overflow: ${(props) => props.overflow};
  width: ${(props) => props.w};
  max-width: ${(props) => props.mx};
  height: ${(props) => props.h};
  max-height: ${(props) => props.mh};
  margin: ${(props) => props.m};
  margin-top: ${(props) => props.mt};
  margin-bottom: ${(props) => props.mb};
  margin-left: ${(props) => props.ml};
  margin-right: ${(props) => props.mr};
  padding: ${(props) => props.p};
  padding-top: ${(props) => props.pt};
  padding-bottom: ${(props) => props.pb};
  padding-left: ${(props) => props.pl};
  padding-right: ${(props) => props.pr};
  background-color: ${(props) => props.bg};

  /* @media ${({ theme }) => theme.breakpoints.laptop} {
    
  } */
`;
