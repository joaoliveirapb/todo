import { ThemeButton } from './ThemeButton'

export function Header() {
  return (
    <header className="relative flex items-center justify-center max-[400px]:justify-between">
      <h1 className="font-mono text-4xl font-bold">#to-do</h1>
      <ThemeButton />
    </header>
  )
}
