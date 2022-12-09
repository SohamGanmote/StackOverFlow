import classes from "./UpdateTags.module.css";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import { useEffect, useState } from "react";
import { db } from "../../firebase";
import { updateDoc, doc } from "firebase/firestore";
function UpdateTags(props) {
  const [profilePicture, setProfilePicture] = useState();
  const [userId, setUserId] = useState();
  const [oldTags, setOldTags] = useState([]);
  const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");
  useEffect(
    function () {
      props.UserDatabase.map((findUser) => {
        if (findUser.uEmail === storedUserLoggedInInformation) {
          setProfilePicture(findUser.uName);
          setUserId(findUser.id);
          setOldTags(findUser.uTags);
        }
        return 0;
      });
    },
    [props.UserDatabase, storedUserLoggedInInformation]
  );
  async function updateTags(e) {
    e.preventDefault();
    let text = e.target[0].value;
    if (text !== "") {
      const Array = text.split(",");
      try {
        const userDoc = doc(db, "users", userId);
        const newFields = { uTags: [...oldTags, ...Array] };
        await updateDoc(userDoc, newFields);
        console.log("Firebase Tags Updated ... (From UserTags.js)");
      } catch (error) {
        console.log("Failed To Update User Tags");
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
        <h2>Add New Tags</h2>
        <form className={classes.editProfileForm} onSubmit={updateTags}>
          <div>
            <input
              type="text"
              placeholder="Enter Comma Saprated Tags (HTML,CSS,JavaScript)"
            />
          </div>
          <br />
          <div style={{ textAlign: "center" }}>
            <Button text="Add New Tags" />
          </div>
        </form>
      </Card>
    </div>
  );
}
export default UpdateTags;
