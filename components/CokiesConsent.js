import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { setCookie, hasCookie } from "cookies-next";
import { IoMdClose } from "react-icons/io";

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
        <Info>
          This site uses cookies to enhance your experience. See our{" "}
          <Link href="/docs/privacy-policy">privacy policy</Link> for more.
        </Info>
        <Buttons>
          <Link href="/">Preferences</Link>
          <Consent>
            <Decline onClick={(e) => denyCookies()}>Decline</Decline>
            <Accept onClick={(e) => acceptCookies()}>Accept</Accept>
            <Close onClick={(e) => closeP()}>
              <IoMdClose />
            </Close>
          </Consent>
        </Buttons>
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
  z-index: 298;
  padding: 24px 32px;
`;

const Banner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 755px;
  padding: 15px 24px;
  border-radius: 100vw;
  background-color: #edebeb;
  color: #252525;
  align-items: center;
  margin: 0 auto;
  font-size: "15px";
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
`;

const Info = styled.div`
  font-size: 14px;
  font-weight: 500;

  a {
    border-bottom: 1px solid #252525;
  }
`;
const Buttons = styled.div`
  display: flex;
  align-items: center;

  a {
    font-size: 14px;
    font-weight: 500;
    border-bottom: 1px solid #252525;
  }
`;

const ConsentButton = styled.button`
  min-width: 110px;
  margin-left: 15px;
  padding: 20px 10px;
  border-radius: 500px;
  border-color: rgba(37, 37, 37, 0);
  font-size: 17px;
  font-weight: 500;
  text-align: center;
  letter-spacing: -0.01em;
  cursor: pointer;
`;

const Consent = styled.div`
  display: flex;
  align-items: center;
`;
const Decline = styled(ConsentButton)`
  background-color: #d6d6d6;
  color: #252525;
`;

const Accept = styled(ConsentButton)`
  background-color: #252525;
  color: #dadada;
  border: 2px solid #252525;
`;

const Close = styled.div`
  margin-left: 12px;
  display: flex;
  padding: 10px;
  border: 2px solid transparent;
  border-radius: 500px;
  background-color: #e0e0e0;
  box-shadow: none;
  opacity: 1;
  color: #252525;
  cursor: pointer;
`;
