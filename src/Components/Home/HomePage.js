import Blog from "../Blog/Blog";
import classes from "./HomePage.module.css";
import QuetionsFormater from "./QuetionsFormater";
function HomePage(props) {
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
      <div className={classes.homePage}>
        <div className={classes.header}>
          <h1 style={{ fontWeight: "500" }}>Top Questions</h1>
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
export default HomePage;
