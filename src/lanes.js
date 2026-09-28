export const LANES = [
  { key: 'todo', label: 'To Do' },
  { key: 'inprogress', label: 'In Progress' },
  { key: 'done', label: 'Done' },
]

export function laneIndex(status) {
  return LANES.findIndex((lane) => lane.key === status)
}

export function canMove(fromStatus, toStatus) {
  return laneIndex(toStatus) === laneIndex(fromStatus) + 1
}
