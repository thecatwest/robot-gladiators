// Game States
// "WIN" - Player robot has defeated all enemy-robots
//    * Fight all enemy-robots
//    * Defeat each enemy-robot
// "LOSE" = Player robot's health is zero or less

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// console.log("player:", playerName);
// console.log("attack:", playerAttack);
// console.log("health:", playerHealth);
// console.log("money:", playerMoney);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames.length);

console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[3]);

// fight function
var fight = function (enemyName) {
  while (enemyHealth > 0 && playerHealth > 0) {
    // ask if player would like to 'FIGHT' or 'SKIP' this battle
    var promptFight = window.prompt(
      "Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose."
    );

    // if player chooses 'SKIP' confirm and skip loop
    if (
      promptFight === "skip" ||
      promptFight === "SKIP" ||
      promptFight === "Skip"
    ) {
      // confirm skip
      var confirmSkip = window.confirm("Are you sure you'd like to skip?");

      // if yes (true), leave fight
      if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        // deduct money from playerMoney for skipping fight
        playerMoney = playerMoney - 10;
        console.log("playerMoney:", playerMoney);
        break;
      }
    }

    // remove enemy's health by subtracting the amount set in playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(
      playerName +
        " attacked " +
        enemyName +
        ". " +
        enemyName +
        " now has " +
        enemyHealth +
        " remaining."
    );

    // check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + " has died.");
     
      // award player money for winning fight
      playerMoney = playerMoney + 20;

      // leave while() loop since enemy is dead
      break;
    } else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    // remove player's health by subtracting amound set in enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyName +
        " attacked " +
        playerName +
        ". " +
        playerName +
        " now has " +
        playerHealth +
        " health left."
    );

    // check player's health
    if (playerHealth <= 0) {
      window.alert(playerName + " has died.");
      // leave while() loop if player is dead
      break;
    } else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }
  }
};

// fight each enemy-bot by looping over them in an array and fighting them one at a time
for (var i = 0; i < enemyNames.length; i++) {
  var pickedEnemyName = enemyNames[i];
  enemyHealth = 50;
  fight(pickedEnemyName);
}
// if player is still alive, keep fighting
if (playerHealth > 0) {
  // let player know which round they are in. Add 1 to array index number
  window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

  // pick new enemy to fight based on index of enemy array
  var pickedEnemyName = enemyNames[i];

  // reset enemyHealth for each bot before starting next fight
  // enemyHealth = 50;

  // use debugger to pause script from running and check what's going on at that moment in code
  debugger;

  // pass pickedEnemyName variable's value into fight function, where it will assume value of enemyName parameter
  fight(pickedEnemyName);
}
// if player is dead, stop game
else {
  window.alert("You have lost your robot in battle! Game Over!");
}
