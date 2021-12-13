// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAw-WTqCx_rv-lzbU2-CtQVhQu1N5_AWcQ",
    authDomain: "tough-flames-323406.firebaseapp.com",
    projectId: "tough-flames-323406",
    storageBucket: "tough-flames-323406.appspot.com",
    messagingSenderId: "779917096446",
    appId: "1:779917096446:web:eb1c30e2b81204b1ca7caf",
    measurementId: "G-3G91FEQYDM"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth =  firebase.auth();

  //signup function
  function signUp(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
    //
    promise.catch(e=>alert(e.message));
    alert("Registrou");
  }

  //signIN function
  function  signIn(){
    var email = document.getElementById("email");
    var password  = document.getElementById("password");
    const promise = auth.signInWithEmailAndPassword(email.value,password.value);
    promise.catch(e=>alert(e.message));
    
  }


  //signOut

  function signOut(){
    auth.signOut();
    alert("Deslogou");
  }

  //active user to homepage
  firebase.auth().onAuthStateChanged((user)=>{
    if(user){
      var email = user.email;
      alert("Usuario atual "+email);

    }else{
      alert("Sem usuario atual")
    }
  })

