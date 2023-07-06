import { useTasksContext } from '@/context/TasksContext'
import { Trash2 } from 'lucide-react'
import { useEffect, useState } from 'react'
import { TodoItem } from './TodoItem'

export function CompletedTodoList() {
  const [isDeleteAllButtonVisible, setIsDeleteAllButtonVisible] =
    useState<boolean>(false)
  const { allTodos, deleteAllCompletedTasks } = useTasksContext()

  useEffect(() => {
    const hasCompletedTodos = allTodos.some((todo) => todo.checked)
    setIsDeleteAllButtonVisible(hasCompletedTodos)
  }, [allTodos])

  return (
    <>
      {allTodos.map(
        (todo) => todo.checked && <TodoItem key={todo.id} todo={todo} />,
      )}
      {isDeleteAllButtonVisible && (
        <div className="mt-6 flex justify-end">
          <button
            onClick={deleteAllCompletedTasks}
            className="flex items-center gap-1 rounded-xl bg-red-500 px-8 py-4 text-white transition-colors hover:bg-red-600"
          >
            <Trash2 size={14} />
            <span className="text-xs font-semibold">delete all</span>
          </button>
        </div>
      )}
    </>
  )
}
