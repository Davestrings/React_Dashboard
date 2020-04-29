import React, { Component } from 'react';
import './ContainerStyle.css';
import RightCol from './RightCol';
import LeftCol from './LeftCol';
import SideDrawer from './sideDrawer';
import Backdrop from './Backdrop';
import MyToggler from './MyToggler';



class StatsContainer extends Component {
    state = {
        sideDrawerOpen: false
    };
    ToggleClickHandler = () =>{
        this.setState((prevState) =>{
            return{sideDrawerOpen: !prevState.sideDrawerOpen};
        });
    }
    backdropClickHandler = () =>{
        this.setState({sideDrawerOpen: false});
    }
    render() {
        let backdrop;
        if(this.state.sideDrawerOpen){
            backdrop =  <Backdrop backdropClick= {this.backdropClickHandler}/>
        }
        return (
            <div id="inner-contain">
                <div>
                    <LeftCol />
                    <SideDrawer showSideBar={this.state.sideDrawerOpen}/>
                    {backdrop}
                    {/* <Backdrop backdropClick= {this.backdropClickHandler}/> */}
                    <MyToggler clickHandler={this.ToggleClickHandler}/>
                </div>
                <div>
                    <RightCol />
                </div>

            </div>
        )
    }
}

export default StatsContainer;