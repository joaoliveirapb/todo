interface NavbarProps {
  navigateFunction: (section: string) => void
  allTodoList: boolean
  activeTodoList: boolean
  completedTodoList: boolean
}

export function Navbar({
  navigateFunction,
  allTodoList,
  activeTodoList,
  completedTodoList,
}: NavbarProps) {
  return (
    <nav className="mt-7 flex justify-around border-b-2 border-zinc-300 dark:border-zinc-600 max-[400px]:justify-between">
      <button
        onClick={() => navigateFunction('all')}
        className={`px-5 py-3 text-sm font-semibold max-[400px]:px-3 max-[400px]:text-xs ${
          allTodoList && 'border-b-2 border-blue-500'
        }`}
      >
        All
      </button>
      <button
        onClick={() => navigateFunction('active')}
        className={`px-5 py-3 text-sm font-semibold max-[400px]:px-3 max-[400px]:text-xs ${
          activeTodoList && 'border-b-2 border-blue-500'
        }`}
      >
        Active
      </button>
      <button
        onClick={() => navigateFunction('completed')}
        className={`px-5 py-3 text-sm font-semibold max-[400px]:px-3 max-[400px]:text-xs ${
          completedTodoList && 'border-b-2 border-blue-500'
        }`}
      >
        Completed
      </button>
    </nav>
  )
}
