import Lane from './Lane.jsx'
import { LANES } from '../lanes.js'

export default function Board({ tasks, onDropTask }) {
  return (
    <div className="board">
      {LANES.map((lane) => (
        <Lane
          key={lane.key}
          lane={lane}
          tasks={tasks.filter((task) => task.status === lane.key)}
          onDropTask={onDropTask}
        />
      ))}
    </div>
  )
}
