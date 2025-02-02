import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Stars } from '@react-three/drei';

interface Hero3DSceneProps {
  isHovered: boolean;
}

const Hero3DScene: React.FC<Hero3DSceneProps> = ({ isHovered }) => {
  const sphereRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);

  useEffect(() => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x = 0.5;
    }
  }, []);

  useFrame(({ clock }) => {
    if (sphereRef.current) {
      const time = clock.getElapsedTime();
      
      // Base rotation
      sphereRef.current.rotation.x = time * 0.3;
      sphereRef.current.rotation.y = time * 0.4;

      // Add wobble effect when hovered
      if (isHovered) {
        sphereRef.current.position.y = Math.sin(time * 2) * 0.1;
        sphereRef.current.scale.set(2.1, 2.1, 2.1);
      } else {
        sphereRef.current.position.y = 0;
        sphereRef.current.scale.set(2, 2, 2);
      }
    }

    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={0.8} />
      <Sphere ref={sphereRef} args={[1, 100, 100]} scale={2}>
        <MeshDistortMaterial
          color="#4299e1"
          attach="material"
          distort={isHovered ? 0.6 : 0.4}
          speed={isHovered ? 3 : 2}
          roughness={0.5}
          metalness={0.8}
        />
      </Sphere>
      <Stars
        radius={50}
        depth={50}
        count={1000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />
    </group>
  );
};

export default Hero3DScene;