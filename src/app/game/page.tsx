'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/navigation'
import MenuBoard from '../../components/MenuBoard'

const TicTacToe3D = dynamic(() => import('../../components/TicTacToe3D'), { ssr: false })

export default function Game() {
  // Your component logic here
}
