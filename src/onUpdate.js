import { useEffect } from 'react'

export default (callback = () => null) => {
  return (
    useEffect(() => {
      console.log("Hey I just UPDATED")
      callback()
    }) // Optional argument of an [] is not present. Will trigger on every re-render
  )
}