import { Heart } from 'lucide-react'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="flex items-center justify-center text-sm text-zinc-500 dark:text-zinc-400">
      created with <Heart size={18} className="mx-0.5 text-red-500" /> by
      <Link
        href="https://github.com/joaoliveirapb"
        className="ml-0.5 font-bold underline"
      >
        @joaoliveirapb
      </Link>
    </footer>
  )
}
