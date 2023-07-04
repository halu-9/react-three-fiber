import {
  ContactShadows,
  Float,
  Html,
  OrbitControls,
  PresentationControls,
  Text,
  useGLTF,
} from "@react-three/drei";
import "./App.css";
import { Canvas } from "@react-three/fiber";

function App() {
  const macbook = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf"
  );
  const coffee = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/cup-tea/model.gltf"
  );
  // const donut = useGLTF("./donut.gltf");
  const donut = useGLTF("../public/donut.gltf");

  return (
    <div>
      <Canvas camera={{ fov: 45, near: 0.1, far: 2000, position: [0, 1.5, 6] }}>
        <color args={["#7178dd"]} attach={"background"} />
        {/* <OrbitControls /> */}
        <ambientLight />
        <directionalLight intensity={1.4} />
        <PresentationControls
          global
          config={{ mass: 4, tension: 400 }}
          snap={{ mass: 4, tension: 300 }}
        >
          <Float rotationIntensity={1.6}>
            <rectAreaLight
              color={"#0021a7"}
              intensity={55}
              rotation={[0.1, Math.PI, 0]}
              width={2.0}
              height={1.65}
              position={[0, 0, 1]}
            />
            <primitive object={macbook.scene} position={[0, -1.5, 0]}>
              <Html
                position={[0, 1.56, -1.4]}
                distanceFactor={1.17}
                rotation-x={-0.256}
                transform
                wrapperClass="htmlScreen"
              >
                <iframe
                  src="https://www.wikipedia.org"
                  frameborder="0"
                ></iframe>
              </Html>
            </primitive>
          </Float>
          <Float rotationIntensity={1.6}>
            <rectAreaLight
              color={"#0021a7"}
              intensity={55}
              rotation={[0.1, Math.PI, 0]}
              width={2.0}
              height={1.65}
              position={[0, 0, 1]}
            />
            <primitive
              object={coffee.scene}
              position={[-2.4, -1.3, 0.2]}
              scale={[2, 2, 2]}
            ></primitive>
          </Float>
          <Float rotationIntensity={1.6}>
            <rectAreaLight
              color={"#0021a7"}
              intensity={55}
              rotation={[0.1, Math.PI, 0]}
              width={2.0}
              height={1.65}
              position={[0, 0, 1]}
            />
            <primitive
              object={donut.scene}
              position={[2.4, -1.3, 0.2]}
              scale={[3, 3, 3]}
              rotation-x={0.4}
            ></primitive>
          </Float>

          <Text
            font="../public/RobotoSlab-Bold.ttf"
            fontSize={0.6}
            position={[0, 1.725, 0.75]}
          >
            React-Three-Fiber
          </Text>
        </PresentationControls>
        <ContactShadows scale={7} blur={2.4} opacity={0.7} position-y={-2.0} />
      </Canvas>
    </div>
  );
}

export default App;
