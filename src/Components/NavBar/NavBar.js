import { useEffect, useState } from "react";
import classes from "./NavBar.module.css";
import SideBar from "./SideBar";
function NavBar(props) {
  const [URL, setURL] = useState("");
  const [searchQuerry, setSearchQuerry] = useState("");
  const [name, setName] = useState();
  const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");
  useEffect(
    function () {
      props.UserDatabase.map((findUser) => {
        if (findUser.uEmail === storedUserLoggedInInformation) {
          setName(findUser.uName);
        }
        return 0;
      });
    },
    [props.UserDatabase, storedUserLoggedInInformation]
  );
  function hasWhiteSpace(s) {
    return s.indexOf(" ") >= 0;
  }
  function buildURL(e) {
    setSearchQuerry(e.target.value);
  }
  function resetValue(e) {
    setSearchQuerry("");
  }
  useEffect(
    function () {
      if (hasWhiteSpace(searchQuerry)) {
        setSearchQuerry(searchQuerry.split(" ").join("+"));
        setURL("https://stackoverflow.com/search?q=" + searchQuerry);
      } else {
        setURL("https://stackoverflow.com/questions/tagged/" + searchQuerry);
      }
    },
    [searchQuerry]
  );
  return (
    <>
      <div className={classes.header}>
        <div className={classes.nav}>
          <img
            src="https://stackoverflow.design/assets/img/logos/so/logo-stackoverflow.png"
            alt="Logo"
            onClick={props.home}
          />
          <a
            href="https://stackoverflow.co/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className={classes.navBtn}>About</button>
          </a>
          <button className={classes.navBtn}>Products</button>
          <a
            href="https://stackoverflow.co/teams/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className={classes.navBtn}>For Teams</button>
          </a>
          <form action={URL} target="_blank" onSubmit={resetValue}>
            <input
              type="text"
              placeholder="🔍 Search..."
              value={searchQuerry}
              onChange={buildURL}
            />
          </form>
          {props.userStatus && (
            <button className={classes.profile} onClick={props.openUser}>
              <img
                src={`https://avatars.dicebear.com/api/bottts/${name}.svg`}
                alt="user"
                className={classes.profilePicture}
              />
            </button>
          )}
          <button
            className={classes.login}
            onClick={props.userStatus ? props.logout : props.login}
          >
            {props.userStatus ? "Log out" : "Log in"}
          </button>
        </div>
      </div>
      <div className={classes.side}>
        {props.displaysidebar && (
          <SideBar sideValue={props.sidevalue} relode={props.relode} />
        )}
      </div>
    </>
  );
}
export default NavBar;
