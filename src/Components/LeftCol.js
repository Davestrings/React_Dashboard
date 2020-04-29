import React, { Component } from 'react';
import './ContainerStyle.css';
import icon1 from './SVGs/icon1.svg';
import icon2 from './SVGs/icon2.svg';
import icon3 from './SVGs/icon3.svg';
import icon4 from './SVGs/icon4.svg';
import icon5 from './SVGs/icon5.svg';
// import SideDrawer from './sideDrawer';

/**
 * sidenav displays at viewport 950px below
 * left-side displays at viewport above 950px
 */
class LeftCol extends Component {
    render() {
        return (
            <div>
                <div id="left-side">
                    <div className="viewSelector"><img src={icon1} alt="icon" />Stats Overview</div>
                    <div className="viewSelector"><img src={icon2} alt="icon" />Social Records</div>
                    <div className="viewSelector"><img src={icon3} alt="icon" />Community Rep Network</div>
                    <div className="viewSelector"><img src={icon4} alt="icon" />Optimizations</div>
                    <br />
                    <div id="logOut"><img src={icon5} alt="icon" />Log Out</div>
                </div>
                {/* <div id="sidenav">
                    <div id="viewSelector1" title="Stats Overview"><img src={icon1} alt="icon" />Stats Overview</div>
                    <div id="viewSelector2"><img src={icon2} alt="icon" />Social Records</div>
                    <div id="viewSelector3"><img src={icon3} alt="icon" />Community Rep Network</div>
                    <div id="viewSelector4"><img src={icon4} alt="icon" />Optimizations</div>
                    <br />
                    <div id="logOut2"><img src={icon5} alt="icon" />Log Out</div>
                </div> */}
                {/* <SideDrawer/> */}
            </div>
        )
    }
}


export default LeftCol;