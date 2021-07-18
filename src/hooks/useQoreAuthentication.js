import qoreContext from "../context/qoreContext";
import cookies from "js-cookie";

export default function useQoreAuthentication() {
  const client = qoreContext.useClient();
  const handleLogout = () => {
    // log a user out by removing the token from your storage
    cookies.remove("token");
  };

  const handleLogin = async (email, password) => {
    console.log(email);
    console.log(password);
    const token = await client.authenticate(email, password);

    // save token to somewhere safe
    cookies.set("token", token);
  };

  return { handleLogin, handleLogout };
}
