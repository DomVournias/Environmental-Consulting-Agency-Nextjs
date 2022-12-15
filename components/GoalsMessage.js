import { useEffect, useRef } from "react";
import styled from "styled-components";
import useOnScreen from "../hooks/useOnScreen";

export default function GoalsMessage({
  index,
  goal,
  title,
  updateActiveImage,
}) {
  const ref = useRef(null);
  const onScreen = useOnScreen(ref);

  useEffect(() => {
    if (onScreen) {
      updateActiveImage(index);
      console.log(onScreen);
    }
  }, [onScreen, index]);
  return (
    <GoalsListItem>
      <Info>
        <Title>{title}</Title>
        <Message ref={ref}>{goal}</Message>
      </Info>
    </GoalsListItem>
  );
}

const GoalsListItem = styled.li`
  display: flex;
  align-items: center;
  height: 100vh;
`;

const Info = styled.div``;

const Title = styled.span`
  display: block;
  color: ${({ theme }) => theme.blueTint.dark.a};
  font-size: ${({ theme }) => theme.font.h.sm};
  font-weight: 500;
  margin-bottom: 4rem;
`;

const Message = styled.p`
  display: block;
  color: ${({ theme }) => theme.blueTint.dark.a};
  font-size: ${({ theme }) => theme.font.p.lg};
  line-height: 2.4rem;
`;
