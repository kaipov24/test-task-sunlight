import React from "react"
import { useSelector } from "react-redux"
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail"
import PhoneIcon from "@material-ui/icons/Phone"

const Info = () => {
  const { user } = useSelector((s) => s.info)

  return (
    <div>
      <div className="rounded-t-lg bg-white shadow-lg h-16 lg:h-24 flex justify-start items-center border-b border-solid pl-6 lg:pl-20 space-x-10">
        <AlternateEmailIcon className="iconColor" />
        <p>{user.email}</p>
      </div>
      <div className="rounded-b-lg bg-white shadow-lg h-16 lg:h-24 flex justify-start items-center pl-6 lg:pl-20 space-x-10">
        <PhoneIcon className="iconColor" />
        <p>{user.phone.length < 1 ? "Укажите номер телефона" : user.phone}</p>
      </div>
    </div>
  )
}

Info.propTypes = {}

export default React.memo(Info)
