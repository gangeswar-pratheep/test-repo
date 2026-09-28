import { useState } from 'react'

const TASK_TYPES = ['Feature', 'Bug', 'Chore']

export default function AddTaskModal({ onClose, onAdd }) {
  const [title, setTitle] = useState('')
  const [type, setType] = useState(TASK_TYPES[0])

  function handleSubmit(e) {
    e.preventDefault()
    const trimmedTitle = title.trim()
    if (!trimmedTitle) return
    onAdd({ title: trimmedTitle, type })
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h2>Add Task</h2>
        <form onSubmit={handleSubmit}>
          <label className="modal-field">
            Title
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              autoFocus
            />
          </label>
          <label className="modal-field">
            Type
            <select value={type} onChange={(e) => setType(e.target.value)}>
              {TASK_TYPES.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </label>
          <div className="modal-actions">
            <button type="button" onClick={onClose}>
              Cancel
            </button>
            <button type="submit">Add</button>
          </div>
        </form>
      </div>
    </div>
  )
}
