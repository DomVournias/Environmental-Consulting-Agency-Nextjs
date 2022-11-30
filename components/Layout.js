import { ThemeProvider } from "styled-components";
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
        <main>
          <article>{children}</article>
        </main>
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default Layout;
