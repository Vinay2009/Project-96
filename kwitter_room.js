
const firebaseConfig = {
      apiKey: "AIzaSyAsi8aY9hdS-VWfrE27P7Ip0utgU3ms--Q",
      authDomain: "twitter-website-934ab.firebaseapp.com",
      databaseURL: "https://twitter-website-934ab-default-rtdb.firebaseio.com",
      projectId: "twitter-website-934ab",
      storageBucket: "twitter-website-934ab.appspot.com",
      messagingSenderId: "548877791520",
      appId: "1:548877791520:web:a35eca71f8409a66692745"
    };
    firebase.initializeApp(firebaseConfig);
   user_name=localStorage.getItem("user_name");
   document.getElementById("user_name").innerHTML="Welcome " + user_name + "!";

     function addRoom()
     {
           room_name = document.getElementById("room_name").value;   
           
           firebase.database().ref("/").child(room_name).update({
                 purpose : "adding room name"
           });

           localStorage.setItem("room_name", room_name);

           window.location="kwitter_page.html"
     }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room Name -" + Room_names);
      row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>"
      document.getElementById("output").innerHTML += row;
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}