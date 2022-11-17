import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";
import styled from "styled-components";
import { laptop } from "../styles/Breakpoints";

const Hero2 = () => {
  return (
    <VideoHero>
      <Wrapper>
        <Overlay />
        <Video autoPlay loop muted>
          <source type="video/mp4" src="/BackgroundVideo.mp4" />
        </Video>
        <Container>
          <Title>Αξιοπιστία. Τεχνογνωσία. Συνέπεια.</Title>
          <Slogan>Waste it or preserve it. The choice is yours.</Slogan>

          <CTA href="/">
            Eπικοινωνια <AiOutlineArrowRight />
          </CTA>
        </Container>
      </Wrapper>
      {/* <Bottom>
        <CalloutMessage>
          <h2>Σύμβουλοι Περιβαλλοντικών Έργων </h2>
          <p>
            Παράγραφος τριών σειρών, σύντομη περιγραφή των υπηρεσιών και των
            αξιών τις εταιρίας. *παραδειγμα τίτλου & περιγραφής
          </p>
        </CalloutMessage>
      </Bottom> */}
    </VideoHero>
  );
};

export default Hero2;

const VideoHero = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: visible;
  color: ${({ theme }) => theme.white};
`;

const Wrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-height: 85vh;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  /* rgba(12, 132, 255, 0.85) */
  /* rgba(12, 132, 255, 0.73) */
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.85) 9%,
      rgba(0, 0, 0, 0) 26%
    ),
    linear-gradient(to right, rgba(0, 0, 0, 0.73) 0, rgba(0, 0, 0, 0) 100%);
  z-index: 2;
`;

const Video = styled.video`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;

  max-width: var(--left);
  margin: auto auto auto clamp(2rem, 20vw, 23.5rem);
  gap: 1.4em;
  padding-top: 6em;
  padding-bottom: 8em;
  z-index: 4;

  @media ${laptop} {
    margin: 0 auto;
    padding-left: 1em;
    padding-right: 1em;
  }
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.font.headingLG};
  font-weight: 700;
`;

const Slogan = styled.h4`
  font-size: ${({ theme }) => theme.font.h4};
`;

const CTA = styled(Link)`
  font-size: 1.04rem;
  font-weight: 500;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 0.5em;

  > svg {
    font-size: 1.3rem;
  }
`;

const Bottom = styled.div`
  position: absolute;
  bottom: -6em;
  left: 0;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: fit-content;
  background-color: ${({ theme }) => theme.blue};
  z-index: 4;
`;

const CalloutMessage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  max-width: var(--left);
  padding: 3.5em;
  padding-left: 0;
  margin: auto auto auto clamp(2rem, 20vw, 23.5rem);

  @media ${laptop} {
    margin: 0 auto;
    padding-left: 1em;
    padding-right: 1em;
  }

  > h2 {
    font-size: 1.6rem;
  }

  > p {
    font-size: 1.2rem;
    font-weight: 300;
  }
`;
