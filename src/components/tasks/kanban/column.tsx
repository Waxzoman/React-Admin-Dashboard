import { useDroppable } from '@dnd-kit/core'
import React from 'react'

const KanbanColumn = () => {
    const { isOver, setNodeRef, active } = useDroppable({
      id: '',
      data: ''
  })
  
  return (
    <div
        ref={}
    >
        
    </div>
  )
}

export default KanbanColumn