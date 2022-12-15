import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { goals } from "../dummydata";
import gsap from "gsap";
import { Section } from "../styles/GlobalStyles";
import GoalsImages from "./GoalsImages";
import GoalsMessage from "./GoalsMessage";

const Goals = () => {
  const [activeImageIndex, setImageIndex] = useState(0);
  const goalMessagesRef = useRef(null);
  const goalImagesRef = useRef(null);

  useEffect(() => {
    // function stopTrigger() {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: goalImagesRef.current,
          start: "top top",
          end: () => `+=${goalMessagesRef.current.offsetHeight}`,
          scrub: true,
          pin: true,
          // markers: true,
        },
      });
      // return tl;
    });

    // const master = gsap.timeline();
    // master.add(stopTrigger());
    return () => ctx.revert();
    // }
  }, []);

  return (
    <Section>
      <Wrapper>
        <LeftContainer ref={goalMessagesRef}>
          <Inner>
            <GoalMessages>
              {goals.map(({ goal, title }, index) => (
                <GoalsMessage
                  key={index}
                  goal={goal}
                  title={title}
                  index={index}
                  updateActiveImage={setImageIndex}
                />
              ))}
            </GoalMessages>
          </Inner>
        </LeftContainer>
        <RightContainer
          ref={goalImagesRef}
          bg={({ theme }) => theme.blueTint.dark.b}
        >
          <GoalImagesList>
            {goals.map(({ image, id }, index) => (
              <GoalsImages
                key={index}
                image={image}
                id={id}
                index={index}
                activeImageIndex={activeImageIndex}
              />
            ))}
          </GoalImagesList>
        </RightContainer>
      </Wrapper>
      <Spacer />
    </Section>
  );
};

export default Goals;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  width: 50%;
  display: flex;
`;

const LeftContainer = styled(Container)`
  justify-content: center;
`;

const RightContainer = styled(Container)`
  align-items: center;
  align-self: start;
  background-color: ${(props) => props.bg};
  height: 100vh;
`;

const Inner = styled.div`
  width: 50%;
  height: fit-content;
`;

const GoalMessages = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0;
  box-sizing: border-box;
`;

const GoalImagesList = styled.ul`
  position: relative;
  width: 30rem;
  height: 30rem;
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
`;

const Spacer = styled.span`
  display: block;
  height: 100vh;
`;
