import React, {Component} from 'react';
import './ContainerStyle.css';
import StatsContainer from './StatsContainer';
import Container from 'react-bootstrap/Container';



class MyContainer extends Component{
    render(){
        return(
            <div style={{height:'100%'}} id="contain2">
                <Container fluid>
                    <StatsContainer/>
                </Container>
            </div>
        )
    }
}



export default MyContainer;
