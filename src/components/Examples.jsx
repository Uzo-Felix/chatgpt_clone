import React from 'react';
import { BsSun } from 'react-icons/bs';
import './examples.css';

const Examples = () => {
  return (
    <div className="homepage__examples">
      <div className="homepage__examples-heading">
        <BsSun />
        <h4>Examples</h4>
      </div>
      <div className="homepage__examples-content">
        <button>"Explain quantum computing in simple terms" →</button>
        <button>"Got any creative ideas for a 10 year old's birthday?" →</button>
        <button>"How do I make an HTTP request in Javascript?" →</button>      
        </div>
    </div>
  )
}

export default Examples;