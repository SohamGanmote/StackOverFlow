import classes from "./UpdateProfile.module.css";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import { useEffect, useState } from "react";
import { db } from "../../firebase";
import { updateDoc, doc } from "firebase/firestore";
function UpdateProfile(props) {
  const [profilePicture, setProfilePicture] = useState();
  const [userId, setUserId] = useState();
  const [currUserName, setCurrUserName] = useState("");
  const [currUserBio, setCurrUserBio] = useState("");
  const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");
  useEffect(
    function () {
      props.UserDatabase.map((findUser) => {
        if (findUser.uEmail === storedUserLoggedInInformation) {
          setProfilePicture(findUser.uName);
          setCurrUserName(findUser.uName);
          setCurrUserBio(findUser.uBio);
          setUserId(findUser.id);
        }
        return 0;
      });
    },
    [props.UserDatabase, storedUserLoggedInInformation]
  );
  async function updateUserProfile(e) {
    e.preventDefault();
    if (e.target[0].value !== "" && e.target[1].value !== "") {
      try {
        const userDoc = doc(db, "users", userId);
        const newFields = { uName: e.target[0].value, uBio: e.target[1].value };
        await updateDoc(userDoc, newFields);
        console.log("Firebase Data Updated ... (From UpdateProfile.js)");
      } catch (error) {
        console.log("Failed To Update User Data");
      }
    } else if (e.target[0].value !== "") {
      try {
        const userDoc = doc(db, "users", userId);
        const newFields = { uName: e.target[0].value, uBio: currUserBio };
        await updateDoc(userDoc, newFields);
        console.log("Firebase Data Updated ... (From UpdateProfile.js)");
      } catch (error) {
        console.log("Failed To Update User Data");
      }
    } else if (e.target[1].value !== "") {
      try {
        const userDoc = doc(db, "users", userId);
        const newFields = { uName: currUserName, uBio: e.target[1].value };
        await updateDoc(userDoc, newFields);
        console.log("Firebase Data Updated ... (From UpdateProfile.js)");
      } catch (error) {
        console.log("Failed To Update User Data");
      }
    }
    props.home();
  }
  return (
    <div className={classes.editProfile}>
      <Card className={classes.currentProfile}>
        <div className={classes.userProfile}>
          <img
            src={`https://avatars.dicebear.com/api/bottts/${profilePicture}.svg`}
            alt="user"
          />
        </div>
        <h3>{storedUserLoggedInInformation}</h3>
        <hr />
        <form className={classes.editProfileForm} onSubmit={updateUserProfile}>
          <br />
          <div>
            <label htmlFor="name">Edit Name : </label>
            <input type="text" id="name" placeholder={currUserName} />
          </div>
          <br />
          <div>
            <label htmlFor="bio" style={{ marginRight: "45px" }}>
              Edit Bio :{" "}
            </label>
            <input type="text" id="bio" placeholder={currUserBio} />
          </div>
          <br />
          <div style={{ textAlign: "center" }}>
            <Button text="Update" />
          </div>
        </form>
      </Card>
    </div>
  );
}
export default UpdateProfile;
