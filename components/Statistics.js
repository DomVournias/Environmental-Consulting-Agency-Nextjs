import React from "react";
import styled from "styled-components";
import { statistics } from "../dummydata";

const Counter = () => {
  return (
    <Container>
      <Wrapper>
        <Heading>
          <h5>Στατιστικά</h5>
          <p>
            Παράγραφος τριών σειρών, σύντομη περιγραφή των στατιστικών της
            εταιρίας. *παραδειγμα τίτλου & περιγραφής
          </p>
        </Heading>
        <Statistics>
          {statistics.map(({ number, title }, i) => (
            <Statistic key={i}>
              <span>{number}</span>
              <h5>{title}</h5>
            </Statistic>
          ))}
        </Statistics>
      </Wrapper>
    </Container>
  );
};

export default Counter;

const Container = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: flex;
  gap: 4em;
  justify-content: center;
  width: 1140px;
  padding-top: 5em;
  padding-bottom: 5em;
`;
const Heading = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 2em;

  h5 {
    font-size: 3rem;
  }

  p {
    font-size: 1.2rem;
    font-weight: 300;
  }
`;
const Statistics = styled.div`
  display: flex;
  gap: 2em;
`;

const Statistic = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 130px;
  height: 130px;
  border-radius: 100%;
  border-top-left-radius: 0px;
  border-left: 2px solid rgba(12, 132, 255, 1);
  background-color: ${({ theme }) => theme.silver};

  span {
    font-size: 3rem;
  }

  h5 {
    font-size: 1.2;
    font-weight: 600;
    opacity: 0.9;
  }
`;
