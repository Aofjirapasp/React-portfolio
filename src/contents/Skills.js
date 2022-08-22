import React, { Component } from 'react'
import './Skills.css'

class Skills extends Component {

    constructor(props) {
        super(props);

        this.state = {
            'myskills': ['HTML', 'CSS', 'JS', 'ReactJS'
            , 'VueJS', 'ViteJS', 'SQL', 'Flask']
        }
    }

    render() {
        return(
            <div className="condiv skills">
                <h1 className="subtopic">My Skills</h1>
                <ul className="list-group">
                    {this.state.myskills.map((value) => {
                        return <li>{value}</li>
                    })}
                </ul>
            </div>
        );
    }
}

export default Skills;
