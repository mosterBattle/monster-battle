import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import character from '../assets/Bot Wheel/botWheel.png';
import character2 from '../assets/Spirit Boxer/spiritBoxer.png';
import '../assets/css/battlefield.css';
import '../assets/css/reset.css';
import { battleAction } from '../utils/gamelogic.js';
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';
import Title from '../components/title';
import Victory from '../components/winscreen';

function Battlefield() {    

    const { loading, data } = useQuery(QUERY_USER, {
        variables: { username: "Dylan Cole"}
    });
  
    const user = data?.me || data?.user || {};
  
    if (loading) {
      return <div>Loading...</div>;
    }
    if (!user?.username) {
      return (
        <h4>
          You need to be logged in to see this. Use the navigation links above to
          sign up or log in!
        </h4>
      );
    }

    return (            
        <Card bg={'dark'}>
            <Title />
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
                        <p className="ingameText">{user.username} owns {user.monsters[0].name}!</p>
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
                        onClick={battleAction}>Attack</Button>
                    </Col>
                    <Col xs={12} sm={6} lg={3}>
                        <Button variant="outline-danger" 
                        data-attack="1"  
                        data-hp={user.monsters[0].hp}
                        data-str={user.monsters[0].str}
                        data-def={user.monsters[0].def}
                        data-spd={user.monsters[0].spd}
                        data-swg={user.monsters[0].swg}
                        onClick={battleAction}>Defend While Attacking</Button>
                    </Col>
                    <Col xs={12} sm={6} lg={3}>
                        <Button variant="outline-warning"
                        data-attack="2" 
                        data-hp={user.monsters[0].hp}
                        data-str={user.monsters[0].str}
                        data-def={user.monsters[0].def}
                        data-spd={user.monsters[0].spd}
                        data-swg={user.monsters[0].swg}
                        onClick={battleAction}>Attack While Defending</Button>
                        </Col>
                    <Col xs={12} sm={6} lg={3}>
                        <Button variant="outline-success" 
                        data-attack="3" 
                        data-hp={user.monsters[0].hp}
                        data-str={user.monsters[0].str}
                        data-def={user.monsters[0].def}
                        data-spd={user.monsters[0].spd}
                        data-swg={user.monsters[0].swg}
                        onClick={battleAction}>Defend</Button>
                    </Col>
                </Row>
                <Row>
                    <Victory userId={user._id}/>
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