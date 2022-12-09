import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";
import Button from "../UI/Button/Button";
import classes from "./DisplayQuetions.module.css";
function DisplayQuetions(props) {
  localStorage.setItem("currentQuetion", props.quetion);
  const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");
  async function deleteQuetion() {
    const quetionDoc = doc(db, "ask_quetions", props.qID);
    await deleteDoc(quetionDoc);
    window.location.reload();
  }
  return (
    <div className={classes.detailed}>
      <h1>{props.quetion}</h1>
      <br />
      <hr />
      <br />
      <div>{props.code}</div>
      <div className={classes.tagsDiv}>
        {props.tags.map((tag) => (
          <span className={classes.tag} key={Math.random()}>
            {tag}
          </span>
        ))}
      </div>
      <h3>Asked By : {props.askedby}</h3>
      <br />
      <hr />
      <h2>Answers</h2>
      {props.answer.map((ans) => (
        <div className={classes.usersAnswer} key={Math.random()}>
          <p>{ans}</p>
        </div>
      ))}
      <Button
        text="Add Answer"
        style={{ width: "120px" }}
        onClick={props.addans}
      />
      {props.askedby === storedUserLoggedInInformation && (
        <button className={classes.deleteBTN} onClick={deleteQuetion}>
          Delete
        </button>
      )}
    </div>
  );
}
export default DisplayQuetions;
