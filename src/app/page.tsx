import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

export default function Home() {
  return (
    <main className="flex min-h-screen w-full max-w-[608px] flex-col py-8">
      <Header />
      <div className="flex-1"></div>
      <Footer />
    </main>
  )
}
