import styled, { ThemeProvider } from "styled-components";
import { theme } from "../styles/Theme";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <LayoutStyled id="Layout">
      <ThemeProvider theme={theme}>
        <Header />
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
