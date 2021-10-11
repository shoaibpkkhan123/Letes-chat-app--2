const firebaseConfig = {
    apiKey: "AIzaSyBSi497nSZ0NdBZKf_0ow69LimlrY2QULM",
    authDomain: "lets-chat-app-7eb3b.firebaseapp.com",
    projectId: "lets-chat-app-7eb3b",
    storageBucket: "lets-chat-app-7eb3b.appspot.com",
    messagingSenderId: "986955058758",
    appId: "1:986955058758:web:071b3c42b7a251dff58447"
  };
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  user_name=localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML="welcome"+user_name+"!";
  
        //Start code
  function addRoom() 
  {
        room_name = document.getElementById("room_name").value;
  
       firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name" 
  });
  
  localStorage.setItem("room_name", room_name);
  
  window.location = "kwitter_page.html";
  }
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
        Room_names = childKey;
        console.log("room_name="+Room_names);
        row="<div class='room_name'id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
        document.getElementById("output").innerHTML+=row;
  
        //End code
        });});}
  getData();

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html"
}