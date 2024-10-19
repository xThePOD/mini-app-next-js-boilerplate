import React from 'react'

interface MenuBoardProps {
  onStartGame: (difficulty: 'easy' | 'medium' | 'hard', piece: 'pumpkin' | 'scarygary' | 'podplaylogo') => void
  onGoBack: () => void
  isMuted: boolean
  toggleMute: () => void
}

const MenuBoard: React.FC<MenuBoardProps> = ({ onStartGame, onGoBack, isMuted, toggleMute }) => {
  return (
    <div>
      <h1>Menu Board</h1>
      <button onClick={() => onStartGame('easy', 'pumpkin')}>Start Easy Game</button>
      <button onClick={onGoBack}>Go Back</button>
      <button onClick={toggleMute}>{isMuted ? 'Unmute' : 'Mute'}</button>
    </div>
  )
}

export default MenuBoard
