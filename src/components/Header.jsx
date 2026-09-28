export default function Header({ onAddTaskClick }) {
  return (
    <header className="app-header">
      <h1>Kanban Board</h1>
      <button className="add-task-button" onClick={onAddTaskClick}>
        + Add Task
      </button>
    </header>
  )
}
