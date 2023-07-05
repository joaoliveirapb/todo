import { useTasksContext } from '@/context/TasksContext'
import { TodoItem } from './TodoItem'

export function AllTodoList() {
  const { allTodos } = useTasksContext()

  return (
    <>
      {allTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </>
  )
}
