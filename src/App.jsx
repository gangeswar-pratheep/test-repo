import { useEffect, useState } from 'react'
import Header from './components/Header.jsx'
import Board from './components/Board.jsx'
import AddTaskModal from './components/AddTaskModal.jsx'
import ConnectivityStatus from './components/ConnectivityStatus.jsx'
import { canMove } from './lanes.js'
import './App.css'

const STORAGE_KEY = 'kanban-tasks'

function loadTasks() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

export default function App() {
  const [tasks, setTasks] = useState(loadTasks)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [view, setView] = useState('board')

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
  }, [tasks])

  function handleAddTask({ title, type }) {
    setTasks((prev) => [
      ...prev,
      { id: crypto.randomUUID(), title, type, status: 'todo' },
    ])
    setIsModalOpen(false)
  }

  function handleDropTask(taskId, targetStatus) {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === taskId && canMove(task.status, targetStatus)
          ? { ...task, status: targetStatus }
          : task,
      ),
    )
  }

  return (
    <div className="app">
      <Header
        view={view}
        onViewChange={setView}
        onAddTaskClick={() => setIsModalOpen(true)}
      />
      {view === 'board' ? (
        <Board tasks={tasks} onDropTask={handleDropTask} />
      ) : (
        <ConnectivityStatus />
      )}
      {isModalOpen && (
        <AddTaskModal
          onClose={() => setIsModalOpen(false)}
          onAdd={handleAddTask}
        />
      )}
    </div>
  )
}
