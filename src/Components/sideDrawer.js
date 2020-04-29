import React from 'react';
import './ContainerStyle.css';
import icon1 from './SVGs/icon1.svg';
import icon2 from './SVGs/icon2.svg';
import icon3 from './SVGs/icon3.svg';
import icon4 from './SVGs/icon4.svg';
import icon5 from './SVGs/icon5.svg';

const sideDrawer = props => {
    let openNav;
    if(props.showSideBar){
        openNav ='open';
    }
    return (
        <nav id="sidenav" className={openNav}>
            <ul>
                <li  title="Stats Overview"><img src={icon1} alt="icon" />Stats Overview</li>
                <li ><img src={icon2} alt="icon" />Social Records</li>
                <li ><img src={icon3} alt="icon" />Community Rep Network</li>
                <li ><img src={icon4} alt="icon" />Optimizations</li>
                <br />
                <li className="logout"><img src={icon5} alt="icon" />Log Out</li>
            </ul>
        </nav>
    )
};
export default sideDrawer;
