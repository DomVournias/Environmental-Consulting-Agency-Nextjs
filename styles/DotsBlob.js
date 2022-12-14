const DotsBlob = () => {
  return (
    <>
      <svg viewBox="0 0 1000 1000">
        <defs>
          <filter id="grain" x="-50vw" y="-50vh" width="100vw" height="100vh">
            <feFlood floodColor="#ffffff" result="neutral-gray" />

            <feTurbulence
              in="neutral-gray"
              type="fractalNoise"
              baseFrequency="2.5"
              numOctaves="100"
              stitchTiles="stitch"
              result="noise"
            />

            <feColorMatrix
              in="noise"
              type="saturate"
              values="0"
              result="destaturatedNoise"
            ></feColorMatrix>

            <feComponentTransfer in="desaturatedNoise" result="theNoise">
              <feFuncA type="table" tableValues="0 0 0.05 0"></feFuncA>
            </feComponentTransfer>

            <feBlend
              in="SourceGraphic"
              in2="theNoise"
              mode="soft-light"
              result="noisy-image"
            />
          </filter>

          <pattern
            id="pattern"
            patternUnits="userSpaceOnUse"
            width="25"
            height="25"
            viewBox="0 0 100 100"
            fill="#ffffff"
          >
            <circle cx="50" cy="50" r="12.5" />
          </pattern>

          <clipPath id="shape">
            <path
              fill="currentColor"
              d="M952.5,647Q905,794,780,885Q655,976,500,976Q345,976,220,885Q95,794,47.5,647Q0,500,47.5,353Q95,206,220,115Q345,24,500,24Q655,24,780,115Q905,206,952.5,353Q1000,500,952.5,647Z"
            ></path>
          </clipPath>
        </defs>

        <g filter="url(#grain)" clipPath="url(#shape)">
          <path
            fill="url(#pattern)"
            d="M952.5,647Q905,794,780,885Q655,976,500,976Q345,976,220,885Q95,794,47.5,647Q0,500,47.5,353Q95,206,220,115Q345,24,500,24Q655,24,780,115Q905,206,952.5,353Q1000,500,952.5,647Z"
          />
        </g>
      </svg>
    </>
  );
};

export default DotsBlob;
