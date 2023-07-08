'use client'

import { Dispatch, SetStateAction, useEffect, useState } from 'react'

export function useLocalStorage<T>(
  key: string,
  initialState: T,
): [T, Dispatch<SetStateAction<T>>] {
  const [state, setState] = useState<T>(initialState)

  useEffect(() => {
    const storageValue = localStorage.getItem(key)
    if (storageValue) {
      setState(JSON.parse(storageValue))
    }
  }, [key])

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state))
  }, [key, state])

  return [state, setState]
}
