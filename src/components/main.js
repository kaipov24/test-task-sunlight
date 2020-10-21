import React, { useState } from "react"
import { useSelector } from "react-redux"
import PersonIcon from "@material-ui/icons/Person"
import EditIcon from "@material-ui/icons/Edit"
import Button from "@material-ui/core/Button"
import CloseIcon from "@material-ui/icons/Close"
import User from "./userInfo"
import Modal from "./modal"
import Info from "./info"

const Main = () => {
  const [toggle, setToggle] = useState(false)
  const { user } = useSelector((s) => s.info)

  return (
    <div className="">
      <div className="flex absolute z-0 w-full items-start">
        <svg
          className="w-full h-48 lg:h-full"
          viewBox="0 0 1481 470"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0 0H1481V470C1114.99 -38.4972 367.553 634.454 0 401.971V0Z"
            fill="url(#paint0_linear)"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="1481"
              y1="235.001"
              x2="-15.6763"
              y2="235.001"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#2196F3" />
              <stop offset="1" stopColor="#1EC3AF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="flex flex-col absolute z-10 p-2 lg:p-4 w-full">
        <div className="flex justify-end h-10 mb-4">
          <User />
        </div>
        <div className="flex justify-start text-white text-sm font-light lg:tex-md">
          ЛИЧНЫЙ ПРОФИЛЬ <br /> Главная/Личный профиль{" "}
        </div>
        <div>
          <div>
            <div className="titleCard my-6 lg:h-26 h-18 flex flex-row justify-between items-center">
              <div className="lg:m-6 flex flex-row items-center space-x-4 py-2 pl-2 border-none">
                <PersonIcon
                  style={{
                    flexDirection: "cloumn",
                    color: "white",
                    background: "purple",
                    borderRadius: "50%",
                    justifyContent: "flex-end",
                    fontSize: 55,
                  }}
                />
                <div className="font-sans lg:text-lg lg:font-bold text-sm font-base space-x-2 text-white">
                  {user.name}
                </div>
              </div>
              <div className="lg:mr-6  flex items-center justify-end">
                <Button
                  style={{ color: "white" }}
                  onClick={() => setToggle(!toggle)}
                >
                  {!toggle ? (
                    <div className="flex flex-row">
                      <p className="hidden lg:block">РЕДАКТИРОВАТЬ</p>
                      <EditIcon />
                    </div>
                  ) : (
                    <div className="flex flex-row">
                      <p className="hidden lg:block">ЗАКРЫТЬ</p> <CloseIcon />{" "}
                    </div>
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>
        {!toggle ? <Info /> : <Modal />}
      </div>
    </div>
  )
}

Main.propTypes = {}

export default React.memo(Main)
