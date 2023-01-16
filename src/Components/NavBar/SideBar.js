import { useEffect, useState } from "react";
import classes from "./SideBar.module.css";
function SideBar(props) {
  const [navNum, setNavNum] = useState(props.relode);
  function Home() {
    setNavNum(1);
    props.sideValue(1);
  }
  function Quetions() {
    setNavNum(2);
    props.sideValue(2);
  }
  function Tags() {
    setNavNum(3);
    props.sideValue(3);
  }
  function Users() {
    setNavNum(4);
    props.sideValue(4);
  }
  useEffect(function () {
    setTimeout(function () {
      setNavNum(2);
      props.sideValue(2);
    }, 2000);
  }, []);
  return (
    <div className={classes.sidebar}>
      <button
        className={navNum === 1 ? classes.selected : classes.sidButton}
        style={{ textAlign: "left" }}
        onClick={Home}
      >
        Home
      </button>
      <p>PUBLIC</p>
      <button
        className={navNum === 2 ? classes.selected : classes.sidButton}
        onClick={Quetions}
      >
        &#127758; Questions
      </button>
      <br />
      <button
        className={navNum === 3 ? classes.selected : classes.sidButton}
        onClick={Tags}
      >
        Tags
      </button>
      <br />
      <button
        className={navNum === 4 ? classes.selected : classes.sidButton}
        onClick={Users}
      >
        Users
      </button>
    </div>
  );
}
export default SideBar;
