import { Task } from "./types"

let tasks: Task[] = [
  { id: 1, titulo: "Aprender React", concluida: true },
  { id: 2, titulo: "Estudar NodeJS", concluida: false },
  { id: 3, titulo: "Praticar TypeScript", concluida: false }
]

export function getTasks() {
  return tasks
}

export function pushToTasks(newTask: Task) {
  tasks.push(newTask)
}

export function updateTasks(id: number, newTask: Task) {
  tasks = tasks.map((task) => (
    task.id === id ? newTask : task
  ))

  return tasks
}

export function filterFromTasks(id: number) {
  tasks = tasks.filter((task) => task.id !== id)

  return tasks
}
