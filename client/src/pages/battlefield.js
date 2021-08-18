import React from 'react';
import Title from "../components/title";

import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { QUERY_SINGLE_MONSTER } from '../utils/queries';
import { battleAction } from '../utils/gamelogic.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Row, Col, Button} from 'react-bootstrap';
import '../assets/css/reset.css';
import '../assets/css/battlefield.css';
import '../assets/css/font.css';

import character from '../assets/Bot Wheel/botWheel.png';
import character2 from '../assets/Spirit Boxer/spiritBoxer.png';

function Battlefield() {
    const {monsterId} = useParams();
    
    const {loading, data} = useQuery(QUERY_SINGLE_MONSTER, {
        variables: {monsterId: monsterId},
    });

    console.log("Fetched data: ")
    console.log(data)

    return (
        <div>
            <Title></Title>
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
                    <Col xs={12} sm={6} lg={3}><Button variant="outline-primary" data-attack="100" data-defense="0" value="attack" onClick={battleAction}>Test Action 1</Button>{' '}</Col>
                    <Col xs={12} sm={6} lg={3}><Button variant="outline-danger" data-attack="75" data-defense="25" value="attack-with-defense" onClick={battleAction}>Test Action 2</Button></Col>
                    <Col xs={12} sm={6} lg={3}><Button variant="outline-success" data-attack="25" data-defense="75" value="defense-with-attack" onClick={battleAction}>Test Action 3</Button></Col>
                    <Col xs={12} sm={6} lg={3}><Button variant="outline-warning" data-attack="0" data-defense="100" value="defense" onClick={battleAction}>Test Action 4</Button></Col>
                </Row>
                {/* <Row>
                    <Col xs={12}><Button variant="secondary">Next Round</Button></Col>
                </Row> */}
            </Card.Body>
        </Card>    
        </div>
    );
  }

  return (
    <Card bg={"dark"}>
      <Card.Body>
        <div className="background">
          <div className="characterWrapper">
            <img className="monster" src={character} alt="character" />
            <img
              className="monster switchView"
              src={character2}
              alt="character2"
            />
          </div>
        </div>
      </Card.Body>
      <Card.Body>
        <Row>
          <Col xs={12}>
            <p className="ingameText">
              {user.username} owns {user.monsters[0].name}!
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={6} lg={3}>
            <Button
              variant="outline-primary"
              data-attack="0"
              data-hp={user.monsters[0].hp}
              data-str={user.monsters[0].str}
              data-def={user.monsters[0].def}
              data-spd={user.monsters[0].spd}
              data-swg={user.monsters[0].swg}
              onClick={battleAction}
            >
              Attack
            </Button>
          </Col>
          <Col xs={12} sm={6} lg={3}>
            <Button
              variant="outline-danger"
              data-attack="1"
              data-hp={user.monsters[0].hp}
              data-str={user.monsters[0].str}
              data-def={user.monsters[0].def}
              data-spd={user.monsters[0].spd}
              data-swg={user.monsters[0].swg}
              onClick={battleAction}
            >
              Defend While Attacking
            </Button>
          </Col>
          <Col xs={12} sm={6} lg={3}>
            <Button
              variant="outline-warning"
              data-attack="2"
              data-hp={user.monsters[0].hp}
              data-str={user.monsters[0].str}
              data-def={user.monsters[0].def}
              data-spd={user.monsters[0].spd}
              data-swg={user.monsters[0].swg}
              onClick={battleAction}
            >
              Attack While Defending
            </Button>
          </Col>
          <Col xs={12} sm={6} lg={3}>
            <Button
              variant="outline-success"
              data-attack="3"
              data-hp={user.monsters[0].hp}
              data-str={user.monsters[0].str}
              data-def={user.monsters[0].def}
              data-spd={user.monsters[0].spd}
              data-swg={user.monsters[0].swg}
              onClick={battleAction}
            >
              Defend
            </Button>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Button variant="secondary">Next Round</Button>
          </Col>
        </Row>
      </Card.Body>
      <audio controls autoPlay loop>
        <source src="/audio/game-audio.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </Card>
  );
}

export default Battlefield;
