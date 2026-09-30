export default function Header({ view, onViewChange, onAddTaskClick }) {
  return (
    <header className="app-header">
      <h1>Kanban Board</h1>
      <nav className="app-nav">
        <button
          className="nav-button"
          onClick={() => onViewChange(view === 'board' ? 'connectivity' : 'board')}
        >
          {view === 'board' ? 'Backend Status' : 'Back to Board'}
        </button>
        {view === 'board' && (
          <button className="add-task-button" onClick={onAddTaskClick}>
            + Add Task
          </button>
        )}
      </nav>
    </header>
  )
}
