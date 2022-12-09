import classes from "./LogIn.module.css";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useState } from "react";
function LogIn(props) {
  const [loginError, setLoginError] = useState("");
  async function chakeDetails(e) {
    e.preventDefault();
    const Email = e.target.children[0].children[2].value;
    const Pass = e.target.children[1].children[3].value;
    console.log(Email);
    console.log(Pass);
    try {
      await signInWithEmailAndPassword(auth, Email, Pass);
      props.loginStatus(true);
      localStorage.setItem("isLoggedIn", auth.currentUser.email);
      props.loginSucessFull();
      setLoginError("");
      console.log("Firebase Request Send ... (From LogIn.js)");
    } catch (err) {
      console.log("SomeThing Went Wrong");
      setLoginError("Wrong Email Or Password");
    }
  }
  return (
    <section className={classes.LoginBody}>
      <img
        src="https://stackoverflow.design/assets/img/logos/so/logo-stackoverflow.png"
        alt="logo"
        className={classes.logo}
      />
      <Card className={classes.login}>
        {auth.currentUser?.email}
        <form onSubmit={chakeDetails}>
          <div>
            <label htmlFor="Email">Email</label> <br />
            <input type="text" id="Email" required />
          </div>
          <div>
            <label htmlFor="pass">Password</label> <span>Forgot Password?</span>
            <br />
            <input type="password" id="pass" required />
          </div>
          <Button text="Log in" />
          <p className={classes.Error}>{loginError}</p>
        </form>
      </Card>
      <p className={classes.SignUp}>
        Don’t have an account? <button onClick={props.signup}>Sign up</button>
      </p>
    </section>
  );
}
export default LogIn;
