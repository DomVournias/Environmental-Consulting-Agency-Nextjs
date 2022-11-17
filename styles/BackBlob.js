import Image from "next/legacy/image";
import styled from "styled-components";

const BackBlob = () => {
  return (
    <Blob>
      <Image src="/backBlur.png" layout="fill" objectFit="cover" />
      {/* <svg viewBox="0 0 800 800" opacity="0.60" width="100%" height="110%">
        <defs>
          <filter
            id="bbblurry-filter"
            x="-100%"
            y="-100%"
            width="400%"
            height="400%"
            filterUnits="objectBoundingBox"
            primitiveUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feGaussianBlur
              stdDeviation="121"
              x="0%"
              y="0%"
              width="100%"
              height="80%"
              in="SourceGraphic"
              edgeMode="none"
              result="blur"
            ></feGaussianBlur>
          </filter>
        </defs>
        <g filter="url(#bbblurry-filter)">
          <ellipse
            rx="577.5"
            ry="157.5"
            cx="403.501420265717"
            cy="282.9181925988322"
            fill="hsla(210, 100%, 52%, 1)"
          ></ellipse>
          <ellipse
            rx="577.5"
            ry="207.5"
            cx="405.1258342003947"
            cy="464.2873853114263"
            fill="hsla(74, 63%, 46%, 1)"
          ></ellipse>
        </g>
      </svg> */}
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
  /* background: radial-gradient(
      ellipse at 50% 50%,
      rgba(255, 255, 255, 0.2) 0%,
      rgba(255, 255, 255, 0) 100%
    ),
    radial-gradient(ellipse at 70% 60%, #c3e060 0%, rgba(195, 224, 96, 0) 90%),
    radial-gradient(ellipse at 30% 30%, #c3e060 0%, rgba(195, 224, 96, 0) 60%),
    radial-gradient(
      ellipse at bottom left,
      #00a3cb 0%,
      rgba(0, 163, 203, 0) 70%
    ),
    linear-gradient(
      135deg,
      rgba(18, 46, 119, 0) 0%,
      rgba(18, 46, 119, 0) 75%,
      #122e77 100%
    ),
    linear-gradient(
      to right,
      #625793 0%,
      #d55d64 35%,
      #e49129 65%,
      #c0671c 100%
    ); */
  background-blend-mode: lighten, saturation, screen, color, color-dodge,
    multiply;
  filter: blur(91px);
`;
