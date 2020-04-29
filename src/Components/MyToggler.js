import React from 'react';
import Pointer from './SVGs/pointer.svg';


const Toggler = props =>(
    <div className="opener" onClick={props.clickHandler}><img className="button" src={Pointer} alt=" "/></div>
);

export default Toggler;
