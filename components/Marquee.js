import Image from "next/legacy/image";
import React from "react";
import styled, { css, keyframes } from "styled-components";
import { companyLogos } from "../dummydata";
import { Section } from "../styles/GlobalStyles";

const Marquee = () => {
  return (
    <Section mx="71.25rem" m="0 auto">
      <Wrapper>
        <MarqueeGroup>
          {companyLogos.map(({ alt, image }, i) => (
            <Logo key={i}>
              <Image
                src={`${image}`}
                alt={alt}
                layout="fill"
                objectFit="contain"
              />
            </Logo>
          ))}
        </MarqueeGroup>
        <MarqueeGroup>
          {companyLogos.map(({ alt, image }, i) => (
            <Logo key={i}>
              <Image
                src={`${image}`}
                alt={alt}
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
  width: 71.25rem;
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
      ${({ theme }) => theme.hero} 0%,
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
  display: grid;
  place-items: center;
  width: clamp(10rem, 1rem + 40vmin, 30rem);
  padding: calc(clamp(10rem, 1rem + 30vmin, 30rem) / 11);
  filter: grayscale(1);
`;
