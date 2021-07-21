import axios from "axios";
import cookies from "js-cookie";
import Swal from "sweetalert2";

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
      // console.log(err);
      Swal.fire({
        title: "Error!",
        text: "Invalid email or password!",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  const handleLogout = () => {
    cookies.remove("token");
    dispatch(setLogin(false));
  };

  return { handleLogin, handleLogout };
}
