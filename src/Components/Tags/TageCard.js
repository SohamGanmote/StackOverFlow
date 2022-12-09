import classes from "./TageCard.module.css";
function TageCard(props) {
  const tages1 = [
    {
      tag: "JavaScript",
      info: "For questions regarding programming in ECMAScript (JavaScript/JS) and its various dialects/implementations (excluding ActionScript). Please include all relevant tags on your question;",
    },
    {
      tag: "C#",
      info: "C# (pronounced 'see sharp') is a high level, statically typed, multi-paradigm programming language developed by Microsoft",
    },
    {
      tag: "Python",
      info: "Python is a multi-paradigm, dynamically typed, multipurpose programming language. It is designed to be quick to learn, understand, and use, and enforces a clean and uniform syntax.",
    },
    {
      tag: "Java",
      info: "Java is a high-level object oriented programming language. Use this tag when you're having problems using or understanding the language itself.",
    },
  ];
  const tages2 = [
    {
      tag: "PHP",
      info: "PHP is a widely used, open source, general-purpose, multi-paradigm, dynamically typed and interpreted scripting language originally designed for server-side web development",
    },
    {
      tag: "HTML",
      info: "HTML (HyperText Markup Language) is the markup language for creating web pages and other information to be displayed in a web browser.",
    },
    {
      tag: "Android",
      info: "Android is Google's mobile operating system, used for programming or developing digital devices (Smartphones, Tablets, Automobiles, TVs, Wear, Glass, IoT).",
    },
    {
      tag: "CSS",
      info: "CSS is a representation style sheet language used for describing the look and formatting of HTML, XML documents and SVG elements including colors, layout, fonts, and animations",
    },
  ];
  const tages3 = [
    {
      tag: "ReactJS",
      info: "React is a JavaScript library for building user interfaces. It uses a declarative, component-based paradigm and aims to be both efficient and flexible.",
    },
    {
      tag: "nodeJS",
      info: "Node.js is an event-based, non-blocking, asynchronous I/O runtime that uses Google's V8 JavaScript engine and libuv library.",
    },
  ];
  return (
    <>
      <div className={classes.TageCard}>
        {tages1.map(function (tag) {
          return (
            <div className={classes.card} key={tag.tag}>
              <h4>{tag.tag}</h4>
              <p>{tag.info}</p>
            </div>
          );
        })}
      </div>
      <div className={classes.TageCard}>
        {tages2.map(function (tag) {
          return (
            <div className={classes.card} key={tag.tag}>
              <h4>{tag.tag}</h4>
              <p>{tag.info}</p>
            </div>
          );
        })}
      </div>
      <div className={classes.TageCard}>
        {tages3.map(function (tag) {
          return (
            <div className={classes.card} key={tag.tag}>
              <h4>{tag.tag}</h4>
              <p>{tag.info}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default TageCard;
