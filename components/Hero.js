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
    // gsap.fromTo(
    //   ".heading",
    //   {
    //     opacity: 0,
    //     y: "-100px",
    //   },
    //   {
    //     y: "0px",
    //     opacity: 0.85,
    //     duration: 0.4,

    //     stagger: 0.6,
    //     visibility: "visible",
    //   }
    // );

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
        {/* <span id="ballone">
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
        </span> */}
        <Overlay />
        <Image
          src="/heroBackImage.png"
          alt="hero background"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          id="HeroBackgroundImage"
        />
        <Wrapper>
          <Content>
            <Title>
              {titles.map(({ id, text }, i) => (
                <span key={i}>{text}</span>
              ))}
              <p>
                Για περισσότερα από 20 χρόνια παρέχουμε υπηρεσίες σε ένα ευρύ
                φάσμα περιβαλλοντικών και τεχνικής υποστήριξης, διαθέτοντας μια
                σταθερή βάση γνώσεων και μια ομάδα υψηλής εξειδίκευσης και
                εμπειρίας.
              </p>
            </Title>
            {/* <ImageContainer id="image">
              <Image
                src="/heroGridImage5.png"
                objectFit="contain"
                alt="hero-image"
                layout="fill"
              />
            </ImageContainer> */}
          </Content>

          {/* <HeroMenu id="menu">
            <ul>
              {links.map(({ label, path }, i) => (
                <li key={i} className="button-86">
                  <Link href={`${path}`}>{label}</Link>
                </li>
              ))}
            </ul>
            <CallButton />
            
          </HeroMenu> */}
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

const Title = styled.h1`
  width: 60%;
  display: flex;
  flex-direction: column;
  margin: 0 0 5rem;

  span {
    color: ${({ theme }) => theme.white};
    font-size: ${({ theme }) => theme.font.h.lg};
    font-weight: 500;
    display: block;
  }

  p {
    margin-top: 2em;
    opacity: 0.8;
    font-weight: 400;
    color: ${({ theme }) => theme.white};
    font-size: ${({ theme }) => theme.font.p.md};
  }
`;

const Inner = styled.div`
  padding-top: 15rem;
  padding-bottom: 3rem;
  height: 100vh;
  position: relative;

  &#HeroBackgroundImage {
    z-index: 10;
  }
`;

const Overlay = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* background-color: rgba(255, 255, 255, 0.6); */
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 20;
`;

const Wrapper = styled.div`
  max-width: 71.25rem;
  padding: 0 1.5rem;
  margin: 0 auto;

  & * {
    z-index: 30;
  }
`;

const HeroMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 4rem;
  background-color: ${({ theme }) => theme.blueTint.light.e};
  border-radius: 25px;
  box-shadow: rgba(0, 0, 0, 0.03) 0px 4px 12px;
  z-index: 30;

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
      }
    }
  }
`;
