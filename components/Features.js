import React, { useLayoutEffect, useRef } from "react";
import { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Features = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }
    const position = window.pageYOffset;

    console.log(position);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#container",
        pin: true,
        start: "top top",
        // end: "+=700",
        scrub: true,
        pinSpacing: false,
        markers: true,
      },
    });

    // circle animation

    tl.to("#circle-one", {
      scale: 2,
    });
  }, []);

  return (
    <Container id="container">
      <Wrapper id="wrapper">
        <span id="circle-one" />
        {/* <span id="circle-two"></span> */}
      </Wrapper>
    </Container>
  );
};

export default Features;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: gray;
`;

const Wrapper = styled.div`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  padding-top: 10rem;

  span {
    display: flex;
    text-align: center;
    /* position: sticky; */
    right: 0;
    left: 0;
    top: 10rem;
    bottom: 0;
    margin: auto;
    border-radius: 100%;
  }

  & #circle-one {
    width: 274px;
    height: 274px;
    background-color: #000;
  }

  & #circle-two {
    width: 234px;
    height: 234px;
    background-color: #fff;
  }
`;
