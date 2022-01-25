import { useState, useEffect } from "react"

export const useLocalStorage = (initialValue: boolean | [], key: string) => {
  const getValue = () => {
    const storage = localStorage.getItem(key)

    if (storage) {
      return JSON.parse(storage)
    }

    return initialValue
  }

  const [value, setValue] = useState(getValue)

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [value, key])

  return [value, setValue]
}
