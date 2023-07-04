import { TaskProps } from '@/interfaces/TaskProps'
import { TodoItem } from './TodoItem'

interface AllTodoListProps {
  allTodos: TaskProps[]
}

export function AllTodoList({ allTodos }: AllTodoListProps) {
  return (
    <>
      {allTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </>
  )
}
