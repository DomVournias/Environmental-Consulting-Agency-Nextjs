import React, { useLayoutEffect, useRef, useState } from "react";
import { useEffect } from "react";
import styled, { css, keyframes } from "styled-components";
import { motion, useAnimation, useScroll } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Section } from "../styles/GlobalStyles";
import CircularText from "../styles/CircularText";

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
          end: "+=3200",
          scrub: 0.3,
          // markers: true,
        },
      });

      // let circles = gsap.utils.toArray(".circle");
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
          duration: 3,
        },
        "-=2"
      );

      tl.to(
        "#circle-four",
        {
          scale: 0.8,
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
        </Content>
      </Container>
    </Section>
  );
};

export default Features;

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
  background: #fff;
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
  background: #000;
  transform: scale(0);
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
  background: #fff;
  /* mix-blend-mode: difference; */
  transform: scale(0);
  transform-style: preserve-3d;
`;

const Content = styled.div`
  display: grid;
  place-content: center;
  padding: 32px 0;
  width: 100%;
  height: 100%;
  background: #e5e5e5;
  margin: 0 auto;
`;

const Container = styled.div`
  position: relative;
  height: 100vh;
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
  font-size: ${({ theme }) => theme.font.h.xl};
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
