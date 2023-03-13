import React from 'react';
import {VscWarning} from 'react-icons/vsc';
import './examples.css'

const Limitations = () => {
  return (
    <div className="homepage__examples">
      <div className="homepage__examples-heading">
        <VscWarning />
        <h4>Limitations</h4>
      </div>
      <div className="homepage__examples-content">
        <button>May occasionally generate incorrect information</button>
        <button>May occasionally produce harmful instructions or biased content</button>
        <button>Limited knowledge of world and events after 2021</button>
      </div>
    </div>

  )
}

export default Limitations;