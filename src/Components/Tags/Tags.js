import TageCard from "./TageCard";
import classes from "./Tags.module.css";
function Tags(props) {
  return (
    <div className={classes.Tags}>
      <h1 style={{ fontWeight: "500" }}>Tags</h1>
      <p>
        A tag is a keyword or label that categorizes your question with other,
        similar questions.
        <br /> Using the right tags makes it easier for others to find and
        answer your question.
      </p>
      <TageCard />
    </div>
  );
}
export default Tags;
