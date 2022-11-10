import React from "react";
import styled from "styled-components";
import { statistics } from "../dummydata";

const Counter = () => {
  return (
    <Container>
      <Wrapper>
        <Heading>
          <h5>Στατιστικά</h5>
          {/* <p>
            Παράγραφος τριών σειρών, σύντομη περιγραφή των στατιστικών της
            εταιρίας. *παραδειγμα τίτλου & περιγραφής
          </p> */}
        </Heading>
        <Statistics>
          {statistics.map(({ number, title, color }, i) => (
            <Statistic key={i} bg={color}>
              <span>{number}</span>
              <p>{title}</p>
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
  padding-left: 1em;
  padding-right: 1em;
  padding-bottom: 5em;
  background-color: ${({ theme }) => theme.silver};
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 90rem;
  margin: 0 auto;
  justify-content: center;
  gap: 2em;
  padding: 4em;
  background-color: ${({ theme }) => theme.white};
  border-radius: 20px;
`;

const Heading = styled.div`
  display: flex;
  width: 40%;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 2em;

  h5 {
    font-size: 3rem;
    padding-bottom: 0.5em;
  }

  p {
    font-size: 1.2rem;
    font-weight: 300;
    max-width: 60%;
  }
`;
const Statistics = styled.div`
  display: flex;
  gap: 4em;
  /* display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 20rem));
  grid-row-gap: 3em;
  width: 60%; */
`;

const Statistic = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  width: 17rem;
  height: 17rem;
  padding: 2.3em;
  padding-top: 0em;
  border-radius: 100%;
  border-top-left-radius: 0px;
  border-left: 2px solid rgba(12, 132, 255, 1);
  /* background-color: ${(props) => props.bg}; */

  span {
    font-size: 3.6rem;
    padding-bottom: 10px;
  }

  p {
    font-size: 1.2rem;

    opacity: 0.6;
  }
`;
