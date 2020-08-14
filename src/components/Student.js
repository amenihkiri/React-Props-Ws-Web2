import React from 'react'

export default function Student(props) {
    return (
       <div className="studentss">
         <div style={{color:"red"}}>
         {props.children }</div>     
      
       {props.students.map(etudiant=>



        <div className={etudiant.class}>
        <img width="100px"src={etudiant.image}/>
        <h1>{etudiant.name}</h1>
        <h2>{etudiant.age}</h2>
        <h3>{etudiant.adress}</h3>
     
        </div>
        )}    
       </div>
       
    )
}

