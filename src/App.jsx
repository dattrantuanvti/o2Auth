import { LoginSocialInstagram } from "reactjs-social-login";
import "./App.css";
import { InstagramLoginButton } from "react-social-login-buttons";

function App() {
  return (
    <>
      <LoginSocialInstagram
        client_id={import.meta.env.VITE_CLIENT_ID}
        client_secret={import.meta.env.VITE_CLIENT_SECRET}
        redirect_uri={"https://localhost:5173/"}
        onResolve={({ data }) => {
          console.log("onResolve", data);
        }}
        onReject={(err) => {
          console.log(err);
        }}
        scope="user_profile,user_media"
      >
        <InstagramLoginButton />
      </LoginSocialInstagram>
    </>
  );
}

export default App;
