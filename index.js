
function myFunction() {
    console.log("12345");
    document.getElementById("demo").innerHTML = "쓰기를 완료";
    alert("쓰기 완료");
    
    //firebase에 쓰기
    firebase.database().ref('test/').set({"name":"tes1","ddd":"dfdfdf"});
    
}
function writeUserData() {
    firebase.database().ref('test/' + userId).set({
        username: "test1",
        email: "dlf;ksadjlfkjas"
        });
}

import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js';
//import { getRealtimedb ,ref , set} from './firebase/database';
import { getRealtimedb ,ref , get} from './firebase/database';
import { getDatabase } from "./firebase/database";
import firebase from "./firebase/app";
import "./firebase/database";
