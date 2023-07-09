import { useTasksContext } from '@/context/TasksContext'
import { KeyboardEvent, useState } from 'react'
import { Error } from './Error'

interface InputFieldProps {
  completedTodoList: boolean
}

export function InputField({ completedTodoList }: InputFieldProps) {
  const [inputTask, setInputTask] = useState<string>('')
  const [error, setError] = useState<boolean>(false)
  const { addTask } = useTasksContext()

  function todoCreate(task: string) {
    if (inputTask.length > 0) {
      setError(false)
      const todoObj = { text: task, checked: false }
      addTask(todoObj)
      setInputTask('')
    } else {
      setError(true)
    }
  }

  function handleKeyDown(e: KeyboardEvent) {
    if (e.key === 'Enter') {
      todoCreate(inputTask)
    }
  }

  return (
    <div className={`mt-5 ${completedTodoList && 'hidden'}`}>
      <div className="flex gap-4">
        <input
          type="text"
          placeholder="add details"
          value={inputTask}
          onChange={(e) => setInputTask(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 rounded-xl border-2 border-zinc-300 bg-transparent p-4 text-sm font-medium focus:outline-none dark:border-zinc-600"
        />
        <button
          onClick={() => todoCreate(inputTask)}
          className="rounded-xl bg-blue-500 px-9 text-sm font-medium text-white transition-colors hover:bg-blue-600 max-[400px]:px-4 max-[400px]:text-xs"
        >
          Add
        </button>
      </div>
      {error && <Error />}
    </div>
  )
}
