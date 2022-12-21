import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import Image from "next/legacy/image";
import { Section } from "../styles/GlobalStyles";

const Isos = () => {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Section pos="relative">
      <Container>
        <Logos>
          <Image src="/isos.png" objectFit="contain" alt="isos" layout="fill" />
        </Logos>
        <Headings>
          <span>ISO Πιστοποιήσεις</span>
          <p>Μια μικρή περιγραφή για τις παροχές ISO</p>
        </Headings>
      </Container>
      <OverlayBackground />
      <ParallaxBackground
        bgImage="/isobg.png"
        style={{ backgroundPositionY: `-${offsetY * 0.2}px` }}
      />
    </Section>
  );
};

export default Isos;

const Container = styled.div`
  display: flex;
  align-items: center;
  max-width: 72.25rem;
  margin: 0 auto;
  padding: 10rem 0rem;
`;

const background = css`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  display: block;
`;

const OverlayBackground = styled.div`
  ${background}
  z-index: 2;
`;
const ParallaxBackground = styled.div`
  ${background}
  background-image: url(${(props) => props.bgImage});
  background-size: cover;
  opacity: 0.5;
  z-index: 1;
`;

const Logos = styled.div`
  display: block;
  position: relative;
  width: 50%;
  height: 120px;
  z-index: 3;
`;

const Headings = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  z-index: 3;

  span {
    font-size: ${({ theme }) => theme.font.h.md};
    font-weight: 500;
    margin-bottom: 1.2rem;
    color: ${({ theme }) => theme.blue};
  }

  p {
    font-size: ${({ theme }) => theme.font.p.md};
    font-weight: 400;
  }
`;
