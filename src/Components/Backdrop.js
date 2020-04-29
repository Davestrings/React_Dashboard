import React from 'react';


const backdrop = props =>(
    <div className="backdrop" onClick={props.backdropClick}></div>
)

export default backdrop;