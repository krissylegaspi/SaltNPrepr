import * as firebase from 'firebase';     

export function config(){
const firebaseConfig = {
    apiKey: "AIzaSyDTZ1gz2AVhEkj4EyICFMW8YjGqGqKrr5Y",
    authDomain: "saltnpepper-7f826.firebaseapp.com",
    databaseURL: "https://saltnpepper-7f826.firebaseio.com",
    projectId: "saltnpepper-7f826",
    storageBucket: "saltnpepper-7f826.appspot.com",
    messagingSenderId: "469290376197",
    appId: "1:469290376197:web:26b1fa2dd5cb620663d06c",
    measurementId: "G-EL0VVKHJLV"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

}

export function addItem(directory, item){

  database().ref("/" + directory).set(item);

}

export function readItem(directory){

  return firebase.database().ref('/' + directory).once('value').then(function(snapshot){
    console.log("snapshot: " + snapshot.val())
})
}

export function deleteItem(directory){
  var adaRef = firebase.database().ref('/'+directory).remove()
  
}