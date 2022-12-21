import styled from "styled-components";
import { goals, services } from "../dummydata";
import { Section } from "../styles/GlobalStyles";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const Goals = () => {
  useEffect(() => {
    gsap.to("#goalsContainer", {
      duration: 6,
      borderTopLeftRadius: "0%",
      borderTopRightRadius: "0%",
      scrollTrigger: {
        trigger: "#goalsSection",
        start: "-20% bottom",
        end: "20% start",
        scrub: 0.3,
      },
    });
  }, []);

  return (
    <Section bg="#1a1a1a" mt="-2rem" id="goalsSection" pos="relative">
      <Container id="goalsContainer">
        <Wrapper>
          <Header>
            <h3 id="titleGoals">
              Οι υπηρεσίες<br></br> που προσφέρουμε
            </h3>
            <p>
              Προσφέρουμε ένα ολοκληρωμένο φάσμα περιβαλλοντικής τεχνογνωσίας
              <br></br> σε θέματα διαχείρισης αποβλήτων και ενέργειας,<br></br>
              που καλύπτει τόσο το σχεδιασμό και την ανάπτυξη έργων,<br></br>
              όσο και την επίβλεψη της λειτουργίας.
            </p>
          </Header>
          <Cards>
            {goals.map(({ goal }, index) => (
              <Card key={index}>
              
                <Number>#{index + 1}</Number>
                <Description>{goal}</Description>
              </Card>
            ))}
          </Cards>

          <CTA>
            <Info>
              <Title>Μιλήστε με έναν ειδικό</Title>
              <Message>
                Η ομάδα των ειδικών μας παρέχει συνεχή υποστήριξη καθ όλη τη
                διάρκεια των έργων σας.
              </Message>
            </Info>
            <CTAButton>
              <div>Ξεκινήστε τώρα</div>
            </CTAButton>
          </CTA>
        </Wrapper>
      </Container>
    </Section>
  );
};

export default Goals;

const Number = styled.span`
  background-color: ${({ theme }) => theme.blueTint.dark.c};
  color: ${({ theme }) => theme.blueTint.light.a};
  width: fit-content;
  padding: 1rem;
  border-radius: 50%;
`;

const Description = styled.p`
  font-size: ${({ theme }) => theme.font.p.md};
  line-height: 2.1rem;
`;

const CTA = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 3rem;
  color: ${({ theme }) => theme.blueTint.dark.b};
  background-color: ${({ theme }) => theme.green};
  border-radius: 8px;
  padding: 4rem 4rem;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h4`
  font-size: ${({ theme }) => theme.font.p.lg};
  margin-bottom: 2rem;
`;

const Message = styled.p`
  font-size: ${({ theme }) => theme.font.p.md};
  opacity: 0.9;
`;

const CTAButton = styled.button`
  border-radius: 8px;
  font-weight: 500;
  font-size: ${({ theme }) => theme.font.p.sm};
  color: ${({ theme }) => theme.blueTint.light.b};
  background-color: ${({ theme }) => theme.blueTint.dark.b};
  cursor: pointer;

  div {
    padding: 1rem 2rem;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  width: 100%;
`;

const Card = styled.div`
  width: 30%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2rem 2rem 2rem 2rem;
  border-radius: 8px;
  background-color: rgba(0, 0, 0, 0.1);

  > span {
    font-size: 1.8rem;
  }

  p {
    opacity: 0.85;
  }
`;


const Container = styled.div`
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  background-color: ${({ theme }) => theme.white};
  z-index: 999;
  overflow: visible;
  display: block;
  position: relative;
`;

const Wrapper = styled.div`
  width: 95rem;
  margin: 0 auto;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 5rem;
  padding-bottom: 5rem;
  position: relative;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5rem;
  width: 100%;

  h3 {
    font-size: ${({ theme }) => theme.font.h.md};
  }

  p {
    margin-top: 2rem;
    font-size: ${({ theme }) => theme.font.p.md};
    text-align: left;
    color: rgba(0, 0, 0, 0.6);
  }
`;
