import React from "react"
import { useSelector } from "react-redux"

const Main = () => {
  const user = useSelector((s) => s.sample.name)

  return <div>{user}</div>
}

React.memo(Main)

export default Main
