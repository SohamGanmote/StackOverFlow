import classes from "./WriteAns.module.css";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import { db } from "../../firebase";
import { updateDoc, doc } from "firebase/firestore";
import { useEffect, useState } from "react";
function WriteAns(props) {
  const storedCurrentQuetionInformation =
    localStorage.getItem("currentQuetion");
  const [quetionID, setQuetionID] = useState();
  const [oldAns, setOldAns] = useState();
  useEffect(
    function () {
      props.all_Quetions.map((que) => {
        if (que.Q_title === storedCurrentQuetionInformation) {
          setQuetionID(que.id);
          setOldAns(que.Q_Answers);
        }
        return 0;
      });
    },
    [props.all_Quetions, storedCurrentQuetionInformation]
  );
  async function postAns(e) {
    e.preventDefault();
    let text = e.target[0].value;
    if (text !== "") {
      try {
        const userDoc = doc(db, "ask_quetions", quetionID);
        const newFields = { Q_Answers: [...oldAns, e.target[0].value] };
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
        <h2>{storedCurrentQuetionInformation}</h2>
        <form className={classes.editProfileForm} onSubmit={postAns}>
          <div>
            <textarea type="text" name="w3review" rows="10" cols="105" />
          </div>
          <br />
          <div style={{ textAlign: "center" }}>
            <Button text="Post Answer" />
          </div>
        </form>
      </Card>
    </div>
  );
}
export default WriteAns;
