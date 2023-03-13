import React from 'react';
import {MdElectricBolt} from 'react-icons/md';
import './examples.css';

const Capabilities = () => {
  return (
    <div className="homepage__examples">
      <div className="homepage__examples-heading">
        <MdElectricBolt />
        <h4>Capabilities</h4>
      </div>
      <div className="homepage__examples-content inactive">
        <button>Remembers what user said earlier in the conversation</button>
        <button>Allows user to provide follow-up corrections</button>
        <button>Trained to decline inappropriate requests</button>
      </div>
    </div>
  )
}

export default Capabilities;