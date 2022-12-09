import Blog from "../Blog/Blog";
import classes from "./Questions.module.css";
import QuetionsFormater from "../Home/QuetionsFormater";
function Questions(props) {
  function askQuetion() {
    const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");
    if (storedUserLoggedInInformation !== "") {
      props.askQuestion();
    } else {
      props.login();
    }
  }
  return (
    <div className={classes.flex}>
      <div className={classes.Questions}>
        <div className={classes.header}>
          <h1 style={{ fontWeight: "500" }}>All Questions</h1>
          <button className={classes.btn} onClick={askQuetion}>
            Ask Question
          </button>
        </div>
        <QuetionsFormater
          quetions={props.all_Quetions}
          setClickedQuetion={props.clickedQueion}
        />
      </div>
      <div className={classes.blog}>
        <Blog />
      </div>
    </div>
  );
}
export default Questions;
