// import monsterData from 

const battleAction = (e) => {
    e.preventDefault();
    let action = e.target.value;

    if (action === "attack") {
        console.log(action);
    } else if (action === "attack-with-defense") {
        console.log(action);
    } else if (action === "defense-with-attack") {
        console.log(action);
    } else {
        console.log(action);
    }
}

export default battleAction;