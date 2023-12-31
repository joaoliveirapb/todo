'use client'

import { useLocalStorage } from '@/hooks/useLocalStorage'
import { TaskProps } from '@/interfaces/TaskProps'
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
} from 'react'

interface TasksContextProps {
  allTodos: TaskProps[]
  setAllTodos: Dispatch<SetStateAction<TaskProps[]>>
  addTask: (task: TaskProps) => void
  deleteTask: (id: number) => void
  updateCheckTask: (id: number) => void
  deleteAllCompletedTasks: () => void
}

export const TasksContext = createContext<TasksContextProps>(
  {} as TasksContextProps,
)

export function TasksProvider({ children }: { children: ReactNode }) {
  // const [allTodos, setAllTodos] = useState<TaskProps[]>([])
  const [allTodos, setAllTodos] = useLocalStorage<TaskProps[]>('all_todos', [])

  function addTask(task: TaskProps) {
    setAllTodos([...allTodos, task])
  }

  function deleteTask(id: number) {
    const newAllTodos = allTodos.filter((_, index) => index !== id)
    setAllTodos(newAllTodos)
  }

  function updateCheckTask(id: number) {
    const updatedCheckTodos = allTodos.map((todo, index) => {
      if (index === id) {
        return {
          ...todo,
          checked: !todo.checked,
        }
      }
      return todo
    })

    setAllTodos(updatedCheckTodos)
  }

  function deleteAllCompletedTasks() {
    const deleteTasks = allTodos.filter((todo) => todo.checked === false)
    setAllTodos(deleteTasks)
  }

  return (
    <TasksContext.Provider
      value={{
        allTodos,
        setAllTodos,
        addTask,
        deleteTask,
        updateCheckTask,
        deleteAllCompletedTasks,
      }}
    >
      {children}
    </TasksContext.Provider>
  )
}

export function useTasksContext() {
  const context = useContext(TasksContext)
  return context
}
