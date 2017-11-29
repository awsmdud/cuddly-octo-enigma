$(document).ready(function(){



var postRef = firebase.database().ref('Heading');
postRef.on('child_added', function(snapshot) {
    var name=snapshot.val();
  $("#newsfeed").append("<p>"+name+"</p>");
});
});

function frm2(){

    var lastname = document.getElementById('lastname');
    var node = document.createElement("p");
    var textnode = document.createTextNode(lastname.value);
    node.appendChild(textnode);
    document.getElementById("newsfeed").appendChild(node);
    
    var firstname = document.getElementById('Title');///need to combine the 2 (i.e. have username and post)
    var nod = document.createElement("p");
    var textnod = document.createTextNode(Title.value);
    nod.appendChild(textnod);
    document.getElementById("newsfeed").appendChild(nod);
    
    var firebaseRef= firebase.database().ref();///Post Messages to Firebase
   
    var postData = {
        "name": lastname.value,
        "body": Title.value
      };
    var newPostKey = firebaseRef.child('Heading').push().key;
    var updates = {};
    updates['/Heading/' + newPostKey] = postData;
  
    // return firebase.database().ref().update(updates);
    
    // firebaseRef.push().set(post_name);
    // var post= lastname.value;
    // firebaseRef.push().set(post);

    // var fireHeading= document.getElementById("newsfeed");
    // var fireHeadingRef= firebase.database().ref().child("Heading");
    

    Title.value='';
    lastname.value='';
    };
