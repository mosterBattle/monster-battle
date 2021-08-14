import React from 'react';
import '../assets/css/font.css';
import '../assets/css/actionsList.css';
import battleAction from '../utils/gamelogic.js';

function ActionsList() {
    return (
        <form onSubmit={battleAction} className='actions-list'>
            <ul>
                <li type="submit">
                    <h2>All-out Attack</h2>
                    <p >100 attck damage, 0 defense</p>
                </li>
                <li type="submit">
                    <h2>Defending Attack</h2>
                    <p>75 attack damage, 25 defense</p>
                </li>
                <li type="submit">
                    <h2>Attacking defense</h2>
                    <p>25 attack damage, 75 defense</p>
                </li>
                <li type="submit">
                    <h2>All-out Defense</h2>
                    <p>0 atack damage, 100 defense</p>
                </li>
            </ul>
        </form>
    );
}

export default ActionsList;