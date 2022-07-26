// import { initializeApp } from "firebase/app";
// import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut} from  "firebase/app firebase/auth";
// const firebaseConfig = {
//   apiKey: "AIzaSyDVHbdkjHJuiVKM1GBDnhX9gBFUBY2xZc4",
//   authDomain: "authentication-9d153.firebaseapp.com",
//   projectId: "authentication-9d153",
//   storageBucket: "authentication-9d153.appspot.com",
//   messagingSenderId: "1033477861295",
//   appId: "1:1033477861295:web:4421516bc16a7e8251095a",
//   measurementId: "G-02DDH0FF6Y"
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);



// document.getElementById("reg-btn").addEventListener("click" , function(Register){
//   document.getElementById("register-div").style.display = "inline";
//   document.getElementById("login-div").style.display = "none";
// })

// document.getElementById("log-btn").addEventListener("click" , function(Login){
//   document.getElementById("register-div").style.display = "none";
//   document.getElementById("login-div").style.display = "inline";
// })


// document.getElementById("login-btn").addEventListener("click" , function(Login){
//   const loginEmail = document.getElementById("login-email").value;
//   const loginPassword = document.getElementById("login-pass").value;
//  signInWithEmailAndPassword(auth, loginEmail, loginPassword )
//   .then((userCredential) => {
//    const user = userCredential.user;
//    document.getElementById("result-box").style.display = "inline";
//    document.getElementById("login-div").style.display = "none";
//    document.getElementById("result").innerHTML = "Welcome Back <br>" + loginEmail + "was login successfully";
//   })
// })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     document.getElementById("result-box").style.display = "inline";
//    document.getElementById("login-div").style.display = "none";
//    document.getElementById("result").innerHTML = "Sorry! <br>" + errorMessage;
//   });

//   document.getElementById("register-btn").addEventListener("click" , function(Register){
//     const registerEmail = document.getElementById("reg-email").value;
//     const registerPassword = document.getElementById("reg-pass").value;
  
//     createUserWithEmailAndPassword(auth, registerEmail, registerPassword )
//     .then((userCredential) => {
//      const user = userCredential.user;
//      document.getElementById("result-box").style.display = "inline";
//      document.getElementById("register-div").style.display = "none";
//      document.getElementById("result").innerHTML = "Welcome <br>" + registerEmail + "was Registered successfully";
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       document.getElementById("result-box").style.display = "inline";
//      document.getElementById("register-div").style.display = "none";
//      document.getElementById("result").innerHTML = "Sorry! <br>" + errorMessage;
//     });
//   })

//   document.getElementById("logout-btn").addEventListener("click" , function(){
//     signOut(auth).then(() => {
//       document.getElementById("result-box").style.display = "none";
//    document.getElementById("login-div").style.display = "inline";
  
//     }).catch((error) => {
//       document.getElementById("result").innerHTML = "Sorry! <br>" + errorMessage;
//     })
//   })
    

  