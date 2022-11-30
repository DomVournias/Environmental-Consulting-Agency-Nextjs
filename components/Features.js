import React, { useLayoutEffect, useRef } from "react";
import { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Section } from "../styles/GlobalStyles";

const Features = () => {
  const ref = useRef();
  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }
    const position = window.scrollY;

    // console.log(position);

    gsap.to("#circle-one", {
      y: 0,
      scale: 10,
      duration: 8,
      scrollTrigger: {
        start: "top 0%",
        end: "bottom 100%",
        trigger: ref.current,
        // scroll: ref.current,
        pin: "#circle-one",
        scrub: 1,
        pinSpacing: false,
        markers: true,
        // end: () => `+=${ref.current.offsetHeight}`,
      },
    });
  }, []);
  // const ref = useRef();
  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     gsap.registerPlugin(ScrollTrigger);
  //   }
  //   const position = window.scrollY;

  //   console.log(position);

  //   gsap.to("#circle-one", {
  //     y: 0,
  //     scale: 10,
  //     duration: 8,
  //     scrollTrigger: {
  //       start: "top 0%",
  //       end: "bottom 100%",
  //       trigger: ref.current,
  //       // scroll: ref.current,
  //       pin: "#circle-one",
  //       scrub: 1,
  //       pinSpacing: false,
  //       markers: true,
  //       // end: () => `+=${ref.current.offsetHeight}`,
  //     },
  //   });

  // }, []);

  return (
    <Section overflow="hidden">
      <Container id="container" ref={ref}>
        <div id="canvas">
          <div id="inner">
            <span id="circle-one" />
            <span id="circle-two" />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Features;

const Container = styled.div`
  width: 100%;
  height: 200vh;
  background-color: gray;
  /* position: relative; */

  & #canvas {
    /* position: absolute; */
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40vw;
    height: 40vw;

    & #inner {
      position: relative;
      display: block;
      width: 100%;
      height: 100%;

      span {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        display: flex;
        text-align: center;
        border-radius: 100%;
      }

      & #circle-one {
        width: 20vw;
        height: 20vw;
        background-color: #000;
      }

      & #circle-two {
        width: 1vw;
        height: 1vw;
        background-color: #fff;
      }
    }
  }
`;
