import { useEffect } from 'react'

export default (callback = () => null) => {
  return (
    useEffect(() => {
      return () => {
        console.log("Hey I'm about to UNMOUNT")
        callback()
      }
    }, [callback]) // Empty array to run callback once; only on cleanup (unmount).
  )
}