import classes from "./Blog.module.css";
function Blog() {
  return (
    <>
      <section className={classes.card}>
        <h4>The Overflow Blog</h4>
        <ul>
          <li>
            Observability is key to the future of software (and your DevOps
            career)
          </li>
          <li>Podcast 374: How valuable is your screen name?</li>
        </ul>
      </section>
      <section className={classes.card}>
        <h4>Programing Quotes</h4>
        <ul>
          <li>Review queue workflows - Final release....</li>
          <li>
            Please welcome Valued Associates: #958 - V2Blast #959 - SpencerG
          </li>
          <li>
            Outdated Answers: accepted answer is now unpinned on Stack Overflow
          </li>
        </ul>
      </section>
      <section className={classes.card}>
        <h4>Motivation For Programmer</h4>
        <ul>
          <li>
            Why was this spam flag declined, yet the question marked as spam?
          </li>
          <li>
            What is the best course of action when a user has high enough rep
            to...
          </li>
          <li>Is a link to the "How to ask" help page a useful comment?</li>
        </ul>
      </section>
      <section className={classes.tags}>
        <h4>Watched Tags</h4>
        <div>
          <span>JavaScript</span>
          <span>C</span>
          <span>C++</span>
          <span>Python</span>
          <span>Java</span> <br />
          <span>Go</span>
          <span>Kotlin</span>
          <span>C#</span>
          <span>SQL</span>
          <span>COBOL</span>
          <span>Dart</span> <br />
          <span>React JS</span>
          <span>Unity</span>
          <span>NEXT JS</span>
          <span>Perl</span>
        </div>
      </section>
    </>
  );
}
export default Blog;
