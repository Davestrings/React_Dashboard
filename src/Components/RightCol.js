import React, { Component } from 'react';
import arrow from './SVGs/arrowDown.svg';
import arrowUp from './SVGs/arrowUp.svg';
import view1 from './SVGs/view1.svg';
import graphView from './SVGs/graphView.svg';
import graphView3 from './SVGs/graphView3.svg';
import graphShadow1 from './SVGs/graphShadow1.svg';
import graphShadow2 from './SVGs/graphShadow2.svg';
import graphShadow3 from './SVGs/graphShadow3.svg';


class RightCol extends Component {
    render() {
        return (
            <div>
                <h1 id="title">Stats Overview</h1>
                <div id="box-container">
                    <div className="box">
                        <h5>Resources in circulation</h5>
                        <div className="figures">506,900<img id="arrowup1" src={arrowUp} alt="icon" /></div>
                    </div>
                    <div className="box">
                        <h5>Donations</h5>
                        <div className="figures">5.55B<img id="arrowup2" src={arrowUp} alt="icon" /></div>
                    </div>
                    <div className="box">
                        <h5>Customer Rep on Field</h5>
                        <div className="figures">33,764<img id="arrowdown" src={arrow} alt="icon" /></div>
                    </div>
                    <div className="box" id="img-box1">
                        <h5>Rate of resource production</h5>
                        <div className="graph"><img id="img1" src={view1} alt="icon" /><img id="imgShadow1" src={graphShadow1} alt="icon" /></div>
                    </div>
                    <div>
                        <div className="divider"></div>
                        <div className="box" id="img-box2">
                            <h5>Rate of fulfillment</h5>
                            <div className="graph"><img id="img2" src={graphView} alt="icon" /><img id="imgShadow2" src={graphShadow2} alt="icon" /></div>
                        </div>
                    </div>
                    <div>
                    <div className="divider"></div>
                    <div className="box" id="img-box3">
                        <h5>Covid infection rate</h5>
                        <div className="graph"><img id="img3" src={graphView3} alt="icon" /><img id="imgShadow3" src={graphShadow3} alt="icon" /></div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default RightCol;