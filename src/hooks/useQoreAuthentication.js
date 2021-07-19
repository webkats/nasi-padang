import qoreContext from "../context/qoreContext";
import cookies from "js-cookie";

export default function useQoreAuthentication() {
  const client = qoreContext.useClient();

  const handleLogout = () => {
    // log a user out by removing the token from your storage
    cookies.remove("token");
  };

  const handleLogin = async (email, password) => {
    try {
      console.log(email);
      console.log(password);
      console.log(client.authenticate);
      const token = await client.authenticate(email, password);
      console.log(token, "<<< token");

      // save token to somewhere safe
      cookies.set("token", token);
    } catch (err) {
      console.log(err);
    }
  };

  return { handleLogin, handleLogout, client };
}
