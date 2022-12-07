import styled, { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../styles/GlobalStyles";
import { theme } from "../styles/Theme";
import CookiesConsent from "./CokiesConsent";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <CookiesConsent />
      <ThemeProvider theme={theme}>
        <Header />
        <Main>
          <article>{children}</article>
        </Main>
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default Layout;

const Main = styled.main`
  background-color: #fff;
`;
