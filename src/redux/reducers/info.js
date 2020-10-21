import axios from "axios"

const UPDATE_USER = "UPDATE_USER"
const SEND_USER_INFO = "SEND_USER_INFO"

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) ?? {
    name: "Иванова Анна Михайловна",
    email: "ivanova@mail.ru",
    phone: "",
  },
}

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USER: {
      return {
        ...state,
        user: {
          ...state.user,
          name: action.name,
          phone: action.phone,
          email: action.email,
        },
      }
    }
    default:
      return state
  }
}

export function sendUserInfo({ name, email, phone }) {
  return (dispatch) => {
    dispatch({ type: UPDATE_USER, name, email, phone })
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
