'use client'

import { TaskProps } from '@/interfaces/TaskProps'
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react'

interface TasksContextProps {
  allTodos: TaskProps[]
  setAllTodos: Dispatch<SetStateAction<TaskProps[]>>
  addTask: (task: TaskProps) => void
  deleteTask: (id: number) => void
}

export const TasksContext = createContext<TasksContextProps>(
  {} as TasksContextProps,
)

export function TasksProvider({ children }: { children: ReactNode }) {
  const [allTodos, setAllTodos] = useState<TaskProps[]>([])

  function addTask(task: TaskProps) {
    setAllTodos([...allTodos, task])
  }

  function deleteTask(id: number) {
    const newAllTodos = allTodos.filter((todo) => todo.id !== id)
    setAllTodos(newAllTodos)
  }

  return (
    <TasksContext.Provider
      value={{ allTodos, setAllTodos, addTask, deleteTask }}
    >
      {children}
    </TasksContext.Provider>
  )
}

export function useTasksContext() {
  const context = useContext(TasksContext)
  return context
}
