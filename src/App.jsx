import "./index.css";

import { useRef } from "react";

import { Canvas, useFrame } from "@react-three/fiber";
import {
	OrbitControls,
	GizmoHelper,
	GizmoViewcube,
	GizmoViewport,
} from "@react-three/drei";

function AnimatedBox() {
	const boxRef = useRef(null);

	useFrame(() => {
		// boxRef.current.rotation.x += 0.005;
		boxRef.current.rotation.y += 0.005;
		// boxRef.current.rotation.z += 0.005;
	});

	return (
		<mesh ref={boxRef} scale={0.7}>
			<boxGeometry args={[2, 2, 2]} />
			<meshStandardMaterial color={0x00bfff} />
		</mesh>
	);
}

function App() {
	return (
		<div id="canvas-container">
			<Canvas camera={{ position: [4, 4, 10] }}>
				{/* Helpers */}
				{/* <axesHelper args={[2]} /> */}
				<gridHelper args={[20, 20, 0xff22aa, 0x55ccff]} /> {/*for grid */}
				{/* Gizmo wrapper */}
				<GizmoHelper alignment="top-right" margin={[80, 80]}>
					<GizmoViewport />
				</GizmoHelper>
				<OrbitControls />
				<AnimatedBox />
				{/* Light */}
				<directionalLight position={[4, 2, 3]} />
			</Canvas>
		</div>
	);
}

export default App;
