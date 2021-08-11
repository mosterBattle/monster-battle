import React from 'react';
import background from '../assets/background/arcade-game-world-pixel-scene/45908.jpg';
import character from '../assets/Bot Wheel/monsterBattle1.png';
import '../assets/css/battlefield.css';
function Battlefield() {
    return (
        <div className='background' style={{backgroundImage:`url(${background})`}}>
            <div>
                <img className='left-character' src={character} alt='character'/>
            </div>
        </div>
    );
}

export default Battlefield;