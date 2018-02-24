
( function() {
// Initialize Firebase
    var config = {
        apiKey: "AIzaSyC19CtgLUhHbEjGDRj970eeHYeVyQ38_Bs",
        authDomain: "express-7190e.firebaseapp.com",
        databaseURL: "https://express-7190e.firebaseio.com",
        projectId: "express-7190e",
        storageBucket: "express-7190e.appspot.com",
        messagingSenderId: "1034098370699"
    };
    firebase.initializeApp(config);

    //get element
    const preObject = document.getElementById('object');

    //create reference
    const dbRefObject = firebase.database().ref();

    //sync the object changes
    //dbRefObject.on('value', snap=> {
        //var a=snap.val();
        //var a = JSON.stringify(snap.val(),null,3);
        //a=[];
        var scoresRef = firebase.database().ref("chats");
        scoresRef.on('child_added', function(data) {
                //a.push(data.val());
                var para = document.createElement("P");
                var t = document.createTextNode(data.val());
                para.appendChild(t);
                document.getElementById("object").appendChild(para);
            });
       // });
    //});



}());


var bhoko = document.getElementById("bhoko");
var submit = document.getElementById("submit");

function send(){
    const dbRefObject = firebase.database().ref().child("chats");
    var msg = bhoko.value;
    dbRefObject.push(msg);
}
