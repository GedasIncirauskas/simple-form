import { defaultUser } from "../utils/consts";

const userData = () => {
  let data = localStorage.getItem("userData");
  if (data !== null) {
    return (data = JSON.parse(data));
  }
  return defaultUser;
};

const initialState = {
  user: userData(),
  users: [
    {
      username: "frontend@isawesome.com",
      password: "cool",
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
  }
  return state;
};

export default reducer;
