import { useState } from "react"

export function useQuery (){
  const [loading, setLoading] = useState(false)

  async function fetchData <T> (input: RequestInfo, init?: RequestInit | undefined): Promise<T> {
    setLoading(true)
    const request = await fetch(input, init)
    const result: T = await request.json()
    setLoading(false)
    return result
  }
  return { 
    loading,
    fetch: fetchData
  }
}