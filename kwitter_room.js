//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
  apiKey: "AIzaSyDq_rV0h-ndd-oNR63Ig50QRxd_jM8V-PM",
  authDomain: "kwitter-a995f.firebaseapp.com",
  databaseURL: "https://kwitter-a995f-default-rtdb.firebaseio.com",
  projectId: "kwitter-a995f",
  storageBucket: "kwitter-a995f.appspot.com",
  messagingSenderId: "897736265452",
  appId: "1:897736265452:web:30a9098146015c52b79fc9"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);



 user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
    });

    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html";
}

function getData() {
    firebase.database().ref("/").on('value', function(snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            console.log("Room Name - " + Room_names);
            row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
            document.getElementById("output").innerHTML += row;
        });
    });

}

getData();

function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "kwitter_login.html";
}