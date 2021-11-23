var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
console.log(playerName);
console.log(" This logs a string, good for leaving yourself a message ");
console.log(10 + 10);
console.log(" Our robot's name is " + playerName);
console.log(playerName, playerAttack, playerHealth);
var enemyName = " Roborto ";
var enemyHealth = 50;
var enemyAttack = 10;

var fight = function() {
    window.alert(" Welcome to Robot Gladiators! ");
};
fight();
console.log(
    playerName + " attacked " + enemyName + "." + enemyName + " now has " + enemyHealth + " health remaining. "
);
if(enemyHealth <= 0) {
    window.alert(enemyName + " has died! ");
}
else {
    window.alert(enemyName + " still has " + enemyHealth + " health left. ");
}
console.log(
    enemyName + " attacked " + playerName + "." + playerName + " now has " + playerHealth + " health remaining. "
);
if(playerHealth <=0) {
    window.alert(playerName + " has died ");
}
else {
    window.alert(playerName + " still has " + playerHealth + " health left.");
}
var playerHealth = 100;
if (playerHealth > 0) {
    console.log(" Your player is still alive! ");
}