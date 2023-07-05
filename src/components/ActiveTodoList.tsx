import { useTasksContext } from '@/context/TasksContext'
import { TodoItem } from './TodoItem'

export function ActiveTodoList() {
  const { allTodos } = useTasksContext()

  return (
    <>
      {/* {allTodos.map((todo) => {
        if (todo.checked === false) {
          return <TodoItem key={todo.id} todo={todo} />
        }
        return null
      })} */}

      {allTodos.map(
        (todo) =>
          todo.checked === false && <TodoItem key={todo.id} todo={todo} />,
      )}
    </>
  )
}
