import { LANES } from '../lanes.js'

export default function TaskCard({ task }) {
  const statusLabel = LANES.find((lane) => lane.key === task.status)?.label
  return (
    <div
      className="task-card"
      draggable
      onDragStart={(e) => {
        e.dataTransfer.setData('text/plain', task.id)
      }}
    >
      <div className="task-card-title">{task.title}</div>
      <div className="task-card-meta">
        <span className="task-badge task-type">{task.type}</span>
        <span className="task-badge task-status">{statusLabel}</span>
      </div>
    </div>
  )
}
