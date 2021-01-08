import { useEffect } from 'react'

export default (callback = () => null) => {
  return (
    useEffect(() => {
      return () => {
        callback()
      }
    }, [callback])
  )
}