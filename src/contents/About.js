import React, { Component } from 'react'
import profilepic from '../img/aof.jpg'

class About extends Component {
    render() {
        return(
            <div className="condiv about">
                <h1 className="subtopic">About Me</h1>
                {/* <img src="https://scontent.fbkk5-7.fna.fbcdn.net/v/t1.0-9/118730292_4335787969826202_874822354429782795_o.jpg?_nc_cat=107&_nc_sid=09cbfe&_nc_ohc=G0lExGcor7QAX8omYaQ&_nc_ht=scontent.fbkk5-7.fna&oh=d979e3e0ac217d49d3b98b2bacd7c8d1&oe=5FB22568" alt="profile" className="profilepic" /> */}
                <img src={profilepic} height={300} width={300} style={{borderRadius: 10}} />
                <h3>Hi, I'm Jirapas</h3>
                <p>Develop web applications to complete, efficiently and on time. Keep
                    developing Web applications as designed. Supports a large number of users,
                    stable (robustness), fast response. (performance) and can be expanded to
                    support more applications. (scalability) very well. Responsible for supervising
                    work in the project in the assigned part to be able to deliver the work in then
                    specified time</p>
            </div>
        );
    }
}

export default About;
