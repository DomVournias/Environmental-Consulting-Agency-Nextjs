import React, { useLayoutEffect, useRef, useState } from "react";
import { useEffect } from "react";
import styled, { css, keyframes } from "styled-components";
import { motion, useAnimation, useScroll } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Section } from "../styles/GlobalStyles";
import CircularText from "../styles/CircularText";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const Features = () => {
  useEffect(() => {
    gsap.to("#arc", {
      rotation: "-360",
      duration: 20,
      ease: "none",
      repeat: -1,
    });
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#container",
          pin: true,
          start: "top top",
          end: "+=3400",
          scrub: 0.3,
          // anticipatePin: 1,
          // pinType: "fixed",
        },
      });

      const borders = gsap.timeline({
        scrollTrigger: {
          trigger: "#container",
          start: "top top",
          end: "+=700",

          scrub: 0.3,
        },
      });

      borders.to("#content", {
        borderTopLeftRadius: "0%",
        borderTopRightRadius: "0%",
      });

      tl.to("#s1", {
        x: -20,
        duration: 3,
        scrub: 1,
      });
      tl.to(
        "#s3",
        {
          x: 0,
          duration: 3,
          scrub: 1,
        },
        "<"
      );

      // Circles

      tl.to(
        "#circle-one",
        {
          y: 0,
          duration: 3,
        },
        "<"
      );

      tl.to("#circle-one", {
        scale: 1,
        duration: 3,
        ease: "none",
      });

      tl.to(
        "#circle-two",
        {
          scale: 0.8,
          duration: 6,
          ease: "none",
        },
        "-=2.4"
      );

      tl.to(
        "#circle-three",
        {
          scale: 0.8,
          duration: 6,
        },
        "-=3.5"
      );

      tl.to(
        "#circle-four",
        {
          scale: 0.8,
          duration: 6,
        },
        "<"
      );

      tl.to(
        "#circle-five",
        {
          scale: 1,
          duration: 6,
        },
        "-=4.8"
      );

      tl.to(
        "#circle-six",
        {
          opacity: 1,
          duration: 3,
        },
        "-=3"
      );

      tl.to("#arc", {
        opacity: 1,
        duration: 1,
        // visibility: "visible",
        // rotate: 360,
        // duration: 3,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <Section>
      {/* <Oval>
        <OvalWrapper id="oval-wrapper">
          <OvalMargin>
            <OvalDark id="oval" />
          </OvalMargin>
        </OvalWrapper>
      </Oval> */}
      <Container id="container">
        <Content id="content">
          <Services id="services">
            <p id="s1">Συμβουλευτικές</p>
            <p id="s2">Περιβαλλοντικές</p>
            <p id="s3">Υπηρεσίες</p>
          </Services>
          <CircleOne id="circle-one" className="circle" />
          <CircleTwo id="circle-two" className="circle" />
          <CircleThree id="circle-three" className="circle">
            <Arc id="arc">
              <CircularText />
            </Arc>
          </CircleThree>
          <CircleFour id="circle-four" className="circle" />
          <CircleFive id="circle-five">
            <ImageContainer>
              <Image
                src="/circularEconomy.png"
                alt="circular-economy"
                fill
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
            </ImageContainer>
          </CircleFive>
          <CircleSix id="circle-six">
            <EndingText>
              <p id="reuse">Reuse</p>
              <p id="reduce">Reduce</p>
              <p id="recycle">Recycle</p>
            </EndingText>
          </CircleSix>
        </Content>
      </Container>
    </Section>
  );
};

export default Features;

const Oval = styled.div`
  position: relative;
  display: block;
  width: 100%;
  z-index: 50;
  margin-top: 25rem;
`;
const OvalWrapper = styled.div`
  position: absolute;
  left: 0;
  top: -20vh;
  right: 0;
  bottom: auto;
  z-index: 1;
  /* overflow: hidden; */
  width: 100%;
`;
const OvalMargin = styled.div`
  margin-right: -8.2rem;
  margin-left: -8.2rem;
`;
const OvalDark = styled.div`
  width: 100%;
  height: 47.02rem;
  border-radius: 50%;
  scale: 1;
  background-color: #000;
`;

const CircleSix = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  display: block;
  text-align: center;
  width: 18vw;
  height: 18vw;
  z-index: 700;
  opacity: 0;
`;
const EndingText = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.font.h.md};
  font-weight: 400;
  line-height: 4.4rem;
  border-radius: 50%;
  background-color: #1a1a1a;
  color: rgba(255, 255, 255, 0.87);

  & #reuse {
  }

  & #reduce {
    color: ${({ theme }) => theme.blue};
  }

  & #recycle {
    color: ${({ theme }) => theme.green};
  }
`;

const CircleFive = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  display: block;
  text-align: center;
  border-radius: 50%;
  width: 42vw;
  height: 42vw;
  z-index: 600;
  transform: scale(0);
  transform-style: preserve-3d;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: block;
  z-index: 600;
  border-radius: 50%;
  overflow: hidden;
`;

const Arc = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  opacity: 0;

  svg {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 97%;
    height: 97%;
  }
`;

const CircleFour = styled.span`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  display: block;
  text-align: center;
  border-radius: 50%;
  width: 68vw;
  height: 68vw;
  z-index: 500;
  background: #e5e5e5;
  /* mix-blend-mode: difference; */
  transform: scale(0);
  transform-style: preserve-3d;
`;

const CircleThree = styled.span`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  display: block;
  text-align: center;
  border-radius: 50%;
  width: 85vw;
  height: 85vw;
  z-index: 500;
  background: #1a1a1a;
  transform: scale(0);
  /* mix-blend-mode: difference; */
  transform-style: preserve-3d;
`;

const CircleOne = styled.span`
  display: block;
  text-align: center;
  border-radius: 50%;
  width: 120vw;
  height: 120vw;
  z-index: 300;
  background: #fff;
  mix-blend-mode: difference;
  transform: translate(0%, 20%) scale(0.2);
  transform-style: preserve-3d;
`;

const CircleTwo = styled.span`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  display: block;
  text-align: center;
  border-radius: 50%;
  width: 100vw;
  height: 100vw;
  z-index: 400;
  background: #e5e5e5;
  /* mix-blend-mode: difference; */
  transform: scale(0);
  transform-style: preserve-3d;
`;

const Content = styled.div`
  display: grid;
  place-content: center;
  /* padding: 32px 0; */
  width: 100%;
  height: 100%;
  background: #e5e5e5;
  margin: 0 auto;
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
`;

const Container = styled.div`
  position: relative;
  height: 100vh;
  z-index: 100;
  overflow: hidden;
`;

const Services = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  display: block;
  text-align: center;
  display: flex;
  flex-direction: column;
  font-size: ${({ theme }) => theme.font.h.lg};
  font-weight: 500;
  place-content: center;
  z-index: 200;
  width: fit-content;

  & #s1 {
    transform: translateX(0%);
  }

  & #s2 {
    transform: translateX(-20%);
  }

  & #s3 {
    transform: translateX(-10%);
  }
`;
