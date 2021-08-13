import React from 'react';
import character from '../assets/Bot Wheel/botWheel.png';
import character2 from '../assets/Spirit Boxer/spiritBoxer.png';
import '../assets/css/battlefield.css';
import '../assets/css/reset.css';

function Battlefield() {
    return (
        <div className='background'>
            <div className="characterWrapper">
                <img className='monster' src={character} alt='character'/>
                <img className='monster switchView' src={character2} alt='character2'/>
            </div>
        </div>
    );
}

export default Battlefield;