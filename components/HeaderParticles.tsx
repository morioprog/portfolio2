import { useBreakpointValue } from "@chakra-ui/react";
import Particles from "react-particles-js";

export const HeaderParticlesSnow = () => {
  const height = useBreakpointValue({
    base: "160px",
    sm: "220px",
    md: "100vh",
  });

  const particleNumber = useBreakpointValue({
    base: 20,
    md: 160,
  });

  return (
    <Particles
      height={height}
      params={{
        particles: {
          number: {
            value: particleNumber,
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
};

export const HeaderParticlesPolygon = () => {
  const height = useBreakpointValue({
    base: "160px",
    sm: "220px",
    md: "100vh",
  });

  const particleNumber = useBreakpointValue({
    base: 10,
    sm: 20,
    md: 80,
  });

  return (
    <Particles
      height={height}
      params={{
        particles: {
          number: { value: particleNumber },
          size: { value: 3 },
          color: { value: "#fefefe" },
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: "grab",
            },
          },
        },
      }}
    />
  );
};
