import { useState } from 'react'
import TaskCard from './TaskCard.jsx'

export default function Lane({ lane, tasks, onDropTask }) {
  const [isDragOver, setIsDragOver] = useState(false)

  return (
    <div
      className={`lane ${isDragOver ? 'lane-drag-over' : ''}`}
      onDragOver={(e) => {
        e.preventDefault()
        setIsDragOver(true)
      }}
      onDragLeave={() => setIsDragOver(false)}
      onDrop={(e) => {
        e.preventDefault()
        setIsDragOver(false)
        const taskId = e.dataTransfer.getData('text/plain')
        onDropTask(taskId, lane.key)
      }}
    >
      <h2 className="lane-header">
        {lane.label} <span className="lane-count">{tasks.length}</span>
      </h2>
      <div className="lane-tasks">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  )
}
