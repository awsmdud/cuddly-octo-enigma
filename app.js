$(document).ready(function(){

// 
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
    var post_name= Title.value;
    firebaseRef.push().set(post_name);
    var post= lastname.value;
    firebaseRef.push().set(post);
    
    var fireHeading= document.getElementById("newsfeed");
    var fireHeadingRef= firebase.database().ref().child("Heading");
    firebaseHeadingRef.on('value',function(datasnapshot)); 
   

    Title.value=''
    lastname.value=''
};
    /*var lastname = document.getElementById("lastname");
    var node = document.createElement("p");


    var new= document.createElement("p");
    var lastname= document.getElementById('lastname').value;
    var line = document.createTextNode(lastname);
    new.appendChild(line);
    var add = documentgetElementById("newsfeed");
    add.appendChild(lastname);
    */

