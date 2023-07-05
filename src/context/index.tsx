import { ReactNode } from 'react'
import { TasksProvider } from './TasksContext'
import { ThemeContext } from './ThemeContext'

export function AppProvider({ children }: { children: ReactNode }) {
  return (
    <ThemeContext>
      <TasksProvider>{children}</TasksProvider>
    </ThemeContext>
  )
}
