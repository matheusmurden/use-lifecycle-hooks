import { useEffect } from 'react'

export default (callback = () => null) => {
  return (
    useEffect(() => {
      console.log("Hey I just MOUNTED")
      callback()
    }, [callback]) // Empty array to run callback once; on mount.
  )
}