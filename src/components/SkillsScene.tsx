import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';

const SkillsScene = () => {
  const sphereRefs = useRef<THREE.Mesh[]>([]);

  useFrame(({ clock }) => {
    sphereRefs.current.forEach((sphere, i) => {
      if (sphere) {
        const offset = i * Math.PI / 4;
        sphere.position.y = Math.sin(clock.getElapsedTime() * 0.5 + offset) * 0.5;
        sphere.rotation.x = clock.getElapsedTime() * 0.2;
        sphere.rotation.y = clock.getElapsedTime() * 0.3;
      }
    });
  });

  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight position={[10, 10, 5]} intensity={0.3} />
      {[...Array(3)].map((_, i) => (
        <Sphere
          key={i}
          ref={(el) => (sphereRefs.current[i] = el!)}
          args={[1, 32, 32]}
          scale={[2, 2, 2]}
          position={[(i - 1) * 4, 0, 0]}
        >
          <MeshDistortMaterial
            color={i === 0 ? '#60A5FA' : i === 1 ? '#A855F7' : '#EC4899'}
            attach="material"
            distort={0.3}
            speed={2}
            opacity={0.15}
            transparent
          />
        </Sphere>
      ))}
    </>
  );
};

export default SkillsScene