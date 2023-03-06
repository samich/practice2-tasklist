import { useState } from 'react';
import './Box.css';

function Box({type, children}){

    let [show, setDisplay] = useState(true);
    
    function handleDisplay() {
        setDisplay(() => false);
    }

    return (
        <div className= {`box ${show === true ? '' : 'hide'}`}>
            <div className={`box-inner ${type}`}>
                {children}
            </div>
            <button className='toggle' onClick={handleDisplay}>Hide</button>
        </div>
        
    );
}

export default Box;