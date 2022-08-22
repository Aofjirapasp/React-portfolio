import React, { Component } from 'react';
import logo from '../img/aof.jpg'; // with import
import  './Home.css';
import Social from '../components/Social';
import ReactTypingEffect from 'react-typing-effect'

class Home extends Component {
    render() {
        return (
            <div className="condiv home">
                <img src={logo} alt="profile" className="profilepic" height={300} width={200} />
                <ReactTypingEffect text={['I am Jirapas', 'I am a Frontend Developer']} speed={80} eraseDelay={200} className="typingeffect" />
                <Social />
            </div>
        );
    }
}

export default Home;