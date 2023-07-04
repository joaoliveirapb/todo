import { ThemeButton } from './ThemeButton'

export function Header() {
  return (
    <header className="flex justify-end">
      <div className="flex w-[60%] justify-between">
        <h1 className="font-mono text-4xl font-bold">#to-do</h1>
        <ThemeButton />
      </div>
    </header>
  )
}
