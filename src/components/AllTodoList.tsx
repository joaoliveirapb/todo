import { useTasksContext } from '@/context/TasksContext'
import { TodoItem } from './TodoItem'

export function AllTodoList() {
  const { allTodos } = useTasksContext()

  return (
    <>
      {allTodos.map((todo, index) => (
        <TodoItem key={index} todo={todo} index={index} />
      ))}
    </>
  )
}
