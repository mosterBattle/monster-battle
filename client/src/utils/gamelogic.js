// Future dev: create a function for each attack and pass it in to the onclick event handler on the  page...

// let userMonster = {
//     hp: 1000,
//     str: 100,
//     def: 88,
//     spd: 120,
//     swg: 69
// }

let botMonster = {
    hp: 900,
    str: 100,
    def: 60,
    spd: 120,
    swg: 420
}

let round = 0;

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
    // console.log(userMonster);
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


const botAction = (userMonster) => {
    let action = actions[Math.floor(Math.random()*actions.length)];

    let botRoundmod = roundMod(botMonster)

    applyDamage(attackDmg(botMonster, action.atkx, botRoundmod), defense(userMonster, action.defx, botRoundmod), userMonster);
}

const battle = (userMonster) => {
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
    let userMonster = {
        hp: e.target.getAttribute("data-hp"),
        str: e.target.getAttribute("data-str"),
        def: e.target.getAttribute("data-def"),
        spd: e.target.getAttribute("data-spd"),
        swg: e.target.getAttribute("data-swg")
    }
    // e.preventDefault();
    // the chosen actions damage and defense modifiers. gets 100, 75, 25, 0 percent of str
    let actionMod = actions[parseInt(e.target.getAttribute("data-attack"))];

    let playerRoundMod = roundMod(userMonster);

    applyDamage(attackDmg(userMonster, actionMod.atkx, playerRoundMod), defense(botMonster, actionMod.defx, playerRoundMod), botMonster);

    botAction(userMonster);
    battle(userMonster);
}
