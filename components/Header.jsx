import Image from "next/legacy/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import styled, { css } from "styled-components";
import { links, routes } from "../dummydata";
import geonLogoDark from "../public/GeonLogoDark.png";
import geonLogoWhite from "../public/GeonLogoWhite.png";
import SocialMedia from "./SocialMedia";

const Header = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => setIsToggled((prevState) => !prevState);

  useEffect(() => {
    if (isToggled === true) {
      window.document.body.classList.add("disable-scroll");
    }
    if (isToggled === false) {
      window.document.body.classList.remove("disable-scroll");
    }
  }, [isToggled]);

  return (
    <Wrapper>
      <Container>
        <Nav>
          <LogoWhite href="/" isToggled={isToggled}>
            <Image
              src={geonLogoWhite}
              objectFit="contain"
              alt="logo"
              width="150"
              height="100"
            />
          </LogoWhite>
          <LogoDark href="/" isToggled={isToggled}>
            <Image
              src={geonLogoDark}
              objectFit="contain"
              alt="logo"
              width="150"
              height="100"
            />
          </LogoDark>

          <MenuToggle
            aria-label="Toggle"
            aria-controls="navbar"
            aria-expanded={isToggled ? "true" : "false"}
            onClick={handleToggle}
            opacity={isToggled ? "0" : "1"}
            isToggled={isToggled}
          >
            {" "}
            <span> Toggle navigation </span>{" "}
          </MenuToggle>
        </Nav>

        <Menu visibility={isToggled ? "visible" : "hidden"}>
          <Block>
            <Content>
              <Links isToggled={isToggled}>
                <List>
                  {routes.map(({ label, path }, i) => (
                    <ListItem key={i}>
                      <Link href={`${path}`}>
                        <span>{label}</span>
                        <Arrow />
                      </Link>
                    </ListItem>
                  ))}
                </List>
              </Links>

              <ContactInfo isToggled={isToggled}>
                <EmailMobile href="">info@geonhellas.gr</EmailMobile>
                <InfoBlock>
                  <Heading>Διεύθυνση</Heading>
                  <p>
                    Πρεβέζης 1, <br /> Νέα Φιλαδέλφεια, 143 42
                  </p>
                </InfoBlock>
                <InfoBlock>
                  <Heading>Επικοινωνία</Heading>
                  <a href="">info@geonhellas.gr</a>
                  <a href="">+30 2103416717</a>
                </InfoBlock>
                <SocialMedia color={`${({ theme }) => theme.white}`} />
              </ContactInfo>
            </Content>
          </Block>
        </Menu>
      </Container>
    </Wrapper>
  );
};

export default Header;

const EmailMobile = styled.a`
  display: none;
  opacity: 0.6;
  line-height: 2rem;
  padding: 0.5rem 2rem;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    display: block;
  }
`;

const fadeUp = css`
  transform: ${({ isToggled }) =>
    isToggled ? "translateY(0)" : "translateY(2rem)"};
  opacity: ${({ isToggled }) => (isToggled ? "1" : "0")};
`;

const ContactInfo = styled.aside`
  width: 34%;
  display: flex;
  flex-direction: column;
  gap: 5rem;

  // Animation
  ${fadeUp}
  transition: ${({ isToggled }) =>
    isToggled ? "all .8s cubic-bezier(.4,0,.2,1);" : ""};

  @media ${({ theme }) => theme.breakpoints.tablet} {
    width: 100%;
  }
`;

const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;

  p,
  a {
    opacity: 0.6;
    line-height: 2rem;
  }

  @media ${({ theme }) => theme.breakpoints.tablet} {
    display: none;
  }
`;

const Heading = styled.span`
  font-size: 1.4rem;
  font-weight: 500;
  margin-bottom: 2rem;
`;

const Arrow = styled(BsArrowRight)`
  font-size: ${({ theme }) => theme.font.h.arrow};
  stroke-width: 0.4;
  opacity: 0;
  transform: translateX(-20px);
`;

const Content = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;
  color: #fff;
  gap: 2.5rem;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    flex-direction: column;
  }
`;

const Links = styled.nav`
  width: 66%;
  ${fadeUp}
  transition: ${({ isToggled }) =>
    isToggled ? "all .5s cubic-bezier(.4,0,.2,1);" : ""};

  @media ${({ theme }) => theme.breakpoints.tablet} {
    width: 100%;
  }
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-weight: 500;
  list-style: none;
  margin-block-start: 0em;
  margin-block-end: 0em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 0px;
`;

const ListItem = styled.li`
  color: #fff;
  font-size: ${({ theme }) => theme.font.h.headerLinks};

  :hover {
    background-color: ${({ theme }) => theme.blue};
    ${Arrow} {
      opacity: 1;
      transform: translateX(0px);
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
  }

  a {
    display: flex;
    gap: 1em;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 2rem;
  }
`;

const Menu = styled.div`
  display: block;
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.blueTint.dark.a};
  z-index: 888;
  visibility: ${(props) => props.visibility};
`;

const Wrapper = styled.header`
  top: 0;
  left: 0;
  height: 9rem;
  display: flex;
  align-items: center;
  width: 100%;
  z-index: 2000;
`;

const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 90rem;
`;

const Block = styled.div`
  max-width: 90rem;
  height: 100%;
  margin: 0 auto;
`;

const LogoWhite = styled(Link)`
  width: 30vw;
  display: block;
  position: absolute;
  z-index: 999;
  opacity: ${({ isToggled }) => (isToggled ? "1" : "0")};
  visibility: ${({ isToggled }) => (isToggled ? "visible" : "hidden")};
`;

const LogoDark = styled(Link)`
  width: 30vw;
  display: block;
  z-index: 999;
  opacity: ${({ isToggled }) => (isToggled ? "0" : "1")};
  visibility: ${({ isToggled }) => (isToggled ? "hidden" : "visible")};
`;

const Nav = styled.nav`
  width: calc(100% - 48px);
  margin: 0 auto;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const linesPosition = css`
  content: " ";
  position: absolute;
  display: block;
  opacity: 1;
  height: 5px;
  border-radius: 1px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  @media ${({ theme }) => theme.breakpoints.mobileM} {
    height: 4px;
  }
`;

const MenuToggle = styled.button`
  border: none;
  border-radius: 0;
  background-color: transparent;
  position: relative;
  display: block;
  width: 50px;
  height: 35px;
  padding: 0;
  z-index: 1300;
  text-decoration: none;
  cursor: pointer;
  z-index: 999;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  mix-blend-mode: difference;

  @media ${({ theme }) => theme.breakpoints.mobileM} {
    height: 32px;
  }

  &::before {
    transform: ${({ isToggled }) =>
      isToggled
        ? "translate(25px,-50%) rotate(-45deg) scaleX(1)"
        : "translateX(25px) rotate(0deg)"};
    width: ${({ isToggled }) => (isToggled ? "40px" : "50px")};
    top: ${({ isToggled }) => (isToggled ? "50%" : "0")};
  }

  ::before {
    ${linesPosition}
    right: 50%;
    background: #fff;
  }

  & span {
    opacity: ${(props) => props.opacity};
  }

  span {
    position: absolute;
    display: block;
    width: 35px;
    height: 5px;
    top: 50%;
    border-radius: 1px;
    right: 50%;
    text-indent: 100%;
    white-space: nowrap;
    overflow: hidden;
    transform: translate(25px, -50%) rotate(0deg);
    background: #fff;
    transition: all 0.1s cubic-bezier(0.4, 0, 0.2, 1);

    @media ${({ theme }) => theme.breakpoints.mobileM} {
      height: 4px;
    }
  }

  &::after {
    transform: ${({ isToggled }) =>
      isToggled
        ? "translate(25px,50%) rotate(45deg) scaleX(1);"
        : "translateX(25px) rotate(0deg)"};
    width: ${({ isToggled }) => (isToggled ? "40px" : "20px")};
    bottom: ${({ isToggled }) => (isToggled ? "50%" : "0")};
  }

  ::after {
    ${linesPosition}
    right: 50%;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    background: #fff;
  }
`;
