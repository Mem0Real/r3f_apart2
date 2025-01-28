import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import "./index.css";

function AnimatedBox() {
	const boxRef = useRef(null);

	useFrame(() => {
		// boxRef.current.rotation.x += 0.005;
		boxRef.current.rotation.y += 0.005;
		// boxRef.current.rotation.z += 0.005;
	});

	return (
		<mesh ref={boxRef}>
			<boxGeometry args={[2, 2, 2]} />
			<meshStandardMaterial color={0x00bfff} />
		</mesh>
	);
}

function App() {
	return (
		<div id="canvas-container">
			<Canvas>
				<AnimatedBox />
				<directionalLight position={[4, 2, 3]} />
			</Canvas>
		</div>
	);
}

export default App;
