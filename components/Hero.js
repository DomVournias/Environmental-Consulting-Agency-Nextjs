import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";
import styled from "styled-components";

const Hero = () => {
  return (
    <VideoHero>
      <Wrapper>
        <Overlay />
        <Video src="/BackgroundVideo.mp4" autoPlay loop muted />
        <Container>
          <Title>Waste it or preserve it. The choice is yours.</Title>
          <CTA href="/">
            Eπικοινωνια <AiOutlineArrowRight />
          </CTA>
        </Container>
      </Wrapper>
      <Bottom>
        <CalloutMessage>
          <h2>Σύμβουλοι Περιβαλλοντικών Έργων </h2>
          <p>
            Παράγραφος τριών σειρών, σύντομη περιγραφή των υπηρεσιών και των
            αξιών τις εταιρίας. *παραδειγμα τίτλου & περιγραφής
          </p>
        </CalloutMessage>
      </Bottom>
    </VideoHero>
  );
};

export default Hero;

const VideoHero = styled.div`
  display: flex;
  position: relative;
  /* margin-bottom: 5em; */
  flex-direction: column;
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
  z-index: 2;
  width: 720px;
  margin-left: 20vw;
  display: flex;
  flex-direction: column;
  gap: 1.4em;
  cursor: pointer;
  z-index: 4;
`;

const Title = styled.h1`
  font-size: 64px;
  line-height: 74px;
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
  width: 720px;
  padding: 3.5em;
  padding-left: 0;
  margin-left: 20vw;

  > h2 {
    font-size: 1.6rem;
  }

  > p {
    font-size: 1.2rem;
    font-weight: 300;
  }
`;
