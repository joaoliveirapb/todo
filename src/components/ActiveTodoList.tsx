import { useTasksContext } from '@/context/TasksContext'
import { TodoItem } from './TodoItem'

export function ActiveTodoList() {
  const { allTodos } = useTasksContext()

  return (
    <>
      {allTodos.map(
        (todo, index) =>
          !todo.checked && <TodoItem key={index} todo={todo} index={index} />,
      )}
    </>
  )
}
