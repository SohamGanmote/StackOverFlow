(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,t,s){e.exports={profile:"UserProfile_profile__13xqq",profileEditAndPhoto:"UserProfile_profileEditAndPhoto__1nE_p",btnFix:"UserProfile_btnFix__3TjfX",profilePhoto:"UserProfile_profilePhoto__3Xy6z",profileInfo:"UserProfile_profileInfo__1VAnH",editBtn:"UserProfile_editBtn__1HCm1",instagramLink:"UserProfile_instagramLink__A_UBe",tags:"UserProfile_tags__1DzTz"}},,,,,function(e,t,s){e.exports={signupBox:"SignUp_signupBox__Y-Y-W",infoBox:"SignUp_infoBox__3ifGm",passwordText:"SignUp_passwordText__3Jnun",signup:"SignUp_signup__hTZ9Q",chakeboxBox:"SignUp_chakeboxBox__2w9f5",endText:"SignUp_endText__1yNec",Login:"SignUp_Login__15Nkh",Error:"SignUp_Error__18WIc"}},function(e,t,s){e.exports={header:"NavBar_header__2NdS-",nav:"NavBar_nav__13DIT",navBtn:"NavBar_navBtn__1XfCF",login:"NavBar_login__3LwYP",profile:"NavBar_profile__1EpHu",side:"NavBar_side__SIoc1",profilePicture:"NavBar_profilePicture__2VZDu"}},function(e,t,s){e.exports={sidebar:"SideBar_sidebar___FO9j",sidButton:"SideBar_sidButton__1iTiG",selected:"SideBar_selected__3P4FD"}},,,,function(e,t,s){e.exports={TageCard:"TageCard_TageCard__1Zu_g",card:"TageCard_card__3zZ0q"}},,,function(e,t,s){e.exports={logo:"LogIn_logo__cKmbH",login:"LogIn_login__ve0Jo",SignUp:"LogIn_SignUp__2P164",LoginBody:"LogIn_LoginBody__D-JeC",Error:"LogIn_Error__12tdu"}},function(e,t,s){e.exports={homePage:"HomePage_homePage__3KZ6R",header:"HomePage_header__wPTRV",btn:"HomePage_btn__288Oq",flex:"HomePage_flex__3VkWA",blog:"HomePage_blog__1gCgy"}},function(e,t,s){e.exports={Questions:"Questions_Questions__2deMg",header:"Questions_header__h4KR8",btn:"Questions_btn__2JjRm",flex:"Questions_flex__1BBEj",blog:"Questions_blog__Fhd6R"}},function(e,t,s){e.exports={detailed:"DisplayQuetions_detailed__32XoL",tag:"DisplayQuetions_tag__1jdHg",tagsDiv:"DisplayQuetions_tagsDiv__2hyDZ",usersAnswer:"DisplayQuetions_usersAnswer__tqGPM",deleteBTN:"DisplayQuetions_deleteBTN__2CWMw"}},,function(e,t,s){e.exports={card:"Blog_card__3bI2y",tags:"Blog_tags__1jfrD"}},function(e,t,s){e.exports={Users:"Users_Users__aSvJv",userDiv:"Users_userDiv__1ZvzS",user:"Users_user__INtJ9",userProfile:"Users_userProfile__UFylE"}},function(e,t,s){e.exports={editProfile:"UpdateProfile_editProfile__3U0Ej",userProfile:"UpdateProfile_userProfile__1oZaH",currentProfile:"UpdateProfile_currentProfile__RTCbU",editProfileForm:"UpdateProfile_editProfileForm__1HGUv"}},function(e,t,s){e.exports={editProfile:"UserLinks_editProfile__sSEIs",userProfile:"UserLinks_userProfile__2W79C",currentProfile:"UserLinks_currentProfile__1tcwS",editProfileForm:"UserLinks_editProfileForm__2Nebq"}},function(e,t,s){e.exports={editProfile:"UpdateTags_editProfile__1Emkn",userProfile:"UpdateTags_userProfile__1bUDl",currentProfile:"UpdateTags_currentProfile__19NtH",editProfileForm:"UpdateTags_editProfileForm__2WBQD"}},,,,,function(e,t,s){e.exports={Quetions:"QuetionsFormater_Quetions__rO7N-",eachQuetion:"QuetionsFormater_eachQuetion__1QP2O",tags:"QuetionsFormater_tags__1WbMS"}},function(e,t,s){e.exports={askQuestion:"Ask_Question_askQuestion__3ZWC5",addNewQuestion:"Ask_Question_addNewQuestion__1LbQy",btn:"Ask_Question_btn__o1OIB"}},function(e,t,s){e.exports={editProfile:"WriteAns_editProfile__3q83L",userProfile:"WriteAns_userProfile__Rjozl",currentProfile:"WriteAns_currentProfile__1cksI",editProfileForm:"WriteAns_editProfileForm__1d5Rz"}},,,,function(e,t,s){e.exports={button:"Button_button__3jGvn"}},,function(e,t,s){e.exports={Tags:"Tags_Tags__1IjHr"}},,,,,,,,,function(e,t,s){},,function(e,t,s){"use strict";s.r(t);var a=s(49),n=s.n(a),r=(s(61),s(0)),c=s(26),i=s(2),o=s(10),l=s(11),j=s(22),d=s.n(j),u=s(23),b=s.n(u),h=s(1);var p=function(e){var t=Object(l.useState)(e.relode),s=Object(o.a)(t,2),a=s[0],n=s[1];return Object(l.useEffect)((function(){setTimeout((function(){n(2),e.sideValue(2)}),800),setTimeout((function(){n(1),e.sideValue(1)}),1e3)}),[]),Object(h.jsxs)("div",{className:b.a.sidebar,children:[Object(h.jsx)("button",{className:1===a?b.a.selected:b.a.sidButton,style:{textAlign:"left"},onClick:function(){n(1),e.sideValue(1)},children:"Home"}),Object(h.jsx)("p",{children:"PUBLIC"}),Object(h.jsx)("button",{className:2===a?b.a.selected:b.a.sidButton,onClick:function(){n(2),e.sideValue(2)},children:"\ud83c\udf0e Questions"}),Object(h.jsx)("br",{}),Object(h.jsx)("button",{className:3===a?b.a.selected:b.a.sidButton,onClick:function(){n(3),e.sideValue(3)},children:"Tags"}),Object(h.jsx)("br",{}),Object(h.jsx)("button",{className:4===a?b.a.selected:b.a.sidButton,onClick:function(){n(4),e.sideValue(4)},children:"Users"})]})};var O=function(e){var t=Object(l.useState)(""),s=Object(o.a)(t,2),a=s[0],n=s[1],r=Object(l.useState)(""),c=Object(o.a)(r,2),i=c[0],j=c[1],u=Object(l.useState)(),b=Object(o.a)(u,2),O=b[0],x=b[1],g=localStorage.getItem("isLoggedIn");return Object(l.useEffect)((function(){g?e.UserDatabase.map((function(e){return e.uEmail===g&&x(e.uName),0})):localStorage.setItem("isLoggedIn","")}),[e.UserDatabase,g]),Object(l.useEffect)((function(){i.indexOf(" ")>=0?(j(i.split(" ").join("+")),n("https://stackoverflow.com/search?q="+i)):n("https://stackoverflow.com/questions/tagged/"+i)}),[i]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{className:d.a.header,children:Object(h.jsxs)("div",{className:d.a.nav,children:[Object(h.jsx)("img",{src:"https://stackoverflow.design/assets/img/logos/so/logo-stackoverflow.png",alt:"Logo",onClick:e.home}),Object(h.jsx)("a",{href:"https://stackoverflow.co/",target:"_blank",rel:"noopener noreferrer",children:Object(h.jsx)("button",{className:d.a.navBtn,children:"About"})}),Object(h.jsx)("button",{className:d.a.navBtn,children:"Products"}),Object(h.jsx)("a",{href:"https://stackoverflow.co/teams/",target:"_blank",rel:"noopener noreferrer",children:Object(h.jsx)("button",{className:d.a.navBtn,children:"For Teams"})}),Object(h.jsx)("form",{action:a,target:"_blank",onSubmit:function(e){j("")},children:Object(h.jsx)("input",{type:"text",placeholder:"\ud83d\udd0d Search...",value:i,onChange:function(e){j(e.target.value)}})}),g&&Object(h.jsx)("button",{className:d.a.profile,onClick:e.openUser,children:Object(h.jsx)("img",{src:"https://avatars.dicebear.com/api/bottts/".concat(O,".svg"),alt:"user",className:d.a.profilePicture})}),Object(h.jsx)("button",{className:d.a.login,onClick:""!==g?e.logout:e.login,children:""!==g?"Log out":"Log in"})]})}),Object(h.jsx)("div",{className:d.a.side,children:e.displaysidebar&&Object(h.jsx)(p,{sideValue:e.sidevalue,relode:e.relode})})]})},x=s(30),g=s.n(x);var m=function(e){return Object(h.jsx)("div",{style:{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px",backgroundColor:"white"},className:e.className,children:e.children})},f=s(50),v=s.n(f);var _=function(e){return Object(h.jsx)("button",{onClick:e.onClick,className:e.className?e.className:v.a.button,type:e.type,style:e.style,children:e.text})},k=s(24),N=s(51),y=s(13),S=Object(N.a)({apiKey:"AIzaSyDQczahDJ-M5j3g9VZga2RISBJNk0FHb8k",authDomain:"stackoverflow-1e566.firebaseapp.com",projectId:"stackoverflow-1e566",storageBucket:"stackoverflow-1e566.appspot.com",messagingSenderId:"745269953612",appId:"1:745269953612:web:79e6942ef9a8ee402060e9"}),P=Object(y.f)(S),U=Object(k.b)();var w=function(e){var t,s=Object(l.useState)(""),a=Object(o.a)(s,2),n=a[0],c=a[1];function j(){return(j=Object(i.a)(Object(r.a)().mark((function t(s){var a,n;return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s.preventDefault(),a=s.target.children[0].children[2].value,n=s.target.children[1].children[3].value,console.log(a),console.log(n),t.prev=5,t.next=8,Object(k.c)(U,a,n);case 8:e.loginStatus(!0),localStorage.setItem("isLoggedIn",U.currentUser.email),e.loginSucessFull(),c(""),console.log("Firebase Request Send ... (From LogIn.js)"),t.next=19;break;case 15:t.prev=15,t.t0=t.catch(5),console.log("SomeThing Went Wrong"),c("Wrong Email Or Password");case 19:case"end":return t.stop()}}),t,null,[[5,15]])})))).apply(this,arguments)}return Object(h.jsxs)("section",{className:g.a.LoginBody,children:[Object(h.jsx)("img",{src:"https://stackoverflow.design/assets/img/logos/so/logo-stackoverflow.png",alt:"logo",className:g.a.logo}),Object(h.jsxs)(m,{className:g.a.login,children:[null===(t=U.currentUser)||void 0===t?void 0:t.email,Object(h.jsxs)("form",{onSubmit:function(e){return j.apply(this,arguments)},children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("label",{htmlFor:"Email",children:"Email"})," ",Object(h.jsx)("br",{}),Object(h.jsx)("input",{type:"text",id:"Email",required:!0})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("label",{htmlFor:"pass",children:"Password"})," ",Object(h.jsx)("span",{children:"Forgot Password?"}),Object(h.jsx)("br",{}),Object(h.jsx)("input",{type:"password",id:"pass",required:!0})]}),Object(h.jsx)(_,{text:"Log in"}),Object(h.jsx)("p",{className:g.a.Error,children:n})]})]}),Object(h.jsxs)("p",{className:g.a.SignUp,children:["Don\u2019t have an account? ",Object(h.jsx)("button",{onClick:e.signup,children:"Sign up"})]})]})},T=s(21),Q=s.n(T);var F=function(){return Object(h.jsxs)("div",{className:Q.a.infoBox,children:[Object(h.jsx)("h2",{children:"Join the Stack Overflow community"}),Object(h.jsx)("p",{children:"Get unstuck \u2014 ask a question"}),Object(h.jsx)("p",{children:"Unlock new privileges like voting and commenting"}),Object(h.jsx)("p",{children:"Save your favorite tags, filters, and jobs"}),Object(h.jsx)("p",{children:"Earn reputation and badges"}),Object(h.jsx)("p",{children:"Collaborate and share knowledge with a private group for"}),Object(h.jsx)("p",{children:"Get Stack Overflow for Teams free for up to 50 users."})]})};var L=function(e){var t,s=Object(l.useState)(""),a=Object(o.a)(s,2),n=a[0],c=a[1],j=Object(l.useState)(""),d=Object(o.a)(j,2),u=d[0],b=d[1],p=Object(l.useState)(),O=Object(o.a)(p,2),x=O[0],g=O[1],f=Object(y.b)(P,"users");function v(){return(v=Object(i.a)(Object(r.a)().mark((function t(s){var a,n,i;return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s.preventDefault(),a=s.target.children[0].children[2].value,s.target.children[1].children[2].value.includes("@")?(n=s.target.children[1].children[2].value,c("")):c("Invalid Email Address(@ missing in email)"),s.target.children[2].children[2].value.length>7?(i=s.target.children[2].children[2].value,b("")):b("Password should be at least 8 charecter long"),console.log(a),console.log(n),console.log(i),t.prev=7,t.next=10,Object(k.a)(U,n,i);case 10:if(U.currentUser.email!==n){t.next=18;break}return t.next=13,Object(y.a)(f,{uEmail:n,uName:a,uBio:"Programmer",uLink:"",uTags:[]});case 13:e.loginStatus(!0),localStorage.setItem("isLoggedIn",U.currentUser.email),e.loginSucessFull(),g(""),console.log("Firebase Request Send ... (From SignUp.js)");case 18:t.next=24;break;case 20:t.prev=20,t.t0=t.catch(7),console.log("Something Went Wrong"),g("Something Went Wrong");case 24:case"end":return t.stop()}}),t,null,[[7,20]])})))).apply(this,arguments)}return Object(h.jsxs)("div",{className:Q.a.signupBox,children:[Object(h.jsx)(F,{}),Object(h.jsxs)(m,{className:Q.a.signup,children:[null===(t=U.currentUser)||void 0===t?void 0:t.email,Object(h.jsxs)("form",{onSubmit:function(e){return v.apply(this,arguments)},children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("label",{htmlFor:"Name",children:"Display Name"})," ",Object(h.jsx)("br",{}),Object(h.jsx)("input",{type:"text",id:"Name",required:!0})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("label",{htmlFor:"Email",children:"Email"})," ",Object(h.jsx)("br",{}),Object(h.jsx)("input",{type:"text",id:"Email",required:!0}),Object(h.jsx)("p",{className:Q.a.Error,children:n})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("label",{htmlFor:"pass",children:"Password"}),Object(h.jsx)("br",{}),Object(h.jsx)("input",{type:"password",id:"pass",required:!0}),Object(h.jsx)("p",{className:Q.a.Error,children:u})]}),Object(h.jsx)("div",{style:{width:"260px",lineHeight:"15px",marginTop:"10px"},children:Object(h.jsx)("span",{className:Q.a.passwordText,children:"Passwords must contain at least eight characters, including at least 1 letter and 1 number."})}),Object(h.jsxs)("div",{className:Q.a.chakeboxBox,children:[Object(h.jsx)("input",{type:"checkbox"}),Object(h.jsx)("span",{children:"Opt-in to receive occasional product updates, user research invitations, company announcements, and digests."})]}),Object(h.jsx)(_,{text:"Sign up"}),Object(h.jsx)("p",{className:Q.a.Error,children:x}),Object(h.jsxs)("p",{className:Q.a.endText,children:["By clicking \u201cSign up\u201d, you agree to our"," ",Object(h.jsx)("span",{style:{color:"#7387fc"},children:"terms of service, privacy policy"})," ","and ",Object(h.jsx)("span",{style:{color:"#7387fc"},children:"cookie policy"})]}),Object(h.jsx)("br",{}),Object(h.jsx)("hr",{}),Object(h.jsxs)("p",{className:Q.a.Login,children:["Already have an account?"," ",Object(h.jsx)("button",{onClick:e.login,children:"Log in"})]})]})]})]})},B=s(35),I=s.n(B);var E=function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("section",{className:I.a.card,children:[Object(h.jsx)("h4",{children:"The Overflow Blog"}),Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:"Observability is key to the future of software (and your DevOps career)"}),Object(h.jsx)("li",{children:"Podcast 374: How valuable is your screen name?"})]})]}),Object(h.jsxs)("section",{className:I.a.card,children:[Object(h.jsx)("h4",{children:"Programing Quotes"}),Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:"Review queue workflows - Final release...."}),Object(h.jsx)("li",{children:"Please welcome Valued Associates: #958 - V2Blast #959 - SpencerG"}),Object(h.jsx)("li",{children:"Outdated Answers: accepted answer is now unpinned on Stack Overflow"})]})]}),Object(h.jsxs)("section",{className:I.a.card,children:[Object(h.jsx)("h4",{children:"Motivation For Programmer"}),Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:"Why was this spam flag declined, yet the question marked as spam?"}),Object(h.jsx)("li",{children:"What is the best course of action when a user has high enough rep to..."}),Object(h.jsx)("li",{children:'Is a link to the "How to ask" help page a useful comment?'})]})]}),Object(h.jsxs)("section",{className:I.a.tags,children:[Object(h.jsx)("h4",{children:"Watched Tags"}),Object(h.jsxs)("div",{children:[Object(h.jsx)("span",{children:"JavaScript"}),Object(h.jsx)("span",{children:"C"}),Object(h.jsx)("span",{children:"C++"}),Object(h.jsx)("span",{children:"Python"}),Object(h.jsx)("span",{children:"Java"})," ",Object(h.jsx)("br",{}),Object(h.jsx)("span",{children:"Go"}),Object(h.jsx)("span",{children:"Kotlin"}),Object(h.jsx)("span",{children:"C#"}),Object(h.jsx)("span",{children:"SQL"}),Object(h.jsx)("span",{children:"COBOL"}),Object(h.jsx)("span",{children:"Dart"})," ",Object(h.jsx)("br",{}),Object(h.jsx)("span",{children:"React JS"}),Object(h.jsx)("span",{children:"Unity"}),Object(h.jsx)("span",{children:"NEXT JS"}),Object(h.jsx)("span",{children:"Perl"})]})]})]})},C=s(31),A=s.n(C),D=s(44),q=s.n(D);var W=function(e){var t=Object(l.useState)(e.quetions),s=Object(o.a)(t,2),a=s[0];function n(t){var s=t.target.innerText;return e.quetions.map((function(t){return s===t.Q_title&&e.setClickedQuetion(t.Q_title,t.Q_body,t.Q_tags,t.Q_user,t.Q_Answers,t.id),0})),0}return s[1],Object(h.jsx)("div",{className:q.a.Quetions,children:a.map((function(e){return Object(h.jsxs)("div",{className:q.a.eachQuetion,children:[Object(h.jsx)("h3",{onClick:n,children:e.Q_title}),Object(h.jsxs)("p",{style:{marginTop:"10px"},children:["Tags :"," ",e.Q_tags.map((function(e){return Object(h.jsx)("span",{className:q.a.tags,children:e},Math.random())}))]})]},e.Q_title)}))})};var H=function(e){return Object(h.jsxs)("div",{className:A.a.flex,children:[Object(h.jsxs)("div",{className:A.a.homePage,children:[Object(h.jsxs)("div",{className:A.a.header,children:[Object(h.jsx)("h1",{style:{fontWeight:"500"},children:"Top Questions"}),Object(h.jsx)("button",{className:A.a.btn,onClick:function(){""!==localStorage.getItem("isLoggedIn")?e.askQuestion():e.login()},children:"Ask Question"})]}),Object(h.jsx)(W,{quetions:e.all_Quetions,setClickedQuetion:e.clickedQueion})]}),Object(h.jsx)("div",{className:A.a.blog,children:Object(h.jsx)(E,{})})]})},M=s(32),J=s.n(M);var R=function(e){return Object(h.jsxs)("div",{className:J.a.flex,children:[Object(h.jsxs)("div",{className:J.a.Questions,children:[Object(h.jsxs)("div",{className:J.a.header,children:[Object(h.jsx)("h1",{style:{fontWeight:"500"},children:"All Questions"}),Object(h.jsx)("button",{className:J.a.btn,onClick:function(){""!==localStorage.getItem("isLoggedIn")?e.askQuestion():e.login()},children:"Ask Question"})]}),Object(h.jsx)(W,{quetions:e.all_Quetions,setClickedQuetion:e.clickedQueion})]}),Object(h.jsx)("div",{className:J.a.blog,children:Object(h.jsx)(E,{})})]})},V=s(27),G=s.n(V);var z=function(e){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{className:G.a.TageCard,children:[{tag:"JavaScript",info:"For questions regarding programming in ECMAScript (JavaScript/JS) and its various dialects/implementations (excluding ActionScript). Please include all relevant tags on your question;"},{tag:"C#",info:"C# (pronounced 'see sharp') is a high level, statically typed, multi-paradigm programming language developed by Microsoft"},{tag:"Python",info:"Python is a multi-paradigm, dynamically typed, multipurpose programming language. It is designed to be quick to learn, understand, and use, and enforces a clean and uniform syntax."},{tag:"Java",info:"Java is a high-level object oriented programming language. Use this tag when you're having problems using or understanding the language itself."}].map((function(e){return Object(h.jsxs)("div",{className:G.a.card,children:[Object(h.jsx)("h4",{children:e.tag}),Object(h.jsx)("p",{children:e.info})]},e.tag)}))}),Object(h.jsx)("div",{className:G.a.TageCard,children:[{tag:"PHP",info:"PHP is a widely used, open source, general-purpose, multi-paradigm, dynamically typed and interpreted scripting language originally designed for server-side web development"},{tag:"HTML",info:"HTML (HyperText Markup Language) is the markup language for creating web pages and other information to be displayed in a web browser."},{tag:"Android",info:"Android is Google's mobile operating system, used for programming or developing digital devices (Smartphones, Tablets, Automobiles, TVs, Wear, Glass, IoT)."},{tag:"CSS",info:"CSS is a representation style sheet language used for describing the look and formatting of HTML, XML documents and SVG elements including colors, layout, fonts, and animations"}].map((function(e){return Object(h.jsxs)("div",{className:G.a.card,children:[Object(h.jsx)("h4",{children:e.tag}),Object(h.jsx)("p",{children:e.info})]},e.tag)}))}),Object(h.jsx)("div",{className:G.a.TageCard,children:[{tag:"ReactJS",info:"React is a JavaScript library for building user interfaces. It uses a declarative, component-based paradigm and aims to be both efficient and flexible."},{tag:"nodeJS",info:"Node.js is an event-based, non-blocking, asynchronous I/O runtime that uses Google's V8 JavaScript engine and libuv library."}].map((function(e){return Object(h.jsxs)("div",{className:G.a.card,children:[Object(h.jsx)("h4",{children:e.tag}),Object(h.jsx)("p",{children:e.info})]},e.tag)}))})]})},Z=s(52),X=s.n(Z);var K=function(e){return Object(h.jsxs)("div",{className:X.a.Tags,children:[Object(h.jsx)("h1",{style:{fontWeight:"500"},children:"Tags"}),Object(h.jsxs)("p",{children:["A tag is a keyword or label that categorizes your question with other, similar questions.",Object(h.jsx)("br",{})," Using the right tags makes it easier for others to find and answer your question."]}),Object(h.jsx)(z,{})]})},Y=s(36),$=s.n(Y);var ee=function(e){function t(t){var s=t.target.innerText;e.UserDatabase.map((function(t){return t.uName===s&&e.searchedUser(t.uName,t.uEmail,t.uBio,t.uLink,t.uTags),0}))}return Object(h.jsxs)("div",{className:$.a.Users,children:[Object(h.jsx)("h1",{style:{fontWeight:"500"},children:"Users"}),Object(h.jsx)("p",{style:{marginTop:"10px"},children:"Here are some users of the service"}),Object(h.jsx)("div",{className:$.a.userDiv,children:e.UserDatabase.map((function(e){return Object(h.jsxs)("div",{className:$.a.user,children:[Object(h.jsx)("span",{className:$.a.userProfile,children:Object(h.jsx)("img",{src:"https://avatars.dicebear.com/api/bottts/".concat(e.uName,".svg"),alt:"user"})}),Object(h.jsx)("span",{onClick:t,children:e.uName})]},Math.random())}))})]})},te=s(45),se=s.n(te);var ae=function(e){var t=Object(y.b)(P,"ask_quetions");function s(){return(s=Object(i.a)(Object(r.a)().mark((function s(a){var n,c,i,o,l,j;return Object(r.a)().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:if(a.preventDefault(),n=localStorage.getItem("isLoggedIn"),c=a.target[0].value,i=a.target[1].value,o=a.target[2].value,l=o.split(" "),j=n,""===c||""===i||""===l){s.next=10;break}return s.next=10,Object(y.a)(t,{Q_title:c,Q_body:i,Q_tags:l,Q_user:j,Q_Answers:[]});case 10:e.home();case 11:case"end":return s.stop()}}),s)})))).apply(this,arguments)}return Object(h.jsx)("div",{className:se.a.askQuestion,children:Object(h.jsx)(m,{children:Object(h.jsxs)("form",{className:se.a.addNewQuestion,onSubmit:function(e){return s.apply(this,arguments)},children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("h3",{children:"Title"}),Object(h.jsx)("label",{htmlFor:"title",children:"Be specific and imagine you\u2019re asking a question to another person"}),Object(h.jsx)("br",{}),Object(h.jsx)("input",{type:"text",placeholder:"e.g. How To Center A Div in HTML, CSS",id:"title"})]}),Object(h.jsx)("br",{}),Object(h.jsx)("div",{children:Object(h.jsxs)("div",{children:[Object(h.jsx)("h3",{children:"Body"}),Object(h.jsx)("label",{htmlFor:"body",children:"Include all the information someone would need to answer your question"}),Object(h.jsx)("br",{}),Object(h.jsx)("textarea",{rows:"10",cols:"122",style:{padding:"10px"},placeholder:"#include<stdio.h>\r void main(){\r .....int a = 10;\r .....int b = 20;\r .....int c = a + b;\r .....printf(`Sum : `+c);\r }"})]})}),Object(h.jsx)("br",{}),Object(h.jsx)("div",{children:Object(h.jsxs)("div",{children:[Object(h.jsx)("h3",{children:"Tags"}),Object(h.jsx)("label",{htmlFor:"Tags",children:"Add at least one tag to your question"}),Object(h.jsx)("br",{}),Object(h.jsx)("input",{type:"text",id:"Tags",placeholder:"e.g. JavaScript, Python, Java, etc"})]})}),Object(h.jsx)(_,{text:"Review Question",className:se.a.btn})]})})})},ne=s(16),re=s.n(ne);var ce=function(e){var t=Object(l.useState)(),s=Object(o.a)(t,2),a=s[0],n=s[1],r=Object(l.useState)(),c=Object(o.a)(r,2),i=c[0],j=c[1],d=Object(l.useState)(),u=Object(o.a)(d,2),b=u[0],p=u[1],O=Object(l.useState)(""),x=Object(o.a)(O,2),g=x[0],m=x[1],f=Object(l.useState)([]),v=Object(o.a)(f,2),k=v[0],N=v[1],y=localStorage.getItem("isLoggedIn");return Object(l.useEffect)((function(){e.UserDatabase.map((function(e){return e.uEmail===y&&(n(e.uName),j(e.uEmail),p(e.uBio),m(e.uLink),N(e.uTags)),0}))}),[e.UserDatabase,y]),Object(h.jsxs)("div",{className:re.a.profile,children:[Object(h.jsxs)("div",{className:re.a.profileEditAndPhoto,children:[Object(h.jsx)("p",{className:re.a.profilePhoto,children:Object(h.jsx)("img",{src:"https://avatars.dicebear.com/api/bottts/".concat(a,".svg"),alt:"user"})}),Object(h.jsxs)("div",{className:re.a.profileInfo,children:[Object(h.jsxs)("p",{children:["Name : ",a]}),Object(h.jsxs)("p",{children:["Email : ",i]}),Object(h.jsx)(_,{text:"Edit Profile",onClick:e.UpdateProfile})]})]}),Object(h.jsx)("hr",{}),Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{children:"About Me"}),Object(h.jsx)("p",{children:b})]}),Object(h.jsx)("br",{}),Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{children:"Connect With Me"}),""===g?Object(h.jsx)(_,{text:"Add Link",style:{width:"100px"},onClick:e.UpdateLink}):Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("a",{href:g,target:"_blank",rel:"noopener noreferrer",children:Object(h.jsx)(_,{text:"Contact",style:{width:"100px"},className:g.includes("instagram")&&re.a.instagramLink})}),Object(h.jsx)("button",{className:re.a.editBtn,onClick:e.UpdateLink,children:"Edit Link"})]})]}),Object(h.jsx)("br",{}),Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{children:"My Tech Stack"}),Object(h.jsx)("div",{style:{marginTop:"20px"},children:k.map((function(e){return Object(h.jsx)("span",{className:re.a.tags,children:e},Math.random())}))}),Object(h.jsx)("br",{}),Object(h.jsx)("span",{className:re.a.tags,onClick:e.UpdateTags,style:{cursor:"pointer",fontWeight:"900"},children:"Add Tags"})]})]})};var ie=function(e){var t=localStorage.getItem("isLoggedIn");return Object(h.jsxs)("div",{className:re.a.profile,children:[Object(h.jsxs)("div",{className:re.a.profileEditAndPhoto,children:[Object(h.jsx)("p",{className:re.a.profilePhoto,children:Object(h.jsx)("img",{src:"https://avatars.dicebear.com/api/bottts/".concat(e.sName,".svg"),alt:"user"})}),Object(h.jsxs)("div",{className:re.a.profileInfo,style:{marginTop:t===e.sEmail?"23px":"45px"},children:[Object(h.jsxs)("p",{children:["Name : ",e.sName]}),Object(h.jsxs)("p",{children:["Email : ",e.sEmail]}),t===e.sEmail&&Object(h.jsx)(_,{text:"Edit Profile",onClick:e.UpdateProfile})]})]}),Object(h.jsx)("hr",{}),Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{children:"About Me"}),Object(h.jsx)("p",{children:e.sBio})]}),Object(h.jsx)("br",{}),Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{children:"Connect With Me"}),""===e.sLink?Object(h.jsx)("p",{children:"No Link Added By User"}):Object(h.jsx)("a",{href:e.sLink,target:"_blank",rel:"noopener noreferrer",children:Object(h.jsx)(_,{text:"Contact",style:{width:"100px"},className:e.sLink.includes("instagram")&&re.a.instagramLink})}),t===e.sEmail&&""!==e.sLink&&Object(h.jsx)("button",{className:re.a.editBtn,onClick:e.UpdateLink,children:"Edit Link"})]}),Object(h.jsx)("br",{}),Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{children:"My Tech Stack"}),Object(h.jsx)("div",{style:{marginTop:"20px"},children:0===e.sTags.length?Object(h.jsx)("p",{children:"No Tags Are Added By User"}):e.sTags.map((function(e){return Object(h.jsx)("span",{className:re.a.tags,children:e},Math.random())}))}),Object(h.jsx)("br",{}),t===e.sEmail&&Object(h.jsx)("span",{className:re.a.tags,onClick:e.UpdateTags,style:{cursor:"pointer",fontWeight:"900"},children:"Add Tag"})]})]})},oe=s(37),le=s.n(oe);var je=function(e){var t=Object(l.useState)(),s=Object(o.a)(t,2),a=s[0],n=s[1],c=Object(l.useState)(),j=Object(o.a)(c,2),d=j[0],u=j[1],b=Object(l.useState)(""),p=Object(o.a)(b,2),O=p[0],x=p[1],g=Object(l.useState)(""),f=Object(o.a)(g,2),v=f[0],k=f[1],N=localStorage.getItem("isLoggedIn");function S(){return(S=Object(i.a)(Object(r.a)().mark((function t(s){var a,n,c,i,o,l;return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(s.preventDefault(),""===s.target[0].value||""===s.target[1].value){t.next=15;break}return t.prev=2,a=Object(y.d)(P,"users",d),n={uName:s.target[0].value,uBio:s.target[1].value},t.next=7,Object(y.g)(a,n);case 7:console.log("Firebase Data Updated ... (From UpdateProfile.js)"),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(2),console.log("Failed To Update User Data");case 13:t.next=41;break;case 15:if(""===s.target[0].value){t.next=29;break}return t.prev=16,c=Object(y.d)(P,"users",d),i={uName:s.target[0].value,uBio:v},t.next=21,Object(y.g)(c,i);case 21:console.log("Firebase Data Updated ... (From UpdateProfile.js)"),t.next=27;break;case 24:t.prev=24,t.t1=t.catch(16),console.log("Failed To Update User Data");case 27:t.next=41;break;case 29:if(""===s.target[1].value){t.next=41;break}return t.prev=30,o=Object(y.d)(P,"users",d),l={uName:O,uBio:s.target[1].value},t.next=35,Object(y.g)(o,l);case 35:console.log("Firebase Data Updated ... (From UpdateProfile.js)"),t.next=41;break;case 38:t.prev=38,t.t2=t.catch(30),console.log("Failed To Update User Data");case 41:e.home();case 42:case"end":return t.stop()}}),t,null,[[2,10],[16,24],[30,38]])})))).apply(this,arguments)}return Object(l.useEffect)((function(){e.UserDatabase.map((function(e){return e.uEmail===N&&(n(e.uName),x(e.uName),k(e.uBio),u(e.id)),0}))}),[e.UserDatabase,N]),Object(h.jsx)("div",{className:le.a.editProfile,children:Object(h.jsxs)(m,{className:le.a.currentProfile,children:[Object(h.jsx)("div",{className:le.a.userProfile,children:Object(h.jsx)("img",{src:"https://avatars.dicebear.com/api/bottts/".concat(a,".svg"),alt:"user"})}),Object(h.jsx)("h3",{children:N}),Object(h.jsx)("hr",{}),Object(h.jsxs)("form",{className:le.a.editProfileForm,onSubmit:function(e){return S.apply(this,arguments)},children:[Object(h.jsx)("br",{}),Object(h.jsxs)("div",{children:[Object(h.jsx)("label",{htmlFor:"name",children:"Edit Name : "}),Object(h.jsx)("input",{type:"text",id:"name",placeholder:O})]}),Object(h.jsx)("br",{}),Object(h.jsxs)("div",{children:[Object(h.jsxs)("label",{htmlFor:"bio",style:{marginRight:"45px"},children:["Edit Bio :"," "]}),Object(h.jsx)("input",{type:"text",id:"bio",placeholder:v})]}),Object(h.jsx)("br",{}),Object(h.jsx)("div",{style:{textAlign:"center"},children:Object(h.jsx)(_,{text:"Update"})})]})]})})},de=s(38),ue=s.n(de);var be=function(e){var t=Object(l.useState)(),s=Object(o.a)(t,2),a=s[0],n=s[1],c=Object(l.useState)(),j=Object(o.a)(c,2),d=j[0],u=j[1],b=localStorage.getItem("isLoggedIn");function p(){return(p=Object(i.a)(Object(r.a)().mark((function t(s){var a,n;return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(s.preventDefault(),""===s.target[0].value){t.next=13;break}return t.prev=2,a=Object(y.d)(P,"users",d),n={uLink:s.target[0].value},t.next=7,Object(y.g)(a,n);case 7:console.log("Firebase Link Updated ... (From UserLinks.js)"),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(2),console.log("Failed To Update User Link");case 13:e.home();case 14:case"end":return t.stop()}}),t,null,[[2,10]])})))).apply(this,arguments)}return Object(l.useEffect)((function(){e.UserDatabase.map((function(e){return e.uEmail===b&&(n(e.uName),u(e.id)),0}))}),[e.UserDatabase,b]),Object(h.jsx)("div",{className:ue.a.editProfile,children:Object(h.jsxs)(m,{className:ue.a.currentProfile,children:[Object(h.jsx)("div",{className:ue.a.userProfile,children:Object(h.jsx)("img",{src:"https://avatars.dicebear.com/api/bottts/".concat(a,".svg"),alt:"user"})}),Object(h.jsx)("h2",{children:"Add Social Media Link"}),Object(h.jsxs)("form",{className:ue.a.editProfileForm,onSubmit:function(e){return p.apply(this,arguments)},children:[Object(h.jsx)("div",{children:Object(h.jsx)("input",{type:"text",placeholder:"Instagram, Linkdin, etc"})}),Object(h.jsx)("br",{}),Object(h.jsx)("div",{style:{textAlign:"center"},children:Object(h.jsx)(_,{text:"Add Social Media"})})]})]})})},he=s(12),pe=s(39),Oe=s.n(pe);var xe=function(e){var t=Object(l.useState)(),s=Object(o.a)(t,2),a=s[0],n=s[1],c=Object(l.useState)(),j=Object(o.a)(c,2),d=j[0],u=j[1],b=Object(l.useState)([]),p=Object(o.a)(b,2),O=p[0],x=p[1],g=localStorage.getItem("isLoggedIn");function f(){return(f=Object(i.a)(Object(r.a)().mark((function t(s){var a,n,c,i;return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(s.preventDefault(),""===(a=s.target[0].value)){t.next=15;break}return n=a.split(","),t.prev=4,c=Object(y.d)(P,"users",d),i={uTags:[].concat(Object(he.a)(O),Object(he.a)(n))},t.next=9,Object(y.g)(c,i);case 9:console.log("Firebase Tags Updated ... (From UserTags.js)"),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(4),console.log("Failed To Update User Tags");case 15:e.home();case 16:case"end":return t.stop()}}),t,null,[[4,12]])})))).apply(this,arguments)}return Object(l.useEffect)((function(){e.UserDatabase.map((function(e){return e.uEmail===g&&(n(e.uName),u(e.id),x(e.uTags)),0}))}),[e.UserDatabase,g]),Object(h.jsx)("div",{className:Oe.a.editProfile,children:Object(h.jsxs)(m,{className:Oe.a.currentProfile,children:[Object(h.jsx)("div",{className:Oe.a.userProfile,children:Object(h.jsx)("img",{src:"https://avatars.dicebear.com/api/bottts/".concat(a,".svg"),alt:"user"})}),Object(h.jsx)("h2",{children:"Add New Tags"}),Object(h.jsxs)("form",{className:Oe.a.editProfileForm,onSubmit:function(e){return f.apply(this,arguments)},children:[Object(h.jsx)("div",{children:Object(h.jsx)("input",{type:"text",placeholder:"Enter Comma Saprated Tags (HTML,CSS,JavaScript)"})}),Object(h.jsx)("br",{}),Object(h.jsx)("div",{style:{textAlign:"center"},children:Object(h.jsx)(_,{text:"Add New Tags"})})]})]})})},ge=s(33),me=s.n(ge);var fe=function(e){localStorage.setItem("currentQuetion",e.quetion);var t=localStorage.getItem("isLoggedIn");function s(){return(s=Object(i.a)(Object(r.a)().mark((function t(){var s;return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=Object(y.d)(P,"ask_quetions",e.qID),t.next=3,Object(y.c)(s);case 3:window.location.reload();case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(h.jsxs)("div",{className:me.a.detailed,children:[Object(h.jsx)("h1",{children:e.quetion}),Object(h.jsx)("br",{}),Object(h.jsx)("hr",{}),Object(h.jsx)("br",{}),Object(h.jsx)("div",{children:e.code}),Object(h.jsx)("div",{className:me.a.tagsDiv,children:e.tags.map((function(e){return Object(h.jsx)("span",{className:me.a.tag,children:e},Math.random())}))}),Object(h.jsxs)("h3",{children:["Asked By : ",e.askedby]}),Object(h.jsx)("br",{}),Object(h.jsx)("hr",{}),Object(h.jsx)("h2",{children:"Answers"}),e.answer.map((function(e){return Object(h.jsx)("div",{className:me.a.usersAnswer,children:Object(h.jsx)("p",{children:e})},Math.random())})),Object(h.jsx)(_,{text:"Add Answer",style:{width:"120px"},onClick:e.addans}),e.askedby===t&&Object(h.jsx)("button",{className:me.a.deleteBTN,onClick:function(){return s.apply(this,arguments)},children:"Delete"})]})},ve=s(46),_e=s.n(ve);var ke=function(e){var t=localStorage.getItem("currentQuetion"),s=Object(l.useState)(),a=Object(o.a)(s,2),n=a[0],c=a[1],j=Object(l.useState)(),d=Object(o.a)(j,2),u=d[0],b=d[1];function p(){return(p=Object(i.a)(Object(r.a)().mark((function t(s){var a,c;return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(s.preventDefault(),""===s.target[0].value){t.next=14;break}return t.prev=3,a=Object(y.d)(P,"ask_quetions",n),c={Q_Answers:[].concat(Object(he.a)(u),[s.target[0].value])},t.next=8,Object(y.g)(a,c);case 8:console.log("Firebase Tags Updated ... (From UserTags.js)"),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(3),console.log("Failed To Update User Tags");case 14:e.home();case 15:case"end":return t.stop()}}),t,null,[[3,11]])})))).apply(this,arguments)}return Object(l.useEffect)((function(){e.all_Quetions.map((function(e){return e.Q_title===t&&(c(e.id),b(e.Q_Answers)),0}))}),[e.all_Quetions,t]),Object(h.jsx)("div",{className:_e.a.editProfile,children:Object(h.jsxs)(m,{className:_e.a.currentProfile,children:[Object(h.jsx)("h2",{children:t}),Object(h.jsxs)("form",{className:_e.a.editProfileForm,onSubmit:function(e){return p.apply(this,arguments)},children:[Object(h.jsx)("div",{children:Object(h.jsx)("textarea",{type:"text",name:"w3review",rows:"10",cols:"105"})}),Object(h.jsx)("br",{}),Object(h.jsx)("div",{style:{textAlign:"center"},children:Object(h.jsx)(_,{text:"Post Answer"})})]})]})})};var Ne=function(){var e=Object(l.useState)([]),t=Object(o.a)(e,2),s=t[0],a=t[1],n=Object(l.useState)([]),j=Object(o.a)(n,2),d=j[0],u=j[1],b=Object(y.b)(P,"users"),p=Object(y.b)(P,"ask_quetions"),x=Object(l.useState)(!0),g=Object(o.a)(x,2),m=g[0],f=g[1],v=Object(l.useState)(!1),_=Object(o.a)(v,2),N=_[0],S=_[1],T=Object(l.useState)(1),Q=Object(o.a)(T,2),F=Q[0],B=Q[1],I=localStorage.getItem("isLoggedIn");Object(l.useEffect)((function(){function e(){return(e=Object(i.a)(Object(r.a)().mark((function e(){var t;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(y.e)(b);case 3:t=e.sent,a(t.docs.map((function(e){return Object(c.a)(Object(c.a)({},e.data()),{},{id:e.id})}))),console.log("Firebase Request Send For The Users... (From App.js)"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("Firebase Error");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function t(){return(t=Object(i.a)(Object(r.a)().mark((function e(){var t;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(y.e)(p);case 3:t=e.sent,u(t.docs.map((function(e){return Object(c.a)(Object(c.a)({},e.data()),{},{id:e.id})}))),console.log("Firebase Request Send For The Quetion... (From App.js)"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("Firebase Error");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}(),function(){e.apply(this,arguments)}()}),[]);var E=Object(l.useState)(Object(h.jsx)(H,{login:M,askQuestion:G,all_Quetions:d,clickedQueion:Z})),C=Object(o.a)(E,2),A=C[0],D=C[1],q=function(){window.location.reload()};function W(){D(Object(h.jsx)(H,{login:M,askQuestion:G,all_Quetions:d,clickedQueion:Z})),f(!0),B(1),q()}function M(){D(Object(h.jsx)(w,{signup:J,loginSucessFull:W,loginStatus:S})),f(!1)}function J(){D(Object(h.jsx)(L,{login:M,loginSucessFull:W,loginStatus:S})),f(!1)}function V(){return(V=Object(i.a)(Object(r.a)().mark((function e(){return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return q(),e.next=3,Object(k.d)(U);case 3:S(!1),localStorage.setItem("isLoggedIn",""),f(!0);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function G(){D(Object(h.jsx)(ae,{home:W})),f(!1)}function z(e,t,s,a,n){B(),D(Object(h.jsx)(ie,{sName:e,sEmail:t,sBio:s,sLink:a,sTags:n,UpdateProfile:X,UpdateLink:Y,UpdateTags:$}))}function Z(e,t,s,a,n,r){B(),D(Object(h.jsx)(fe,{quetion:e,code:t,tags:s,askedby:a,answer:n,addans:te,qID:r}))}function X(){D(Object(h.jsx)(je,{UserDatabase:s,home:W})),f(!1)}function Y(){D(Object(h.jsx)(be,{UserDatabase:s,home:W})),f(!1)}function $(){D(Object(h.jsx)(xe,{UserDatabase:s,home:W})),f(!1)}function te(){""!==I?(D(Object(h.jsx)(ke,{all_Quetions:d,home:W})),f(!1)):M()}return Object(l.useEffect)((function(){""!==I&&S(!0),1===F?D(Object(h.jsx)(H,{login:M,askQuestion:G,all_Quetions:d,clickedQueion:Z})):2===F?D(Object(h.jsx)(R,{login:M,askQuestion:G,all_Quetions:d,clickedQueion:Z})):3===F?D(Object(h.jsx)(K,{})):4===F&&D(Object(h.jsx)(ee,{searchedUser:z,UserDatabase:s}))}),[I,F]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(O,{login:M,logout:function(){return V.apply(this,arguments)},displaysidebar:m,userStatus:N,home:W,sidevalue:function(e){B(e)},relode:F,openUser:function(){f(!0),B(),D(Object(h.jsx)(ce,{UserDatabase:s,UpdateProfile:X,UpdateLink:Y,UpdateTags:$}))},UserDatabase:s}),A]})};n.a.createRoot(document.getElementById("root")).render(Object(h.jsx)(Ne,{}))}],[[63,1,2]]]);
//# sourceMappingURL=main.e00716b4.chunk.js.map