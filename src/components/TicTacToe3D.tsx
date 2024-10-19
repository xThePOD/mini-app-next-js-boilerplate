import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

interface TicTacToe3DProps {
  onRestart: () => void
  onBackToMenu: () => void
  difficulty: 'easy' | 'medium' | 'hard'
  piece: 'pumpkin' | 'scarygary' | 'podplaylogo'
  isMuted: boolean
  toggleMute: () => void
}

const TicTacToe3D: React.FC<TicTacToe3DProps> = ({
  onRestart,
  onBackToMenu,
  difficulty,
  piece,
  isMuted,
  toggleMute
}) => {
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <Canvas>
        <OrbitControls />
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        {/* Your 3D game objects here */}
      </Canvas>
      <div style={{ position: 'absolute', top: 10, left: 10 }}>
        <button onClick={onRestart}>Restart</button>
        <button onClick={onBackToMenu}>Back to Menu</button>
        <button onClick={toggleMute}>{isMuted ? 'Unmute' : 'Mute'}</button>
        <p>Difficulty: {difficulty}</p>
        <p>Piece: {piece}</p>
      </div>
    </div>
  )
}

export default TicTacToe3D
