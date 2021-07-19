import axios from "axios";
import cookies from "js-cookie";
const url =
  "https://prod-qore-app.qorebase.io/eojD2G9qYNKquBK/authenticate/password";

export default function useQoreAuthenticationHttps(dispatch, setLogin) {
  const handleLogin = async ({ email, password }) => {
    try {
      // console.log(email);
      // console.log(password);
      const { data } = await axios({
        url,
        method: "POST",
        data: {
          identifier: email,
          password,
        },
      });
      // console.log(data);
      cookies.set("token", data.token);
      dispatch(setLogin(true));
    } catch (err) {
      console.log(err);
    }
  };

  const handleLogout = () => {
    cookies.remove("token");
    dispatch(setLogin(false));
  };

  return { handleLogin, handleLogout };
}
