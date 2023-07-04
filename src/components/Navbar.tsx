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
    <nav className="mt-7 border-b-2 border-zinc-300 dark:border-zinc-600">
      <ul className="flex justify-around">
        <li
          onClick={() => navigateFunction('all')}
          className={`cursor-pointer px-5 py-2 text-sm font-semibold ${
            allTodoList && 'border-b-2 border-blue-500'
          }`}
        >
          All
        </li>
        <li
          onClick={() => navigateFunction('active')}
          className={`cursor-pointer px-5 py-2 text-sm font-semibold ${
            activeTodoList && 'border-b-2 border-blue-500'
          }`}
        >
          Active
        </li>
        <li
          onClick={() => navigateFunction('completed')}
          className={`cursor-pointer px-5 py-2 text-sm font-semibold ${
            completedTodoList && 'border-b-2 border-blue-500'
          }`}
        >
          Completed
        </li>
      </ul>
    </nav>
  )
}
