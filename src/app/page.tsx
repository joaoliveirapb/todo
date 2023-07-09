'use client'

import { ActiveTodoList } from '@/components/ActiveTodoList'
import { AllTodoList } from '@/components/AllTodoList'
import { CompletedTodoList } from '@/components/CompletedTodoList'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { InputField } from '@/components/InputField'
import { Navbar } from '@/components/Navbar'
import { useState } from 'react'

export default function Home() {
  const [isAllTodoList, setIsAllTodoList] = useState<boolean>(true)
  const [isActiveTodoList, setIsActiveTodoList] = useState<boolean>(false)
  const [isCompletedTodoList, setIsCompletedTodoList] = useState<boolean>(false)

  function navigate(section: string) {
    switch (section) {
      case 'all':
        setIsAllTodoList(true)
        setIsActiveTodoList(false)
        setIsCompletedTodoList(false)
        break
      case 'active':
        setIsActiveTodoList(true)
        setIsAllTodoList(false)
        setIsCompletedTodoList(false)
        break
      case 'completed':
        setIsCompletedTodoList(true)
        setIsAllTodoList(false)
        setIsActiveTodoList(false)
        break
    }
  }

  return (
    <main className="flex min-h-screen w-full max-w-[608px] flex-col py-8 max-sm:px-4">
      <Header />
      <div className="flex-1">
        <Navbar
          navigateFunction={navigate}
          allTodoList={isAllTodoList}
          activeTodoList={isActiveTodoList}
          completedTodoList={isCompletedTodoList}
        />
        <InputField completedTodoList={isCompletedTodoList} />
        {isAllTodoList && <AllTodoList />}
        {isActiveTodoList && <ActiveTodoList />}
        {isCompletedTodoList && <CompletedTodoList />}
      </div>
      <Footer />
    </main>
  )
}
