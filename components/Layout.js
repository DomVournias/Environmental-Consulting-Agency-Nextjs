import styled, { ThemeProvider } from "styled-components";
import { theme } from "../styles/Theme";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <LayoutStyled>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Main>{children}</Main>
        <Footer />
      </ThemeProvider>
    </LayoutStyled>
  );
};

export default Layout;

const LayoutStyled = styled.section`
  transition: all 0.3s ease;
`;

const Main = styled.main`
  z-index: 1;
  height: fit-content;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
