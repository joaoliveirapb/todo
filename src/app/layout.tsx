import { ThemeContext } from '@/context/ThemeContext'
import { Montserrat, Raleway } from 'next/font/google'
import { ReactNode } from 'react'
import './globals.css'

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-raleway',
})
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-montserrat',
})

export const metadata = {
  title: 'To-Do',
  description:
    'Um site para gerenciar suas tarefas e aumentar sua produtividade, construído com React, Next.js e TailwindCSS',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${raleway.variable} ${montserrat.variable} flex justify-center font-sans dark:bg-zinc-900`}
      >
        <ThemeContext>{children}</ThemeContext>
      </body>
    </html>
  )
}
