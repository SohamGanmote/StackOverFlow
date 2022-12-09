import classes from "./UserLinks.module.css";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import { useEffect, useState } from "react";
import { db } from "../../firebase";
import { updateDoc, doc } from "firebase/firestore";
function UserLinks(props) {
  const [profilePicture, setProfilePicture] = useState();
  const [userId, setUserId] = useState();
  const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");
  useEffect(
    function () {
      props.UserDatabase.map((findUser) => {
        if (findUser.uEmail === storedUserLoggedInInformation) {
          setProfilePicture(findUser.uName);
          setUserId(findUser.id);
        }
        return 0;
      });
    },
    [props.UserDatabase, storedUserLoggedInInformation]
  );
  async function updateLink(e) {
    e.preventDefault();
    if (e.target[0].value !== "") {
      try {
        const userDoc = doc(db, "users", userId);
        const newFields = { uLink: e.target[0].value };
        await updateDoc(userDoc, newFields);
        console.log("Firebase Link Updated ... (From UserLinks.js)");
      } catch (error) {
        console.log("Failed To Update User Link");
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
        <h2>Add Social Media Link</h2>
        <form className={classes.editProfileForm} onSubmit={updateLink}>
          <div>
            <input type="text" placeholder="Instagram, Linkdin, etc" />
          </div>
          <br />
          <div style={{ textAlign: "center" }}>
            <Button text="Add Social Media" />
          </div>
        </form>
      </Card>
    </div>
  );
}
export default UserLinks;
