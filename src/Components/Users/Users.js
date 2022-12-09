import classes from "./Users.module.css";
function Users(props) {
  function openUser(e) {
    let useNameTemp = e.target.innerText;
    props.UserDatabase.map((clickedUser) => {
      if (clickedUser.uName === useNameTemp) {
        props.searchedUser(
          clickedUser.uName,
          clickedUser.uEmail,
          clickedUser.uBio,
          clickedUser.uLink,
          clickedUser.uTags
        );
      }
      return 0;
    });
  }
  return (
    <div className={classes.Users}>
      <h1 style={{ fontWeight: "500" }}>Users</h1>
      <p style={{ marginTop: "10px" }}>Here are some users of the service</p>
      <div className={classes.userDiv}>
        {props.UserDatabase.map((eachUser) => {
          return (
            <div className={classes.user} key={Math.random()}>
              <span className={classes.userProfile}>
                <img
                  src={`https://avatars.dicebear.com/api/bottts/${eachUser.uName}.svg`}
                  alt="user"
                />
              </span>
              <span onClick={openUser}>{eachUser.uName}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Users;
