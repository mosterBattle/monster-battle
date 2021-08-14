import React from 'react';
// import background from '../assets/background/arcade-game-world-pixel-scene/45908.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import character from '../assets/Bot Wheel/botWheel.png';
import character2 from '../assets/Spirit Boxer/spiritBoxer.png';
import '../assets/css/battlefield.css';
import '../assets/css/reset.css';


function Battlefield() {
    return (
        <Card bg={'dark'}>
            <Card.Body>
                <div className='background'>
                    <div className="characterWrapper">
                    <img className='monster' src={character} alt='character'/>
                    <img className='monster switchView' src={character2} alt='character2'/>
                    </div>
                </div> 
            </Card.Body>
            <Card.Body>
                <Row>
                    <Col xs={12}>
                        <p className="ingameText">Sample game text here!</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={6} lg={3}><Button variant="outline-primary">Test Action 1</Button>{' '}</Col>
                    <Col xs={12} sm={6} lg={3}><Button variant="outline-danger">Test Action 2</Button></Col>
                    <Col xs={12} sm={6} lg={3}><Button variant="outline-success">Test Action 3</Button></Col>
                    <Col xs={12} sm={6} lg={3}><Button variant="outline-warning">Test Action 4</Button></Col>
                </Row>
                <Row>
                    <Col xs={12}><Button variant="secondary">Next Round</Button></Col>
                </Row>
            </Card.Body>
        </Card>    
    );
}

export default Battlefield;