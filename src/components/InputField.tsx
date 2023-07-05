import { useTasksContext } from '@/context/TasksContext'
import { KeyboardEvent, useState } from 'react'

export function InputField() {
  const [inputTask, setInputTask] = useState<string>('')
  const [taskId, setTaskId] = useState<number>(0)
  const { addTask } = useTasksContext()

  function todoCreate(task: string) {
    if (inputTask.length > 0) {
      const todoObj = { text: task, id: taskId, checked: false }
      setTaskId(taskId + 1)
      addTask(todoObj)
      setInputTask('')
    }
  }

  function handleKeyDown(e: KeyboardEvent) {
    if (e.key === 'Enter') {
      todoCreate(inputTask)
    }
  }

  return (
    <div className="mt-5 flex gap-4">
      <input
        type="text"
        placeholder="add details"
        value={inputTask}
        onChange={(e) => setInputTask(e.target.value)}
        onKeyDown={handleKeyDown}
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
