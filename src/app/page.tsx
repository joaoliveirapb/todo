import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Navbar } from '@/components/Navbar'

export default function Home() {
  return (
    <main className="flex min-h-screen w-full max-w-[608px] flex-col py-8">
      <Header />
      <div className="flex-1">
        <Navbar />
      </div>
      <Footer />
    </main>
  )
}
