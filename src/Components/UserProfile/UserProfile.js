import classes from "./UserProfile.module.css";
import Button from "../UI/Button/Button";
import { useEffect, useState } from "react";
import { db } from "../../firebase";
import { updateDoc, doc } from "firebase/firestore";
function UserProfile(props) {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [aboutMe, setAboutMe] = useState();
  const [link, setLink] = useState("");
  const [tags, setTags] = useState([]);
  const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");
  const [userId, setUserId] = useState();
  useEffect(
    function () {
      props.UserDatabase.map((findUser) => {
        if (findUser.uEmail === storedUserLoggedInInformation) {
          setName(findUser.uName);
          setEmail(findUser.uEmail);
          setAboutMe(findUser.uBio);
          setLink(findUser.uLink);
          setTags(findUser.uTags);
          setUserId(findUser.id);
        }
        return 0;
      });
    },
    [props.UserDatabase, storedUserLoggedInInformation]
  );
  async function removeTags() {
    try {
      const userDoc = doc(db, "users", userId);
      const newFields = { uTags: [] };
      await updateDoc(userDoc, newFields);
      console.log("Firebase Tags Removed ... (From UserProfile.js)");
    } catch (error) {
      console.log("Failed To Remove User Tags");
    }
    window.location.reload();
  }
  return (
    <div className={classes.profile}>
      <div className={classes.profileEditAndPhoto}>
        <p className={classes.profilePhoto}>
          <img
            src={`https://avatars.dicebear.com/api/bottts/${name}.svg`}
            alt="user"
          />
        </p>
        <div className={classes.profileInfo}>
          <p>Name : {name}</p>
          <p>Email : {email}</p>
          <Button text="Edit Profile" onClick={props.UpdateProfile} />
        </div>
      </div>
      <hr />
      <div>
        <h2>About Me</h2>
        <p>{aboutMe}</p>
      </div>
      <br />
      <div>
        <h2>Connect With Me</h2>
        {link === "" ? (
          <Button
            text="Add Link"
            style={{ width: "100px" }}
            onClick={props.UpdateLink}
          />
        ) : (
          <>
            <a href={link} target="_blank" rel="noopener noreferrer">
              <Button
                text="Contact"
                style={{ width: "100px" }}
                className={link.includes("instagram") && classes.instagramLink}
              />
            </a>
            <button className={classes.editBtn} onClick={props.UpdateLink}>
              Edit Link
            </button>
          </>
        )}
      </div>
      <br />
      <div>
        <h2>My Tech Stack</h2>
        <div style={{ marginTop: "20px" }} className={classes.responsiveTags}>
          {tags.map((tag) => {
            return (
              <span className={classes.tags} key={Math.random()}>
                {tag}
              </span>
            );
          })}
        </div>
        <br />
        <span
          className={classes.tags}
          onClick={props.UpdateTags}
          style={{ cursor: "pointer", fontWeight: "900" }}
        >
          Add Tags
        </span>
        {tags.length !== 0 && (
          <span
            className={classes.tags}
            onClick={removeTags}
            style={{ cursor: "pointer", fontWeight: "900" }}
          >
            Remove Tags
          </span>
        )}
      </div>
    </div>
  );
}
export default UserProfile;
