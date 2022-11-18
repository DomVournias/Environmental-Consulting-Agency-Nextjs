import styled, { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../styles/GlobalStyles";
import { theme } from "../styles/Theme";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children, headerMenu }) => {
  console.log(headerMenu);
  return (
    <LayoutStyled>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Header headerMenu={headerMenu} />
        <Main>
          <article>{children}</article>
        </Main>
        <Footer />
      </ThemeProvider>
    </LayoutStyled>
  );
};

export default Layout;

const LayoutStyled = styled.div`
  /* transition: all 0.3s ease; */
`;

const Main = styled.main`
  display: block;
`;
