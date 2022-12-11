import { useEffect, useState } from "react";
import classes from "./ResponsiveSideBar.module.css";
function ResponsiveSideBar(props) {
  const [navNum, setNavNum] = useState(props.relode);
  function Home() {
    setNavNum(1);
    props.sideValue(1);
  }
  function Quetions() {
    setNavNum(2);
    props.sideValue(2);
    props.navClose(false);
  }
  function Tags() {
    setNavNum(3);
    props.sideValue(3);
    props.navClose(false);
  }
  function Users() {
    setNavNum(4);
    props.sideValue(4);
    props.navClose(false);
  }
  useEffect(function () {
    setTimeout(function () {
      setNavNum(2);
      props.sideValue(2);
    }, 1000);
    setTimeout(function () {
      setNavNum(1);
      props.sideValue(1);
    }, 1500);
  }, []);
  return (
    <div className={classes.sidebar}>
      <button onClick={Quetions}>🌍 Quetions</button>
      <button onClick={Tags}>Tags</button>
      <button onClick={Users}>Users</button>
    </div>
  );
}
export default ResponsiveSideBar;
