import { useEffect, useRef } from "react";
import styled from "styled-components";
import useOnScreen from "../hooks/useOnScreen";

export default function ServicesList({
  index,
  servicesList,
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
  }, [onScreen, updateActiveImage, index]);
  return (
    <GoalsListItem>
      <Info>
        <Title>{title}</Title>
        <ServicesListItems ref={ref}>
          {servicesList.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ServicesListItems>
      </Info>
    </GoalsListItem>
  );
}

const ServicesListItems = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: ${({ theme }) => theme.blueTint.dark.a};
  font-size: ${({ theme }) => theme.font.p.lg};
  line-height: 2.4rem;
  font-size: ${({ theme }) => theme.font.p.sm};
  list-style: disc;
  list-style-type: disc;
  margin-block-start: 0em;
  margin-block-end: 0em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 22px;

  > li {
    display: list-item;
  }
`;

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
