import axios from "axios"

const UPDATE_NAME = "UPDATE_NAME"
const UPDATE_PHONE = "UPDATE_PHONE"
const UPDATE_EMAIL = "UPDATE_EMAIL"
const SEND_USER_INFO = "SEND_USER_INFO"

const initialState = {
  user: {
    name: localStorage.getItem("name") ?? "Иванова Анна Михайловна",
    email: localStorage.getItem("email") ?? "ivanova@mail.ru",
    phone: localStorage.getItem("phone") ?? "",
  },
}

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NAME: {
      return {
        ...state,
        user: { ...state.user, name: action.name },
      }
    }
    case UPDATE_EMAIL: {
      return {
        ...state,
        user: { ...state.user, email: action.email },
      }
    }
    case UPDATE_PHONE: {
      return {
        ...state,
        user: { ...state.user, phone: action.phone },
      }
    }
    default:
      return state
  }
}

export function updateName(name) {
  return { type: UPDATE_NAME, name }
}

export function updatePhone(phone) {
  return { type: UPDATE_PHONE, phone }
}

export function updateEmail(email) {
  return { type: UPDATE_EMAIL, email }
}

export function sendUserInfo(name, email, phone) {
  return (dispatch) => {
    axios({
      method: "post",
      url: `http://jsonplaceholder.typicode.com/posts`,
      headers: {
        "Content-Type": "application/json",
        "x-token-access": "random",
      },
      data: { name, email, phone },
    }).then((data) => {
      dispatch({
        type: SEND_USER_INFO,
        name: data.name,
        email: data.email,
        phone: data.phone,
      })
    })
  }
}
