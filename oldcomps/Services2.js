import styled from "styled-components";
import { services } from "../dummydata";

const Services = () => {
  return (
    <Container>
      <Wrapper>
        <Header>
          <h3>Υπηρεσίες</h3>
          {/* <p>It is a long established fact that a reader will be distracted</p> */}
        </Header>
        <Cards>
          {services.map(({ title, description, icon, button, phone }, i) => (
            <Service key={i}>
              {icon ? <span>{icon}</span> : null}
              <h3>{title}</h3>
              <p>{description}</p>
              <div>
                {button} {button && <span>or</span>} {phone}
              </div>
            </Service>
          ))}
        </Cards>
      </Wrapper>
    </Container>
  );
};

export default Services;

const Container = styled.section`
  width: 100%;
  padding-left: 1em;
  padding-right: 1em;
  padding-top: 11em;
  margin-bottom: ${({ theme }) => theme.margin.bottom.s7};
  background-color: ${({ theme }) => theme.white};
`;

const Wrapper = styled.div`
  max-width: 90rem;
  margin: 0 auto;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.margin.bottom.s10};

  h3 {
    font-size: ${({ theme }) => theme.font.headingLG};
  }
`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(
      clamp(
        clamp(
          clamp(
            100%/ (var(--c4) + 1) + 0.1%,
            (var(--xl) - 100%) * 1000,
            100%/ (var(--c2) + 1) + 0.1%
          ),
          (var(--l) - 100%) * 1000,
          100%/ (var(--c2) + 1) + 0.1%
        ),
        (var(--t) - 100%) * 1000,
        100%
      ),
      1fr
    )
  );

  gap: 2.5em;
  overflow: hidden;
`;
const Service = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  padding: 2em;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.white};

  &:nth-child(4) {
    justify-content: space-between;
    color: ${({ theme }) => theme.white};
    background-color: ${({ theme }) => theme.black};

    div {
      a,
      span {
        display: inline-block;
        margin-right: 10px;
      }

      span {
        opacity: 0.7;
      }

      & :nth-child(1) {
        color: #000;
        background-color: #fff;
        border-radius: 8px;
        padding: 0.5em 1em;
        font-size: 1.02rem;
      }

      & :nth-child(3) {
        font-size: 1.02rem;
        text-decoration: underline;
        text-underline-position: under;
      }
    }
  }

  > span {
    font-size: 1.8rem;
  }

  h3 {
    font-size: 1.25rem;
  }

  p {
    opacity: 0.85;
  }
`;
