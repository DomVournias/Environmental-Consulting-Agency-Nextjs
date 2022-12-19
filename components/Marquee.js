import Image from "next/legacy/image";
import React from "react";
import styled, { css, keyframes } from "styled-components";
import { Section } from "../styles/GlobalStyles";

const Marquee = ({ companyLogos }) => {
  // console.log(companyLogos);
  return (
    <Section mx="90rem" m="0 auto">
      <Wrapper>
        <MarqueeGroup>
          {companyLogos.map(({ title, sourceUrl }, i) => (
            <Logo key={i}>
              <Image
                src={sourceUrl}
                alt={title}
                layout="fill"
                objectFit="contain"
              />
            </Logo>
          ))}
        </MarqueeGroup>
        <MarqueeGroup>
          {companyLogos.map(({ title, sourceUrl }, i) => (
            <Logo key={i}>
              <Image
                src={sourceUrl}
                alt={title}
                layout="fill"
                objectFit="contain"
              />
            </Logo>
          ))}
        </MarqueeGroup>
      </Wrapper>
    </Section>
  );
};

export default Marquee;

const Wrapper = styled.div`
  display: flex;
  position: relative;
  margin: auto;
  overflow: hidden;
  width: 100%;
  opacity: 0.5;
  margin: 7rem 0rem;

  &::before,
  &::after {
    content: "";
    height: 100px;
    position: absolute;
    width: 200px;
    z-index: 2;
    background: linear-gradient(
      to right,
      ${({ theme }) => theme.white} 0%,
      rgba(255, 255, 255, 0) 100%
    );
  }

  ::after {
    right: 0;
    top: 0;
    transform: rotateZ(180deg);
  }

  ::before {
    left: 0;
    top: 0;
  }
`;

const scrollX = keyframes`
  from {
    left: translateX(0)
  }
  to {
    transform: translateX(-100%);
  }
`;

const common = css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  width: 100%;
  animation: ${scrollX} 30s linear infinite;
`;

const MarqueeGroup = styled.ul`
  ${common}
`;
const Logo = styled.li`
  position: relative;
  display: grid;
  place-items: center;
  width: clamp(10rem, 1rem + 40vmin, 30rem);
  padding: calc(clamp(10rem, 1rem + 30vmin, 30rem) / 11);
  filter: grayscale(1);
`;
