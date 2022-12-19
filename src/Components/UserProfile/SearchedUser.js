import classes from "./UserProfile.module.css";
import Button from "../UI/Button/Button";
import { useEffect, useState } from "react";
import { db } from "../../firebase";
import { updateDoc, doc } from "firebase/firestore";
function SearchedUser(props) {
  const [userId, setUserId] = useState();
  const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");
  useEffect(
    function () {
      props.UserDatabase.map((findUser) => {
        if (findUser.uEmail === storedUserLoggedInInformation) {
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
            src={`https://avatars.dicebear.com/api/bottts/${props.sName}.svg`}
            alt="user"
          />
        </p>
        <div
          className={classes.profileInfo}
          style={{
            marginTop:
              storedUserLoggedInInformation === props.sEmail ? "23px" : "45px",
          }}
        >
          <p>Name : {props.sName}</p>
          <p>Email : {props.sEmail}</p>
          {storedUserLoggedInInformation === props.sEmail && (
            <Button text="Edit Profile" onClick={props.UpdateProfile} />
          )}
        </div>
      </div>
      <hr />
      <div>
        <h2>About Me</h2>
        <p>{props.sBio}</p>
      </div>
      <br />
      <div>
        <h2>Connect With Me</h2>
        {props.sLink === "" ? (
          <p>No Link Added By User</p>
        ) : (
          <a href={props.sLink} target="_blank" rel="noopener noreferrer">
            <Button
              text="Contact"
              style={{ width: "100px" }}
              className={
                props.sLink.includes("instagram") && classes.instagramLink
              }
            />
          </a>
        )}
        {storedUserLoggedInInformation === props.sEmail &&
          props.sLink !== "" && (
            <button className={classes.editBtn} onClick={props.UpdateLink}>
              Edit Link
            </button>
          )}
      </div>
      <br />
      <div>
        <h2>My Tech Stack</h2>
        <div style={{ marginTop: "20px" }}>
          {props.sTags.length === 0 ? (
            <p>No Tags Are Added By User</p>
          ) : (
            props.sTags.map((tag) => {
              return (
                <span className={classes.tags} key={Math.random()}>
                  {tag}
                </span>
              );
            })
          )}
        </div>
        <br />
        {storedUserLoggedInInformation === props.sEmail && (
          <>
            <span
              className={classes.tags}
              onClick={props.UpdateTags}
              style={{ cursor: "pointer", fontWeight: "900" }}
            >
              Add Tag
            </span>
            {props.sTags.length !== 0 && (
              <span
                className={classes.tags}
                onClick={removeTags}
                style={{ cursor: "pointer", fontWeight: "900" }}
              >
                Remove Tags
              </span>
            )}
          </>
        )}
      </div>
    </div>
  );
}
export default SearchedUser;
