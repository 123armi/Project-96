// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyD--T6pJ0paysXhYxvEI3ANcOvKZQJwtck",
    authDomain: "project-kwitter-1aa94.firebaseapp.com",
    databaseURL: "https://project-kwitter-1aa94-default-rtdb.firebaseio.com",
    projectId: "project-kwitter-1aa94",
    storageBucket: "project-kwitter-1aa94.appspot.com",
    messagingSenderId: "927585292747",
    appId: "1:927585292747:web:a6df8165a94132bb87664e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");

  function send()
  {
        msg = document.getElementById("msg").value;
        firebase.database().ref(room_name).push({
              name: user_name,
              message: msg,
              like: 0
        });
        document.getElementById("msg").value = "";
  }