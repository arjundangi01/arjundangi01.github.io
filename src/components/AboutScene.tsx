import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';

const AboutScene = () => {
  const sphereRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.2) * 0.3;
      sphereRef.current.rotation.y = Math.cos(clock.getElapsedTime() * 0.2) * 0.3;
    }
  });

  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight position={[10, 10, 5]} intensity={0.3} />
      <Sphere ref={sphereRef} args={[1, 100, 100]} scale={[4, 4, 4]} position={[0, 0, 0]}>
        <MeshDistortMaterial
          color="#4299e1"
          attach="material"
          distort={0.4}
          speed={1.5}
          opacity={0.15}
          transparent
        />
      </Sphere>
    </>
  );
};

export default AboutScene