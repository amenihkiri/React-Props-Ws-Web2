import React from 'react';
import './App.css';
import Student from "./components/Student"

const students=[
 
{class:"yelow student-card",image:"https://www.w3schools.com/howto/img_avatar2.png",name:"ines",age:22,adress:"lac 1 gomycode"},
{class:"red student-card",image:"https://www.w3schools.com/w3images/avatar6.png",name:"aziz",age:22,adress:"lac 1 gomycode"},
{class:"blue student-card",image:"https://img.pngio.com/parent-directory-avatar-2png-avatar-png-256_256.png",name:"alma",age:22,adress:"lac 1 gomycode"}
]

function App() {
  return (
    <div className="App">
   <Student students={students}>
     <p>hello props children </p>
   </Student>
   
    </div>
  );
}

export default App;
