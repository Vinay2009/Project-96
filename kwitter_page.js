const firebaseConfig = {
      apiKey: "AIzaSyAsi8aY9hdS-VWfrE27P7Ip0utgU3ms--Q",
      authDomain: "twitter-website-934ab.firebaseapp.com",
      databaseURL: "https://twitter-website-934ab-default-rtdb.firebaseio.com",
      projectId: "twitter-website-934ab",
      storageBucket: "twitter-website-934ab.appspot.com",
      messagingSenderId: "548877791520",
      appId: "1:548877791520:web:a35eca71f8409a66692745"}
      
      firebase.initializeApp(firebaseConfig);

      user_name=localStorage.getItem("user_name");
      room_name=localStorage.getItem("room_name");

      function send()
      {
            msg = document.getElementById("msg").value;
            firebase.database().ref(room_name).push({
                  name:user_name,
                  message:msg,
                  like:0
            });
            document.getElementById("msg").value="";
      }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("kwitter.html");
}

function updateLike(message_id)
{
      console.log("clicked on like button - " + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      update_likes = Number(likes) + 1;
      console.log(update_likes);

      firebase.database().ref(room_name).child(message_id).update({
            like : updated_likes
      });
}
