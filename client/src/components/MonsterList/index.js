import React from 'react';
import {Link} from 'react-router-dom';
import {Card, Row, Col} from 'react-bootstrap';

const MonsterList = ({
    monsters
}) => {
    if(!monsters.length) {
        return <p>No Monsters</p>;
    }

    return (
        <Row>
            {monsters.map((monster) => (
                <Col xs={12} sm={6} lg={3}>
                    <Card>
                        {/* <img className="card-img-top" src={monster.sprite}></img> */}
                        <Card.Title>
                            <p>{monster.name}</p>
                        </Card.Title>
                        <Card.Body>
                            <p>Level: {monster.level}</p>
                            <p>HP: {monster.hp}</p>
                            <p>STR: {monster.str}</p>
                            <p>DEF: {monster.def}</p>
                            <p>SPD: {monster.spd}</p>
                            <p>SWG: {monster.swg}</p>
                            <p>Wins: {monster.wins}</p>
                            <p>Losses: {monster.losses}</p>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );
};

export default MonsterList;