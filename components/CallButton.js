import React, { useRef, useState } from "react";
import styled from "styled-components";
import { BsTelephoneFill } from "react-icons/bs";
import {
  motion,
  useAnimation,
  useMotionValue,
  useTransform,
  PanInfo,
} from "framer-motion";
import { useEffect } from "react";

const CallButton = () => {
  const [opacityValue, setOpacityValue] = useState();
  const RIGHT_OFFSET = 176;

  const constraintsRef = useRef(null);
  const controls = useAnimation();
  const offset = useMotionValue(0);
  const opacity = useTransform(offset, [0, RIGHT_OFFSET], [1, 0]);

  useEffect(() => {}, []);

  const handleSwipe = (e, info = PanInfo) => {
    const x = info.offset.x;

    if (x > 0) {
      controls.set({
        x: x < RIGHT_OFFSET ? x : RIGHT_OFFSET,
        transition: {
          bounceStiffness: 600,
          bounceDamping: 10,
        },
      });
    }
  };

  const swipeToCall = (phoneNumber) => {
    window.open(`tel:${phoneNumber}`, "_self");
  };

  const handleSwipeEnd = (e, info = PanInfo) => {
    const x = info.offset.x;
    if (x > RIGHT_OFFSET) {
      swipeToCall(+6949949998);
    } else {
      controls.start({
        x: 0,
        transition: {
          bounceStiffness: 600,
          bounceDamping: 10,
        },
      });
    }
  };

  // console.log(offset);

  return (
    <Container>
      <Inner>
        <Button
          animate={controls}
          onPan={handleSwipe}
          onPanEnd={handleSwipeEnd}
          dragTransition={{ bounceStiffness: 600, bounceDamping: 1 }}

          // drag="x"
          // dragSnapToOrigin="true"
          // dragElastic={0}
          // dragConstraints={{ left: 0, top: 0, bottom: 0, right: "20rem" }}
        >
          <BsTelephoneFill />
        </Button>
        <Text opacity={`${opacity}`} key="text">
          Καλέστε μας
        </Text>
      </Inner>
    </Container>
  );
};

export default CallButton;

const Container = styled.div`
  background-color: ${({ theme }) => theme.blueTint.light.g};
  border-radius: 40px;
`;

const Inner = styled.div`
  display: flex;
  align-items: center;
  /* padding: 1rem; */
  width: 17rem;
  height: 3.5rem;
  position: relative;
  /* overflow: hidden; */
`;
const Button = styled(motion.div)`
  background-color: ${({ theme }) => theme.blueTint.light.b};
  border-radius: 40px;
  position: absolute;
  left: 0.5rem;
  cursor: grab;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5rem;
  height: 2.8rem;

  svg {
    display: flex;
    color: ${({ theme }) => theme.blueTint.light.g};
    width: 1.5rem;
    height: 1.5rem;
  }
`;

const Text = styled(motion.span)`
  color: ${({ theme }) => theme.blueTint.light.a};
  font-size: 1.15rem;
  font-weight: 500;
  position: absolute;
  right: 1.5rem;
  z-index: 1;
  opacity: ${(props) => props.opacity};
  user-select: none;
`;
