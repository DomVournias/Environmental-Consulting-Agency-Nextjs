import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { setCookie, hasCookie } from "cookies-next";
import { IoMdClose } from "react-icons/io";
import { theme } from "../styles/Theme";
import { FaCookie } from "react-icons/fa";

function CookiesConsent() {
  const [consent, setConsent] = useState(true);

  useEffect(() => {
    setConsent(hasCookie("localConsent"));
  }, []);

  const acceptCookies = () => {
    setConsent(true);

    setCookie("localConsent", "true", { maxAge: 60 * 60 * 24 * 365 });

    gtag("consent", "update", {
      ad_storage: "granted",
      analytics_storage: "granted",
    });

    console.log("accepting cookies");
  };

  const closeP = () => {
    setConsent(true);
    console.log("closing");
  };

  const denyCookies = () => {
    setConsent(true);
    setCookie("localConsent", "false", { maxAge: 60 * 60 * 24 * 365 });
    console.log("denying cookie");
  };

  if (consent === true) {
    return null;
  }

  return (
    <Container>
      <Banner>
        <Inner>
          <Info>
            <FaCookie />
            <span>
              This site uses cookies to enhance your experience.<br></br> See
              our <Link href="/docs/privacy-policy">privacy policy</Link> for
              more.
            </span>
          </Info>
          <Buttons>
            <Consent>
              <Decline onClick={(e) => denyCookies()}>Decline</Decline>
              <Accept onClick={(e) => acceptCookies()}>Accept</Accept>
            </Consent>
          </Buttons>
        </Inner>
        <Close onClick={(e) => closeP()}>
          <IoMdClose />
        </Close>
      </Banner>
    </Container>
  );
}

export default CookiesConsent;

const Container = styled.div`
  display: flex;
  position: fixed;
  left: 0;
  top: auto;
  right: 0;
  bottom: 0;
  z-index: 9999;
  padding: 14px 12px;

  @media ${theme.breakpoints.mobileL} {
    padding: 1rem 15vw;
  }

  @media ${theme.breakpoints.mobileS} {
    padding: 1rem 5vw;
  }
`;

const Banner = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-radius: 100vw;
  background-color: #f8f8f8;
  color: #252525;
  align-items: center;
  margin: 0 auto;

  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;

  @media ${theme.breakpoints.tablet} {
    padding: 2.5rem 1rem;
  }
`;

const Inner = styled.div`
  display: flex;

  @media ${theme.breakpoints.tablet} {
    flex-direction: column;
    gap: 1.5rem;
  }
`;

const Info = styled.div`
  font-size: 14px;
  font-weight: 500;
  display: flex;
  align-items: center;
  margin-right: 15px;
  width: 100%;
  justify-content: center;

  @media ${theme.breakpoints.mobileL} {
    flex-direction: column;
    gap: 1rem;
  }

  svg {
    font-size: 2.5rem;
    margin-right: 15px;
    color: #001416;
    opacity: 0.9;
  }

  span {
    width: 100%;

    @media ${theme.breakpoints.tablet} {
      width: 50%;
    }
  }

  a {
    border-bottom: 1px solid #00272d;
  }
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    font-size: 14px;
    font-weight: 500;
    border-bottom: 1px solid #252525;
  }
`;

const ConsentButton = styled.button`
  min-width: 110px;
  padding: 15px 20px;
  border-radius: 50px;
  border-color: rgba(37, 37, 37, 0);
  font-size: 17px;
  font-weight: 500;
  text-align: center;
  letter-spacing: -0.01em;
  cursor: pointer;
`;

const Consent = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  @media ${theme.breakpoints.mobileL} {
    flex-direction: column;
  }
`;
const Decline = styled(ConsentButton)`
  background-color: #d6d6d6;
  color: #252525;
`;

const Accept = styled(ConsentButton)`
  background-color: ${theme.blueTint.dark.b};
  opacity: 0.9;
  color: #dadada;
`;

const Close = styled.div`
  margin-left: 12px;
  display: flex;
  padding: 10px;
  border: 2px solid transparent;
  border-radius: 500px;
  background-color: #d6d6d6;
  color: #252525;
  box-shadow: none;
  cursor: pointer;

  @media ${theme.breakpoints.tablet} {
    position: absolute;
    right: 1rem;
    top: 1rem;
  }

  @media ${theme.breakpoints.mobileL} {
    right: 3vw;
    top: 3vh;
  }
`;
