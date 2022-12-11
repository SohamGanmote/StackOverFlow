import { useEffect, useState } from "react";
import classes from "./ResponsiveNav.module.css";
import ResponsiveSideBar from "./ResponsiveSideBar";
function ResponsiveNav(props) {
  const [displayInfo, setDisplayInfo] = useState(false);
  const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");
  const [name, setName] = useState();
  let loginInforamtion = (
    <>
      {storedUserLoggedInInformation && (
        <button className={classes.profile} onClick={props.openUser}>
          <img
            src={`https://avatars.dicebear.com/api/bottts/${name}.svg`}
            alt="user"
            className={classes.profilePicture}
            onClick={() => {
              setDisplayInfo(false);
            }}
          />
        </button>
      )}
      <br />
      <button
        className={classes.login}
        onClick={
          storedUserLoggedInInformation !== "" ? props.logout : props.login
        }
      >
        {storedUserLoggedInInformation !== "" ? "Log out" : "Log in"}
      </button>
    </>
  );
  let sideMenuInformation = (
    <ResponsiveSideBar
      sideValue={props.sidevalue}
      relode={props.relode}
      navClose={setDisplayInfo}
    />
  );
  const [navDisplay, setNavDisplay] = useState(loginInforamtion);
  useEffect(
    function () {
      if (storedUserLoggedInInformation) {
        props.UserDatabase.map((findUser) => {
          if (findUser.uEmail === storedUserLoggedInInformation) {
            setName(findUser.uName);
          }
          return 0;
        });
      } else {
        localStorage.setItem("isLoggedIn", "");
      }
    },
    [props.UserDatabase, storedUserLoggedInInformation]
  );

  return (
    <>
      <div className={classes.header}>
        <div className={classes.nav}>
          <div className={classes.resPNav}>
            <img
              src="https://stackoverflow.design/assets/img/logos/so/logo-stackoverflow.png"
              alt="Logo"
              onClick={() => {
                setDisplayInfo(!displayInfo);
                setNavDisplay(loginInforamtion);
              }}
            />
            <button className={classes.menuBTN}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyZo9TS_4u1y5QDE6E8ytjploQz4TT3UAE4FPOoJPxy-sEHF-rYnIbMLJafvpYwaBKsHk&usqp=CAU"
                alt="menu"
                onClick={() => {
                  setDisplayInfo(!displayInfo);
                  setNavDisplay(sideMenuInformation);
                }}
              />
            </button>
          </div>
          <div style={{ display: displayInfo ? "block" : "none" }}>
            {navDisplay}
          </div>
        </div>
      </div>
    </>
  );
}
export default ResponsiveNav;
