import Particles from "react-particles-js";

const HeaderParticles = () => (
  <Particles
    height="100vh"
    params={{
      particles: {
        number: {
          value: 160,
          density: {
            enable: false,
          },
        },
        size: {
          value: 5,
          random: true,
        },
        move: {
          direction: "bottom",
          out_mode: "out",
        },
        line_linked: {
          enable: false,
        },
      },
    }}
  />
);

export default HeaderParticles;
