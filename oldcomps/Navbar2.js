import Image from "next/legacy/image";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import styled from "styled-components";
import geonLogoWhite from "../public/GeonLogo.png";
import geonLogoDark from "../public/GeonLogoDark.png";
import { tablet } from "../styles/Breakpoints";

const Navbar = () => {
  const pages = [
    {
      name: "Εταιρία",
      link: "/",
    },
    {
      name: "Έργα",
      link: "/",
    },
    {
      name: "Νέα",
      link: "/",
    },
  ];

  return (
    <Header>
      <Nav>
        <Left>
          <LogoWhite href="/">
            <Image
              src={geonLogoWhite}
              // layout="fill"
              objectFit="contain"
              alt="logo"
              width="100"
            />
          </LogoWhite>
          <LogoDark href="/">
            <Image
              src={geonLogoDark}
              // layout="fill"
              objectFit="contain"
              alt="logo"
              width="100"
            />
          </LogoDark>
        </Left>
        <Center>
          <ul>
            {pages.map((page, i) => (
              <Link href={page.link} key={i}>
                <li>{page.name}</li>
              </Link>
            ))}
          </ul>
        </Center>
        <Right>
          <Icon>
            <AiOutlineSearch />
          </Icon>
          <Icon>
            <AiOutlineMenu />
          </Icon>
        </Right>
      </Nav>
    </Header>
  );
};

export default Navbar;

const LogoWhite = styled(Link)`
  opacity: 1;
  display: block;
  position: absolute;
`;
const LogoDark = styled(Link)`
  opacity: 0;
  display: block;
`;

const Header = styled.header`
  width: 100%;
  position: relative;
  display: flex;
  z-index: 999999;
  padding: 0;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  color: rgba(255, 255, 255, 255);
  transition: all 0.3s ease;
  margin-bottom: -100px;

  /* :hover {
    background-color: rgba(255, 255, 255, 255);
    color: rgba(0, 0, 0, 1);

    ${LogoWhite} {
      opacity: 0;
    }

    ${LogoDark} {
      opacity: 1;
    }
  } */
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

const Left = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`;

const Icon = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Center = styled.div`
  @media ${tablet} {
    display: none;
  }
  ul {
    display: flex;
    gap: 5em;
  }

  li {
    font-size: 1.14rem;
    font-weight: 400;
  }
`;

const Right = styled.div`
  display: flex;
  gap: 1em;
  font-size: 1.65rem;
`;
