import { TaskProps } from '@/interfaces/TaskProps'
import { useState } from 'react'

interface InputFieldProps {
  addTaskFunction: (task: TaskProps) => void
}

export function InputField({ addTaskFunction }: InputFieldProps) {
  const [inputTask, setInputTask] = useState<string>('')
  const [taskId, setTaskId] = useState<number>(0)

  function todoCreate(task: string) {
    const todoObj = { text: task, id: taskId }
    setTaskId(taskId + 1)
    addTaskFunction(todoObj)
    setInputTask('')
  }

  return (
    <div className="mt-5 flex gap-4">
      <input
        type="text"
        placeholder="add details"
        value={inputTask}
        onChange={(e) => setInputTask(e.target.value)}
        className="flex-1 rounded-xl border-2 border-zinc-300 bg-transparent p-4 text-xs font-medium focus:outline-none dark:border-zinc-600"
      />
      <button
        onClick={() => todoCreate(inputTask)}
        className="rounded-xl bg-blue-500 px-9 text-sm text-white transition-colors hover:bg-blue-600"
      >
        Add
      </button>
    </div>
  )
}
