// 'use client';

// import Particles from 'react-tsparticles';
// import { loadFull } from 'tsparticles';
// import { useCallback } from 'react';

// export default function ParticleBackground() {
//   const particlesInit = useCallback(async (engine) => {
//     await loadFull(engine);
//   }, []);

//   return (
//     <Particles
//       className="absolute inset-0 z-0"
//       id="tsparticles"
//       init={particlesInit}
//       options={{
//         fullScreen: { enable: false },
//         particles: {
//           number: { value: 50, density: { enable: true, area: 800 } },
//           color: { value: '#3b82f6' },
//           shape: { type: 'circle' },
//           opacity: { value: 0.3 },
//           size: { value: 5 },
//           move: { enable: true, speed: 1, direction: 'none', random: true, outModes: { default: 'bounce' } },
//         },
//         interactivity: {
//           events: { onHover: { enable: true, mode: 'repulse' } },
//           modes: { repulse: { distance: 100 } },
//         },
//       }}
//     />
//   );
// }
