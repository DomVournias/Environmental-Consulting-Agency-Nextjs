import gsap, { Elastic, Power3 } from "gsap";
import Image from "next/legacy/image";
import Link from "next/link";
import React, { useEffect } from "react";
import styled from "styled-components";
import { links } from "../dummydata";
import { Section } from "../styles/GlobalStyles";
import Marquee from "./Marquee";
import SocialMedia from "./SocialMedia";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { theme } from "../styles/Theme";
import CallButton from "./CallButton";

const Hero = ({ projects }) => {
  useEffect(() => {
    gsap.fromTo(
      ".heading",
      {
        opacity: 0,
        y: "-100px",
      },
      {
        y: "0px",
        opacity: 0.85,
        duration: 0.4,

        stagger: 0.6,
        visibility: "visible",
      }
    );

    gsap.fromTo(
      "#image",
      {
        opacity: 0,
        // x: 30,
      },
      {
        opacity: 1,
        // x: 0,
        duration: 0.3,

        delay: 1,
        visibility: "visible",
      }
    );

    // gsap.fromTo(
    //   "#menu",
    //   {
    //     opacity: 0,
    //     y: 40,
    //   },
    //   {
    //     opacity: 1,
    //     y: 0,
    //     duration: 0.5,
    //     delay: 2,
    //     visibility: "visible",
    //   }
    // );

    // gsap.fromTo(
    //   "#socials",
    //   {
    //     opacity: 0,
    //   },
    //   {
    //     opacity: 1,
    //     duration: 0.5,

    //     delay: 2.5,
    //     visibility: "visible",
    //   }
    // );
  }, []);

  const titles = [
    {
      id: "first",
      text: "Αξιοπιστία",
    },
    {
      id: "second",
      text: "Τεχνογνωσία",
    },
    {
      id: "third",
      text: "Συνέπεια",
    },
  ];

  const projectImages = projects.map(
    (image) => image.featuredImage.node.sourceUrl
  );

  // console.log(theme);

  return (
    <Section mx="" mt="-9rem" p="" overflow="hidden">
      <Inner>
        <span id="ballone">
          <span>
            <Image
              src="/backHero1.png"
              width="700"
              height="700"
              alt="cirlceOne"
            />
          </span>
        </span>
        <span id="balltwo">
          <span>
            <Image
              src="/backHero2.png"
              width="500"
              height="500"
              alt="cirlceTwo"
            />
          </span>
        </span>

        <Wrapper>
          <Content>
            <Title>
              {titles.map(({ id, text }, i) => (
                <span key={i}>{text}</span>
              ))}
              <p>
                Η ομάδα των ειδικών μας παρέχει συνεχή υποστήριξη καθ’ όλη τη
                διάρκεια των έργων σας.
              </p>
            </Title>
            <ImageContainer id="image">
              <Image
                src="/heroGridImage5.png"
                objectFit="contain"
                alt="hero-image"
                layout="fill"
              />
            </ImageContainer>
          </Content>

          <HeroMenu id="menu">
            <ul>
              {links.map(({ label, path }, i) => (
                <li key={i}>
                  <Link href={`${path}`}>{label}</Link>
                </li>
              ))}
            </ul>
            <CallButton />
            {/* <Socials id="socials">
              <SocialMedia color={`${({ theme }) => theme.black}`} />
            </Socials> */}
          </HeroMenu>
          {/* <Marquee /> */}
        </Wrapper>
      </Inner>
    </Section>
  );
};

export default Hero;

const Content = styled.div`
  display: flex;
  padding-bottom: 4rem;
`;
const ImageContainer = styled.div`
  position: relative;
  width: 50%;
  margin-top: -6rem;
  margin-left: 5rem;
  margin-right: -5rem;
  visibility: hidden;

  > span {
    /* margin-top: -3rem !important; */

    > img {
    }
  }
`;

const Title = styled.h1`
  width: 50%;
  display: flex;
  flex-direction: column;
  font-weight: 500;
  margin: 0 0 5rem;

  p {
    margin-top: 2em;
    opacity: 0.8;
    font-size: ${({ theme }) => theme.font.p.md};
  }

  span {
    color: ${({ theme }) => theme.black};
    background-color: ${({ theme }) => theme.hero};
    font-size: ${({ theme }) => theme.font.h.lg};
    display: block;
    letter-spacing: -5px;
    position: relative;
    font-size: 5.2rem;
    opacity: 0.9;

    /* height: 7rem; */

    /* svg {
      font-size: 1.1rem;
      margin-left: 1rem;
    } */

    /* > span {
      position: absolute;
      display: block;
      visibility: hidden;
    } */

    /* & #first {
      width: 100%;
      display: flex;
      justify-content: center;
    }

    & #second {
      width: 100%;
      display: flex;
      justify-content: center;
    }

    & #third {
      width: 100%;
      display: flex;
      justify-content: center;
    } */
  }
`;

const Inner = styled.div`
  padding-top: 15rem;
  padding-bottom: 3rem;
  background-color: ${({ theme }) => theme.blueTint.light.b};
  position: relative;

  & #ballone {
    top: -20rem;
    right: -15rem;
    opacity: 0.5;
  }

  & #balltwo {
    bottom: -10rem;
    left: -10rem;
    opacity: 0.5;
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
  padding: 1.5rem 4rem;
  background-color: ${({ theme }) => theme.blueTint.light.e};
  border-radius: 25px;
  box-shadow: rgba(0, 0, 0, 0.03) 0px 4px 12px;

  ul {
    font-size: ${({ theme }) => theme.font.p.sm};
    font-weight: 500;
    display: flex;
    gap: 1rem;
    margin: 0;

    li {
      color: ${({ theme }) => theme.blueTint.light.a};
      background-color: ${({ theme }) => theme.blueTint.light.g};
      border-radius: 20px;

      a {
        position: relative;
        padding: 1rem 1.4rem;
        display: block;
        opacity: 0.9;

        /* background-color: ${({ theme }) => theme.blueTint.light.c}; */

        /* :hover {
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
        } */
      }
    }
  }
`;

const Socials = styled.div`
  /* visibility: hidden; */
`;
