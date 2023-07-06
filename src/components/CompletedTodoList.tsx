import { useTasksContext } from '@/context/TasksContext'
import { TodoItem } from './TodoItem'

export function CompletedTodoList() {
  const { allTodos } = useTasksContext()

  return (
    <>
      {allTodos.map(
        (todo) => todo.checked && <TodoItem key={todo.id} todo={todo} />,
      )}
    </>
  )
}
