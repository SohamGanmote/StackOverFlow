import NavBar from "./Components/NavBar/NavBar";
import LogIn from "./Components/LogIn/LogIn";
import { useEffect, useState } from "react";
import SignUp from "./Components/LogIn/SignUp";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";
import HomePage from "./Components/Home/HomePage";
import Questions from "./Components/Questions/Questions";
import Tags from "./Components/Tags/Tags";
import Users from "./Components/Users/Users";
import AskQuestion from "./Components/Questions/Ask_Question";
import UserProfile from "./Components/UserProfile/UserProfile";
import SearchedUser from "./Components/UserProfile/SearchedUser";
import UpdateProfile from "./Components/UpdateUserProfile/UpdateProfile";
import UserLinks from "./Components/UpdateUserLinks/UserLinks";
import UpdateTags from "./Components/UpdateUserTags/UpdateTags";
import DisplayQuetions from "./Components/DisplayQuetions/DisplayQuetions";
import WriteAns from "./Components/WriteAns/WriteAns";
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";
function App() {
  const [user, setUser] = useState([]);
  const [quetions, setQuetions] = useState([]);
  const usersCollectionRef = collection(db, "users");
  const usersCollectionRef_For_Quetion = collection(db, "ask_quetions");
  const [displaySideBar, setDisplaySideBar] = useState(true);
  const [logedin, setLogedin] = useState(false);
  const [sidebarValue, setSidebarValue] = useState(1);
  const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");
  useEffect(function () {
    // This Code To Fetch All The Users Information
    async function getUsers() {
      try {
        const data = await getDocs(usersCollectionRef);
        setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        console.log("Firebase Request Send For The Users... (From App.js)");
      } catch (error) {
        console.log("Firebase Error");
      }
    }

    // This Code is To Feach All The Quetion and Answers
    async function getQuetionAns() {
      try {
        const data = await getDocs(usersCollectionRef_For_Quetion);
        setQuetions(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        console.log("Firebase Request Send For The Quetion... (From App.js)");
      } catch (error) {
        console.log("Firebase Error");
      }
    }

    getQuetionAns();
    getUsers();
  }, []);
  const [page, setPage] = useState(
    <HomePage
      login={setLoginPage}
      askQuestion={setAsk_Quetion}
      all_Quetions={quetions}
      clickedQueion={setClickedQuetion}
    />
  );
  const refreshPage = () => {
    window.location.reload();
  };
  function getSideBarValue(num) {
    setSidebarValue(num);
  }
  function setHomePage() {
    setPage(
      <HomePage
        login={setLoginPage}
        askQuestion={setAsk_Quetion}
        all_Quetions={quetions}
        clickedQueion={setClickedQuetion}
      />
    );
    setDisplaySideBar(true);
    setSidebarValue(1);
    refreshPage();
  }
  function setLoginPage() {
    setPage(
      <LogIn
        signup={setSignUpPage}
        loginSucessFull={setHomePage}
        loginStatus={setLogedin}
      />
    );
    setDisplaySideBar(false);
  }
  function setSignUpPage() {
    setPage(
      <SignUp
        login={setLoginPage}
        loginSucessFull={setHomePage}
        loginStatus={setLogedin}
      />
    );
    setDisplaySideBar(false);
  }
  async function setLogout() {
    refreshPage();
    await signOut(auth);
    setLogedin(false);
    localStorage.setItem("isLoggedIn", "");
    setDisplaySideBar(true);
  }
  function setAsk_Quetion() {
    setPage(<AskQuestion home={setHomePage} />);
    setDisplaySideBar(false);
  }
  function setUserProfilePage() {
    setDisplaySideBar(true);
    setSidebarValue();
    setPage(
      <UserProfile
        UserDatabase={user}
        UpdateProfile={setUpdateUserProfile}
        UpdateLink={setUpdateLink}
        UpdateTags={setUpdateTags}
      />
    );
  }
  function setSearchedUserProfile(
    searchName,
    searchEmail,
    searchBio,
    searchLink,
    searchTags
  ) {
    setSidebarValue();
    setPage(
      <SearchedUser
        sName={searchName}
        sEmail={searchEmail}
        sBio={searchBio}
        sLink={searchLink}
        sTags={searchTags}
        UpdateProfile={setUpdateUserProfile}
        UpdateLink={setUpdateLink}
        UpdateTags={setUpdateTags}
      />
    );
  }
  function setClickedQuetion(title, body, tages, userName, ans, id) {
    setSidebarValue();
    setPage(
      <DisplayQuetions
        quetion={title}
        code={body}
        tags={tages} //Array
        askedby={userName}
        answer={ans} //Array
        addans={setAddYourAns}
        qID={id}
      />
    );
  }
  function setUpdateUserProfile() {
    setPage(<UpdateProfile UserDatabase={user} home={setHomePage} />);
    setDisplaySideBar(false);
  }
  function setUpdateLink() {
    setPage(<UserLinks UserDatabase={user} home={setHomePage} />);
    setDisplaySideBar(false);
  }
  function setUpdateTags() {
    setPage(<UpdateTags UserDatabase={user} home={setHomePage} />);
    setDisplaySideBar(false);
  }
  function setAddYourAns() {
    if (storedUserLoggedInInformation !== "") {
      setPage(<WriteAns all_Quetions={quetions} home={setHomePage} />);
      setDisplaySideBar(false);
    } else {
      setLoginPage();
    }
  }
  useEffect(
    function () {
      if (storedUserLoggedInInformation !== "") {
        setLogedin(true);
      }
      if (sidebarValue === 1) {
        setPage(
          <HomePage
            login={setLoginPage}
            askQuestion={setAsk_Quetion}
            all_Quetions={quetions}
            clickedQueion={setClickedQuetion}
          />
        );
      } else if (sidebarValue === 2) {
        setPage(
          <Questions
            login={setLoginPage}
            askQuestion={setAsk_Quetion}
            all_Quetions={quetions}
            clickedQueion={setClickedQuetion}
          />
        );
      } else if (sidebarValue === 3) {
        setPage(<Tags />);
      } else if (sidebarValue === 4) {
        setPage(
          <Users searchedUser={setSearchedUserProfile} UserDatabase={user} />
        );
      }
    },
    [storedUserLoggedInInformation, sidebarValue]
  );
  return (
    <>
      <NavBar
        login={setLoginPage}
        logout={setLogout}
        displaysidebar={displaySideBar}
        userStatus={logedin}
        home={setHomePage}
        sidevalue={getSideBarValue}
        relode={sidebarValue}
        openUser={setUserProfilePage}
        UserDatabase={user}
      />
      {page}
    </>
  );
}

export default App;
