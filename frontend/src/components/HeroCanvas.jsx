import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, MeshDistortMaterial } from '@react-three/drei';

function FloatingTorus() {
  return (
    <Float speed={2} rotationIntensity={1.2} floatIntensity={2}>
      <mesh castShadow receiveShadow>
        <torusKnotGeometry args={[1.4, 0.42, 128, 32]} />
        <MeshDistortMaterial
          color="#5DE0E6"
          distort={0.3}
          speed={3}
          emissive="#5DE0E6"
          emissiveIntensity={0.5}
        />
      </mesh>
    </Float>
  );
}

export default function HeroCanvas() {
  return (
    <div className="w-full h-[360px] md:h-[520px] gradient-border rounded-2xl overflow-hidden">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <color attach="background" args={[0.05, 0.08, 0.15]} />
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1.6} castShadow />
        <FloatingTorus />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.6} />
      </Canvas>
    </div>
  );
}
