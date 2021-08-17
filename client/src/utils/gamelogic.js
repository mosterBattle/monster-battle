// import React from 'react';
// import { useParams } from 'react-router-dom';
// import { QUERY_USER, QUERY_ME } from '../utils/queries';
// import { useQuery } from '@apollo/client';


// Future dev: create a function for each attack and pass it in to the onclick event handler on the  page...

let userMonster = {
    hp: 1000,
    str: 100,
    def: 88,
    spd: 120,
    swg: 69
}

let botMonster = {
    hp: 900,
    str: 100,
    def: 60,
    spd: 120,
    swg: 420
}

let round = 0;

// Just checking to see what the total stat points are for each monster
// let totalPoints = (monsterObj) => {
//     let sum = 0;
//     for( let el in monsterObj ) {
//         if( monsterObj.hasOwnProperty( el ) ) {
//         sum += parseFloat( monsterObj[el] );
//         }
//     }
//     return sum;
// }

// gives monsters bonuses based on their stats which depend on the round type
// Also, keeps track of which round it is. 
const roundMod = (monster) => {

    let rounds = ["str", "def", "spd", "swg"];

    if (rounds[round] === "str") return monster.str;
    else if (rounds[round] === "def") return monster.def;
    else if (rounds[round] === "spd") return monster.spd;
    else return monster.swg;
}

// the calculated damage done by the attack. pass in attcking monster
const attackDmg = (monster, dmgMod, roundMod) => {
    let attackDmg = Math.round((dmgMod * monster.str) * (roundMod * .03));
    return attackDmg;
}
// the calculated damage blocked by the action
const defense = (monster, defMod, roundMod) => {
    let defense = Math.round((defMod * monster.def) * (roundMod * .03));
    return defense;
} 


// updates hp of attacked monster
// ad = attack damage
// for monster, pass in the monster being attacked
const applyDamage = (ad, def, monster) => {
    let totalDmg = ad - def;
    if (totalDmg < 0) totalDmg = 0;

    monster.hp = monster.hp - totalDmg;
    console.log(`you hit your oppenent for ${totalDmg}. They now have ${monster.hp} hp.`)
}


const botAction = () => {
    // atkx = attack multiplier
    // defx = defense multiplier
    const allOutAtk = {
        atkx: 1,
        defx: 0,
    }
    // defensive attck
    const defAtk = {
        atkx: .75,
        defx: .25,
    }
    // attacking defense
    const Atkdef = {
        atkx: .5,
        defx: .5,
    }
    // full defense
    const allOutDef = {
        atkx: .25,
        defx: .25,
    }

    const actions = [
        allOutAtk,
        defAtk,
        Atkdef,
        allOutDef,
    ];

    let action = actions[Math.floor(Math.random()*actions.length)];

    let botRoundmod = roundMod(botMonster)

    applyDamage(attackDmg(botMonster, action.atkx, botRoundmod), defense(userMonster, action.defx, botRoundmod), userMonster);
}

const battle = () => {
    if (round > 3) round = 0;
    // checks to see if both Monsters are still alive and handles when one or both monsters die
    if(userMonster.hp <= 0 && botMonster.hp > 0) {
        console.log('you lose');
        // update user profile with a loss
    } else if (userMonster.hp > 0 && botMonster.hp <= 0) {
        console.log('you win!');
        // update user profile with a win
    } else if (userMonster.hp < 0 && botMonster.hp < 0) {
        if (userMonster.spd > botMonster.spd) {
            console.log('you win!! It was a close game but your monster was faster');
            // update user profile with a win
        } else if (userMonster.spd < botMonster.spd) {
            console.log('It was a close fight but in the end, your opponent\'s monster was faster. You lose.');
            // update user profile with a loss
        }
    }
    ++round;
}

export const battleAction = (e) => {
    e.preventDefault();
    // the chosen actions damage and defense modifiers. gets 100, 75, 25, 0 percent of str
    let actionDmgMod = parseInt(e.target.getAttribute("data-attack")) / 100;
    let defenseMod = parseInt(e.target.getAttribute("data-defense")) / 100;

    let playerRoundMod = roundMod(userMonster);

    applyDamage(attackDmg(userMonster, actionDmgMod, playerRoundMod), defense(botMonster, defenseMod, playerRoundMod), botMonster);
    // console.log(`you hit your oppenent for ${}. They now have ${botMonster.hp} hp.`)

    // TODO: create random action choice for bot monster
    botAction();
    battle();
}
