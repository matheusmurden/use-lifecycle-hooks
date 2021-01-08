import { useEffect } from 'react'

export default (callback = () => null) => {
  return (
    useEffect(() => {
      callback()
    }, [callback])
  )
}