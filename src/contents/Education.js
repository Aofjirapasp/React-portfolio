 import React, { Component } from 'react'
 import Widecard from '../components/Widecard';

 class Education extends Component {
     render() {
         return(
             <div className="condiv">
                 <h1 className="subtopic">My Education</h1>
                 <Widecard title="Aof jirapas Computer Science" where="Uttaradit Rajabhat University" from="2013" to="2020" />
                 <Widecard title="Aof jirapas" where="Suankularb Wittayalai Saraburi High School" from="2009" to="2012" />
             </div>
         );
     }
 }
 
 export default Education;