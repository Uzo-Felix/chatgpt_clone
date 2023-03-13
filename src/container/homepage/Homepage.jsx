import React from 'react';
import './Homepage.css';
import { BsSend } from 'react-icons/bs';
import Examples from '../../components/Examples';
import Capabilities from '../../components/Capabilities';
import Limitations from '../../components/Limitations';


const Homepage =()=> {
    return (
    <div className="app__homepage">
        <div className="app__homepage-sample">
        <h1>ChatGpt</h1>
        <section>
            <Examples />
            <Capabilities />
            <Limitations />
        </section>
        </div>
        <footer>
            <div className="footer-input">
            <input type="text" />
            <BsSend className="footer-icon"/>
            </div>
            <p><u>ChatGPT Feb 13 Version.</u> Free Research Preview. Our goal is to make AI systems more natural and safe to interact with. Your feedback will help us improve.</p>
        </footer>
    </div>
    )
};

export default Homepage;