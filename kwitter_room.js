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
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + " !";
  
  function addRoom()
      {
        room_name = document.getElementById("room_name").value;
        firebase.database().ref("/").child(room_name).update(
              {
                    purpose: "Adding Room Name"
              });
              localStorage.setItem("room_name", room_name);
              window.location = "kwitter_page.html";
      }
  
      function getData() {firebase.database().ref("/").on('value',function(snapshot) {document.getElementById("output").innerHTML ="";snapshot.forEach(function(childSnapshot) {childKey =childSnapshot.key;
   Room_names = childKey;
   //Start code
      console.log ("Room Name - " + Room_names);
        row = "<div class = 'room_name' id=" + Room_names + "onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div> <hr>";
        document.getElementById("output").innerHTML += row;
   //End code
   });});}
  getData();
  
  function redirectToRoomName(name)
  {
        console.log(name);
        localStorage.setItem("room_name", name);
        window.location = "kwitter_page.html";
  }

  function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}