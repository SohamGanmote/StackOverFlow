// import { useEffect, useState } from "react";
import classes from "./Blog.module.css";
function Blog() {
  // const [one, setOne] = useState("");
  // const [two, setTwo] = useState("");
  // const [three, setThree] = useState("");
  // const [four, setFour] = useState("");
  // const [five, setFive] = useState("");
  // const [six, setSix] = useState("");

  // const [link1, setLink1] = useState("");
  // const [link2, setLink2] = useState("");
  // const [link3, setLink3] = useState("");
  // const [link4, setLink4] = useState("");
  // const [link5, setLink5] = useState("");
  // const [link6, setLink6] = useState("");

  // let num1 = Math.ceil(Math.random() * 23);
  // let num2 = Math.ceil(Math.random() * 23);
  // let num3 = Math.ceil(Math.random() * 23);
  // let num4 = Math.ceil(Math.random() * 23);
  // let num5 = Math.ceil(Math.random() * 23);
  // let num6 = Math.ceil(Math.random() * 23);

  // useEffect(
  //   function () {
  //     async function getBlog() {
  //       try {
  //         const response = await fetch(
  //           "https://api.stackexchange.com/2.3/articles?order=desc&sort=activity&site=stackoverflow"
  //         );
  //         const data = await response.json();
  //         setOne(data.items[num1].title);
  //         setLink1(data.items[num1].link);

  //         setTwo(data.items[num2].title);
  //         setLink2(data.items[num2].link);

  //         setThree(data.items[num3].title);
  //         setLink3(data.items[num3].link);

  //         setFour(data.items[num4].title);
  //         setLink4(data.items[num4].link);

  //         setFive(data.items[num5].title);
  //         setLink5(data.items[num5].link);

  //         setSix(data.items[num6].title);
  //         setLink6(data.items[num6].link);

  //         console.log(data.items[0].link);
  //       } catch (error) {
  //         console.log("Error on Blog");
  //       }
  //     }
  //     getBlog();
  //   },
  //   [num1, num2, num3, num4, num5, num6]
  // );
  return (
    <>
      {/* <section className={classes.card}>
        <h4>The Overflow Blog</h4>
        <ul>
          <li>
            {one === "" ? (
              "Lodding..."
            ) : (
              <a href={link1} target="_blank" rel="noopener noreferrer">
                {one}
              </a>
            )}
          </li>
          <li>
            {two === "" ? (
              "Lodding..."
            ) : (
              <a href={link2} target="_blank" rel="noopener noreferrer">
                {two}
              </a>
            )}
          </li>
        </ul>
      </section>
      <section className={classes.card}>
        <h4>Programing Quotes</h4>
        <ul>
          <li>
            {three === "" ? (
              "Lodding..."
            ) : (
              <a href={link3} target="_blank" rel="noopener noreferrer">
                {three}
              </a>
            )}
          </li>
          <li>
            {four === "" ? (
              "Lodding..."
            ) : (
              <a href={link4} target="_blank" rel="noopener noreferrer">
                {four}
              </a>
            )}
          </li>
        </ul>
      </section>
      <section className={classes.card}>
        <h4>Motivation For Programmer</h4>
        <ul>
          <li>
            {five === "" ? (
              "Lodding..."
            ) : (
              <a href={link5} target="_blank" rel="noopener noreferrer">
                {five}
              </a>
            )}
          </li>
          <li>
            {six === "" ? (
              "Lodding..."
            ) : (
              <a href={link6} target="_blank" rel="noopener noreferrer">
                {six}
              </a>
            )}
          </li>
        </ul>
      </section> */}
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
