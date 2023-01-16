import { useEffect, useState } from "react";
import classes from "./QuetionsFormater.module.css";
function QuetionsFormater(props) {
  const [state, setState] = useState(props.quetions);
  function quetionsClicked(e) {
    const clickedQuetion = e.target.innerText;
    props.quetions.map((e) => {
      if (clickedQuetion === e.Q_title) {
        props.setClickedQuetion(
          e.Q_title,
          e.Q_body,
          e.Q_tags,
          e.Q_user,
          e.Q_Answers,
          e.id
        );
      }
      return 0;
    });
    return 0;
  }
  return (
    <div className={classes.Quetions}>
      {state.map((que) => (
        <div key={que.Q_title} className={classes.eachQuetion}>
          <h3 onClick={quetionsClicked}>{que.Q_title}</h3>
          <p style={{ marginTop: "10px" }} className={classes.eachTags}>
            Tags :{" "}
            {que.Q_tags.map((tag) => (
              <span className={classes.tags} key={Math.random()}>
                {tag}
              </span>
            ))}
          </p>
        </div>
      ))}

      {/* <div className={classes.eachQuetion}>
        <h3 onClick={quetionsClicked}>Some Quetion Asked By user</h3>
        <p style={{ marginTop: "10px" }}>
          Tags : <span className={classes.tags}>HTML</span>{" "}
          <span className={classes.tags}>CSS</span>
        </p>
      </div> */}
    </div>
  );
}
export default QuetionsFormater;
