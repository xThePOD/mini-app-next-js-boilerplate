import { Object3DNode } from '@react-three/fiber'

declare module '@react-three/fiber' {
  interface ThreeElements {
    group: Object3DNode<THREE.Group, typeof THREE.Group>
    mesh: Object3DNode<THREE.Mesh, typeof THREE.Mesh>
    boxGeometry: Object3DNode<THREE.BoxGeometry, typeof THREE.BoxGeometry>
    meshStandardMaterial: Object3DNode<THREE.MeshStandardMaterial, typeof THREE.MeshStandardMaterial>
    meshBasicMaterial: Object3DNode<THREE.MeshBasicMaterial, typeof THREE.MeshBasicMaterial>
    ambientLight: Object3DNode<THREE.AmbientLight, typeof THREE.AmbientLight>
    pointLight: Object3DNode<THREE.PointLight, typeof THREE.PointLight>
  }
}

