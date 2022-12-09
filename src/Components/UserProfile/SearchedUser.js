import classes from "./UserProfile.module.css";
import Button from "../UI/Button/Button";
function SearchedUser(props) {
  const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");
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
          {props.sTags.map((tag) => {
            return (
              <span className={classes.tags} key={Math.random()}>
                {tag}
              </span>
            );
          })}
        </div>
        <br />
        {storedUserLoggedInInformation === props.sEmail && (
          <span
            className={classes.tags}
            onClick={props.UpdateTags}
            style={{ cursor: "pointer", fontWeight: "900" }}
          >
            Add Tag
          </span>
        )}
      </div>
    </div>
  );
}
export default SearchedUser;
