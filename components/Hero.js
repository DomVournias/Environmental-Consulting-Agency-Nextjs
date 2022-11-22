import Image from "next/legacy/image";
import Link from "next/link";
import React from "react";

import styled from "styled-components";
import { links } from "../dummydata";
import { Section } from "../styles/GlobalStyles";
import Marquee from "./Marquee";
import SocialMedia from "./SocialMedia";

const Hero = () => {
  return (
    <Section mx="" mt="-132px" p="" overflow="hidden">
      <Inner>
        <span id="ballone">
          <span>
            <Image src="/backHero1.png" width="700" height="700" />
          </span>
        </span>
        <span id="balltwo">
          <span>
            <Image src="/backHero2.png" width="500" height="500" />
          </span>
        </span>

        <Wrapper>
          <Title>
            <span>Αξιοπιστία. </span>
            <span>Τεχνογνωσία. </span>
            <span>Συνέπεια. </span>
          </Title>
          <HeroMenu>
            <ul>
              {links.map(({ name, link }, i) => (
                <li key={i}>
                  <Link href={`/${link}`}>{name}</Link>
                </li>
              ))}
            </ul>
            <SocialMedia color={`${({ theme }) => theme.black}`} />
          </HeroMenu>
          <Marquee />
        </Wrapper>
      </Inner>
    </Section>
  );
};

export default Hero;

const Inner = styled.div`
  padding-top: 17rem;
  padding-bottom: 1rem;
  background-color: ${({ theme }) => theme.hero};
  position: relative;

  & #ballone {
    top: -20rem;
    right: -15rem;
    opacity: 0.6;
  }

  & #balltwo {
    bottom: -10rem;
    left: -10rem;
    opacity: 0.6;
  }

  & #ballone,
  & #balltwo {
    > span {
      position: relative;
      display: block;
    }
  }

  & #ballone,
  & #balltwo {
    position: absolute;
  }
`;

const Wrapper = styled.div`
  max-width: 71.25rem;
  padding: 0 1.5rem;
  margin: 0 auto;
`;

const HeroMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ul {
    font-size: 1.6rem;
    font-weight: 500;
    display: flex;
    margin: 0;
    li {
      margin: 0 4rem 0 0;

      a {
        position: relative;
        padding: 1.2rem 0;
        display: block;

        :hover {
          ::after {
            width: 0%;
          }
        }

        ::after {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          content: " ";
          display: block;
          width: 100%;
          height: 1px;
          background: #000;
          position: absolute;
          bottom: 0;
          right: 0;
        }
      }
    }
  }
`;

const Title = styled.h1`
  display: flex;
  flex-direction: column;
  font-size: ${({ theme }) => theme.font.h.lg};
  font-weight: 500;
  margin: 0 0 0.7em;

  span {
    margin-bottom: 1rem;
  }
`;
