import { useTasksContext } from '@/context/TasksContext'
import { TaskProps } from '@/interfaces/TaskProps'
import * as Checkbox from '@radix-ui/react-checkbox'
import { Check, Trash2 } from 'lucide-react'

interface TodoItemProps {
  todo: TaskProps
}

export function TodoItem({ todo }: TodoItemProps) {
  const { deleteTask, updateCheckTask } = useTasksContext()

  return (
    <div className="mt-5 flex justify-between">
      <div className="flex items-center gap-2">
        <Checkbox.Root
          className="flex h-6 w-6 items-center justify-center overflow-hidden rounded-md border-2 border-zinc-300 dark:border-zinc-600"
          id="c1"
          checked={todo.checked}
          onCheckedChange={() => updateCheckTask(todo.id)}
        >
          <Checkbox.Indicator className="h-full w-full bg-blue-500 text-white">
            <Check size={20} />
          </Checkbox.Indicator>
        </Checkbox.Root>
        <label
          className={`text-lg font-medium ${todo.checked && 'line-through'}`}
          htmlFor="c1"
        >
          {todo.text}
        </label>
      </div>
      <button
        onClick={() => deleteTask(todo.id)}
        className="text-red-500 hover:text-red-600"
      >
        <Trash2 size={20} />
      </button>
    </div>
  )
}
