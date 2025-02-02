import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';

interface ProjectSceneProps {
  index: number;
  inView: boolean;
}

const ProjectScene: React.FC<ProjectSceneProps> = ({ index, inView }) => {
  const sphereRef = useRef<THREE.Mesh>(null);
  const colors = ['#60A5FA', '#A855F7', '#EC4899'];

  useFrame(({ clock }) => {
    if (sphereRef.current && inView) {
      sphereRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.3) * 0.2;
      sphereRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.2) * 0.3;
    }
  });

  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight position={[10, 10, 5]} intensity={0.3} />
      <Sphere
        ref={sphereRef}
        args={[1, 100, 100]}
        scale={[3, 3, 3]}
        position={[index % 2 === 0 ? -2 : 2, 0, 0]}
      >
        <MeshDistortMaterial
          color={colors[index % colors.length]}
          attach="material"
          distort={0.3}
          speed={2}
          opacity={0.2}
          transparent
        />
      </Sphere>
    </>
  );
};

export default ProjectScene;