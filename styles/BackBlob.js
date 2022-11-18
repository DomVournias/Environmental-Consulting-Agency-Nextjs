import Image from "next/legacy/image";
import styled from "styled-components";

const BackBlob = () => {
  return (
    <Blob>
      <Image src="/backBlur.png" layout="fill" objectFit="cover" />
    </Blob>
  );
};

export default BackBlob;

const Blob = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: -40%;
  right: 0;
  margin: 0 auto;
  width: 180%;
  height: auto;
  border-radius: 11rem;
  z-index: 1;

  svg {
    z-index: 1;
  }
  background-blend-mode: lighten, saturation, screen, color, color-dodge,
    multiply;
  filter: blur(91px);
`;
