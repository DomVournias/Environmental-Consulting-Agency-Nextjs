import styled from "styled-components";
import Link from "next/link";
import CTA from "./CTA";
import { socials } from "../dummydata";

const Footer = () => {
  const footerLinks = [
    {
      label: "Εταιρία",
      url: "/contact",
    },
    {
      label: "Cookies",
      url: "/",
    },
    {
      label: "Πολιτική Απορρήτου",
      url: "/docs/privacy-policy",
    },

    {
      label: "Όροι Χρήσης",
      url: "/",
    },
  ];
  return (
    <FooterStyled>
      <Container>
        <Title>
          <span>Αξιοπιστία.</span>
          <span>Τεχνογνωσία.</span>
          <span>Συνέπεια.</span>
        </Title>
        {/* <CTA message="Ξεκινήστε τώρα" /> */}
        <Links>
          {/* <div /> */}
          <ul>
            {footerLinks.map(({ label, url }, i) => (
              <li key={i}>
                <Link href={url}>{label}</Link>
              </li>
            ))}
          </ul>
        </Links>
        <SubFooter>
          {/* <p>©2022 Geon Hellas IKE</p> */}
          <div id="subfooter_block">
            <span>Διεύθυνση</span>
            <p>Πρεβέζης 1, Νέα Φιλαδέλφεια, 143 42</p>
          </div>
          <div id="subfooter_block">
            <span>Επικοινωνία</span>
            {/* <a href="">info@geonhellas.gr</a> */}
            <a href="">+30 2103416717</a>
          </div>

          <Socials>
            <div>
              <span>Βρείτε μας</span>
              {socials.map(({ name, icon, link }, i) => (
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={`${link}`}
                  key={i}
                  id={name}
                >
                  {icon}
                </a>
              ))}
            </div>
          </Socials>
        </SubFooter>
      </Container>
    </FooterStyled>
  );
};

export default Footer;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  opacity: 0.9;

  span {
    color: ${({ theme }) => theme.white};
    font-size: ${({ theme }) => theme.font.h.xs};
    font-weight: 500;
  }
`;

const Socials = styled.div`
  position: relative;
  display: inline-block;
  opacity: 0.9;

  > div {
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3rem;
  }

  span {
    font-size: ${({ theme }) => theme.font.p.sm};
    margin-bottom: 2rem;
    display: inline-block;
    transform: rotate(-90deg);
    white-space: nowrap;
  }

  svg {
    width: auto;
    height: 1.2rem;
  }
`;

const FooterStyled = styled.footer`
  padding: 8rem 0rem;
  /* height: 90vh; */
  background-color: ${({ theme }) => theme.blueTint.dark.b};
  display: flex;
  flex-direction: column;
  width: 100vw;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  max-width: 71.25rem;
  align-self: center;
`;

const Links = styled.nav`
  width: 100%;
  display: flex;
  color: ${({ theme }) => theme.white};
  padding: 10rem 0rem;
  opacity: 0.8;

  > div {
    width: 50%;
    height: 100%;
    display: block;
  }

  ul {
    width: 100%;
    display: flex;
    font-size: ${({ theme }) => theme.font.p.md};
    font-weight: 500;
    /* padding-left: 20%; */
    gap: 5rem;
  }

  li {
    line-height: 2rem;
  }

  a {
    display: inline-block;
    position: relative;

    &:after {
      content: "";
      width: 100%;
      left: 0;
      height: 1px;
      position: absolute;
      bottom: 0;
      background: currentColor;
      pointer-events: none;
      transform-origin: left center;
      transform: scaleX(0) translateZ(0);
      transition: transform 0.6s cubic-bezier(0.77, 0, 0.175, 1);
    }

    :hover {
      &:after {
        transform: none;
        transition-timing-function: cubic-bezier(0.16, 1.08, 0.38, 0.98);
      }
    }
  }
`;

const SubFooter = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  font-weight: 500;

  justify-content: space-between;
  color: ${({ theme }) => theme.white};
  font-size: ${({ theme }) => theme.font.p.xs};

  & #subfooter_block {
    span {
      font-size: ${({ theme }) => theme.font.p.sm};
      margin-right: 3rem;
      opacity: 0.9;
    }

    p,
    a {
      font-weight: 400;
      opacity: 0.5;
    }
  }
`;
