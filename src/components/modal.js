import React, { useState } from "react"
import { useDispatch } from "react-redux"
import TextField from "@material-ui/core/TextField"
import Modal from "@material-ui/core/Modal"
import PermContactCalendarIcon from "@material-ui/icons/PermContactCalendar"
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail"
import PhoneIcon from "@material-ui/icons/Phone"
import CloseIcon from "@material-ui/icons/Close"
import {
  updateName,
  updateEmail,
  updatePhone,
  sendUserInfo,
} from "../redux/reducers/info"

const ModalWindow = () => {
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false)
  const [toggle, setToggle] = useState(false)
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [phone, setPhone] = useState()
  const [valid, setValid] = useState(true)

  const setValues = () => {
    setOpen(true)
    dispatch(updateName(name))
    dispatch(updateEmail(email))
    dispatch(updatePhone(phone))
    setToggle(true)
    dispatch(sendUserInfo(name, email, phone))
    localStorage.setItem('name', name)
    localStorage.setItem("email", email)
    localStorage.setItem("phone", phone)
  }

  const submitValues = () => {
    setOpen(false)
    setPhone("")
    setEmail("")
    setName("")
  }

  const handleClose = () => {
    setOpen(false)
  }

  const succesModal = (
    <div
      className="flex justify-center h-full w-full absolute"
      onClick={submitValues}
    >
      <div className="flex justify-center items-end lg:items-center w-full h-full">
        <div className="lg:w-1/3 w-full min-h-3/4 lg:min-h-1/4 lg:h-64 bg-white  lg:rounded-lg rounded-t-2xl">
          <button
            type="button"
            onClick={handleClose}
            className="hidden lg:flex lg:justify-end lg:w-full lg:p-4"
          >
            <CloseIcon />
          </button>
          <div className="flex flex-col  items-center w-full my-2">
            <p className="text-xl text-gray-600 p-4">
              Данные успешно сохранены
            </p>
            <button
              type="button"
              onClick={submitValues}
              className="hidden lg:flex lg:justify-center lg:w-1/2 lg:p-2 lg:text-white lg:text-sm lg:mt-6 buttonColor outline-none lg:rounded-full"
            >
              хорошо
            </button>
          </div>
        </div>
      </div>
    </div>
  )

  const inputModal = (
    <div>
      {toggle ? (
        succesModal
      ) : (
        <div className="flex justify-center h-full w-full absolute">
          <div className="flex justify-center items-end lg:items-center w-full h-full">
            <div className="lg:w-1/3 w-full pb-24 lg:pb-0  bg-white rounded-b-none lg:rounded-lg rounded-t-2xl">
              <button
                type="button"
                onClick={handleClose}
                className="flex justify-end w-full p-4"
              >
                <CloseIcon />
              </button>
              <div className="flex flex-col  items-center w-full m-2 pb-16">
                <p className="text-2xl text-gray-600 ">Сохранить изменения?</p>
                <button
                  type="button"
                  onClick={setValues}
                  className="saveButton flex justify-center w-1/3 py-3 buttonColor text-sm mt-6 rounded-full"
                >
                  Сохранить
                </button>
                <button
                  type="button"
                  onClick={handleClose}
                  className="flex justify-center w-1/3 py-3 buttonColor text-sm mt-6 rounded-full"
                >
                  Не сохранять
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )

  return (
    <div>
      <div className="my-2 lg:my-0 ">
        <div className="rounded-t-lg w-full bg-white shadow-lg flex justify-start items-center border-none ">
          <div className="flex flex-col lg:flex-row justify-center lg:justify-between w-full lg:p-8  p-2 items-center">
            <div className="flex items-center lg:space-x-3">
              <div className="hidden lg:block">
                <PermContactCalendarIcon className="iconColor" />
              </div>
              <TextField
                id="outlined-full-width"
                label="Фамилия и имя"
                style={valid ? {width: 280 } : {width: 100}}
                placeholder="Укажите вашу фамилию и имя"
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                value={name}
                onChange={(e) => {
                  setName(e.target.value)
                }}
              />
            </div>
            <div className="flex items-center lg:space-x-3 lg:border-l-2 lg:pl-4">
              <div className="hidden lg:block">
                <AlternateEmailIcon className="iconColor" />
              </div>
              <TextField
                id="outlined-full-width"
                label="E-mail"
                style={{ width: 280 }}
                placeholder="Укажите вашу почту"
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
              />
            </div>
            <div className="flex items-center lg:space-x-3 lg:border-l-2 lg:pl-4">
              <div className="hidden lg:block">
                <PhoneIcon className="iconColor" />
              </div>
              <TextField
                id="outlined-full-width"
                label="Номер телефона"
                style={{ width: 280 }}
                placeholder="Укажите номер телефона"
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value)
                }}
              />
            </div>
          </div>
        </div>
        <div className="rounded-b-lg bg-white shadow-lg w-full h-20 lg:h-24 flex justify-center items-center border-none lg:mb-4">
          <div className="flex items-center h-full">
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="flex justify-center py-3 w-48  buttonColor rounded-full"
            >
              Сохранить изменения
            </button>
          </div>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {inputModal}
      </Modal>
    </div>
  )
}

ModalWindow.propTypes = {}

export default React.memo(ModalWindow)
