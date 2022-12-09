import classes from "./Ask_Question.module.css";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";
function AskQuestion(props) {
  const QuetionCollectionRef = collection(db, "ask_quetions");
  async function addNewQuestion(e) {
    e.preventDefault();
    const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");
    const title = e.target[0].value;
    const body = e.target[1].value;
    const Array = e.target[2].value;
    const tags = Array.split(" ");
    const user = storedUserLoggedInInformation;
    if (title !== "" && body !== "" && tags !== "") {
      await addDoc(QuetionCollectionRef, {
        Q_title: title,
        Q_body: body,
        Q_tags: tags,
        Q_user: user,
        Q_Answers: [],
      });
    }
    props.home();
  }
  return (
    <div className={classes.askQuestion}>
      <Card>
        <form className={classes.addNewQuestion} onSubmit={addNewQuestion}>
          <div>
            <h3>Title</h3>
            <label htmlFor="title">
              Be specific and imagine you’re asking a question to another person
            </label>
            <br />
            <input
              type="text"
              placeholder="e.g. How To Center A Div in HTML, CSS"
              id="title"
            />
          </div>
          <br />
          <div>
            <div>
              <h3>Body</h3>
              <label htmlFor="body">
                Include all the information someone would need to answer your
                question
              </label>
              <br />
              <textarea
                rows="10"
                cols="122"
                style={{ padding: "10px" }}
                placeholder="#include<stdio.h>
                    void main(){
                    .....int a = 10;
                    .....int b = 20;
                    .....int c = a + b;
                    .....printf(`Sum : `+c);
                }"
              />
            </div>
          </div>
          <br />
          <div>
            <div>
              <h3>Tags</h3>
              <label htmlFor="Tags">
                Add at least one tag to your question
              </label>
              <br />
              <input
                type="text"
                id="Tags"
                placeholder="e.g. JavaScript, Python, Java, etc"
              />
            </div>
          </div>
          <Button text="Review Question" className={classes.btn} />
        </form>
      </Card>
    </div>
  );
}
export default AskQuestion;
