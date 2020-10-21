import React from 'react'
import { useSelector } from 'react-redux'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone'
import PersonIcon from "@material-ui/icons/Person"

const User = () => {
  const { user } = useSelector((s) => s.info)

  return (
    <div className="flex flex-row space-x-2 text-white items-center">
      <NotificationsNoneIcon />
      <div className="border-l-2 border-white h-8" />
      <PersonIcon
        style={{
          flexDirection: "cloumn",
          color: "white",
          background: "purple",
          borderRadius: "50%",
          justifyContent: "flex-end",
          fontSize: 25,
          marginLeft: 10
        }}
      />
      <div className="hidden lg:block">{user.name.slice(0, 9)}.</div>
    </div>
  )
}

User.propTypes = {}

export default React.memo(User)
