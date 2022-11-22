import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { statistics } from "../dummydata";
import { Section } from "../styles/GlobalStyles";
import { animate } from "framer-motion";
import CountUp from "react-countup";

const Statistics = () => {
  return (
    <Section m="5rem auto 6rem auto">
      <Wrapper>
        <VideoPlayer>
          <Overlay />
          <Video autoPlay loop muted>
            <source type="video/mp4" src="/BackgroundVideo.mp4" />
          </Video>
        </VideoPlayer>

        <Content>
          <Heading>
            <span>Waste it or preserve it.</span>
            <span>The choice is yours.</span>
          </Heading>
          <Stats>
            {statistics.map(({ number, title, color }, i) => (
              <Stat key={i} bg={color}>
                <span>
                  <CountUp start={0} end={+number} duration={2} delay={0} />
                </span>

                <p>{title}</p>
              </Stat>
            ))}
          </Stats>
        </Content>
      </Wrapper>
    </Section>
  );
};

export default Statistics;

const Content = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 6rem;
  padding-left: 4em;
`;

const Wrapper = styled.div`
  display: flex;
`;

const VideoPlayer = styled.div`
  width: calc(0vw + 47%);
  height: 80vh;
  position: relative;
`;
const Overlay = styled.div`
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  z-index: 2;
`;
const Video = styled.video`
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scaleX(-1);
  z-index: 1;
`;

const Heading = styled.h2`
  display: flex;
  flex-direction: column;
  font-size: ${({ theme }) => theme.font.h.md};
  font-weight: 500;
  width: 100%;
  z-index: 3;
  /* mix-blend-mode: overlay; */
`;

const Stats = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 4rem;
  /* display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 20rem));
  grid-gap: 3rem; */
  width: 100%;
`;

const Stat = styled.li`
  display: flex;
  flex-direction: column;

  span {
    font-size: ${({ theme }) => theme.font.h.md};
    margin-bottom: 1rem;
  }

  p {
    font-size: ${({ theme }) => theme.font.p.sm};
    width: 80%;
  }
`;
