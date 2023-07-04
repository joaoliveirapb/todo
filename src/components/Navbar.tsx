export function Navbar() {
  return (
    <nav className="mt-7 border-b-2 border-zinc-300 dark:border-zinc-600">
      <ul className="flex justify-around">
        <li className="cursor-pointer border-b-2 border-blue-500 px-5 py-2 text-sm font-semibold">
          All
        </li>
        <li className="cursor-pointer px-5 py-2 text-sm font-semibold">
          Active
        </li>
        <li className="cursor-pointer px-5 py-2 text-sm font-semibold">
          Completed
        </li>
      </ul>
    </nav>
  )
}
