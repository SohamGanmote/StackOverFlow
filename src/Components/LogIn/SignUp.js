import Card from "../UI/Card/Card";
import classes from "./SignUp.module.css";
import Button from "../UI/Button/Button";
import Info from "./Info";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useState } from "react";
import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";
function SignUp(props) {
  const [emailError, setEmailError] = useState("");
  const [passError, setPassError] = useState("");
  const [registerError, setRegisterError] = useState();
  const usersCollectionRef = collection(db, "users");
  async function setDetails(e) {
    e.preventDefault();
    const UserName = e.target.children[0].children[2].value;
    let email;
    if (e.target.children[1].children[2].value.includes("@")) {
      email = e.target.children[1].children[2].value;
      setEmailError("");
    } else {
      setEmailError("Invalid Email Address(@ missing in email)");
    }
    let password;
    if (e.target.children[2].children[2].value.length > 7) {
      password = e.target.children[2].children[2].value;
      setPassError("");
    } else {
      setPassError("Password should be at least 8 charecter long");
    }
    console.log(UserName);
    console.log(email);
    console.log(password);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      if (auth.currentUser.email === email) {
        await addDoc(usersCollectionRef, {
          uEmail: email,
          uName: UserName,
          uBio: "Programmer",
          uLink: "",
          uTags: [],
        });
        props.loginStatus(true);
        localStorage.setItem("isLoggedIn", auth.currentUser.email);
        props.loginSucessFull();
        setRegisterError("");
        console.log("Firebase Request Send ... (From SignUp.js)");
      }
    } catch (err) {
      console.log("Something Went Wrong");
      setRegisterError("Something Went Wrong");
    }
  }
  return (
    <div className={classes.signupBox}>
      <Info />
      <Card className={classes.signup}>
        {auth.currentUser?.email}
        <form onSubmit={setDetails}>
          <div>
            <label htmlFor="Name">Display Name</label> <br />
            <input type="text" id="Name" required />
          </div>
          <div>
            <label htmlFor="Email">Email</label> <br />
            <input type="text" id="Email" required />
            <p className={classes.Error}>{emailError}</p>
          </div>
          <div>
            <label htmlFor="pass">Password</label>
            <br />
            <input type="password" id="pass" required />
            <p className={classes.Error}>{passError}</p>
          </div>
          <div
            style={{ width: "260px", lineHeight: "15px", marginTop: "10px" }}
          >
            <span className={classes.passwordText}>
              Passwords must contain at least eight characters, including at
              least 1 letter and 1 number.
            </span>
          </div>
          <div className={classes.chakeboxBox}>
            <input type="checkbox" />
            <span>
              Opt-in to receive occasional product updates, user research
              invitations, company announcements, and digests.
            </span>
          </div>
          <Button text="Sign up" />
          <p className={classes.Error}>{registerError}</p>
          <p className={classes.endText}>
            By clicking “Sign up”, you agree to our{" "}
            <span style={{ color: "#7387fc" }}>
              terms of service, privacy policy
            </span>{" "}
            and <span style={{ color: "#7387fc" }}>cookie policy</span>
          </p>
          <br />
          <hr />
          <p className={classes.Login}>
            Already have an account?{" "}
            <button onClick={props.login}>Log in</button>
          </p>
        </form>
      </Card>
    </div>
  );
}
export default SignUp;
