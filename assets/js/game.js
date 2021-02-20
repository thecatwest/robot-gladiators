// Game States
// "WIN" - Player robot has defeated all enemy-robots
//    * Fight all enemy robots
//    * Defeat each enemy robot
// "LOSE" - Player robot's health is zero or less

var playerName = prompt("What is your robot's name");
var playerHealth = 100;
var playerAttack = 100;
var playerMoney = 10;

var enemyNames = ["Bender Bending Ridriguez", "Flexo", "Femputer"];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames.length);

var fight = function(enemyName) {
  // alert("Welcome to Robot Gladiators!");
  while(enemyHealth > 0 && playerHealth > 0) {
    // Prompt the player to 'fight' or 'skip' battle
    var promptFight = prompt("Would you like to FIGHT or SKIP this battle? Enter 'Fight' or 'SKIP' to choose.");

    if (promptFight === "skip" || promptFight === "SKIP" || promptFight === "Skip") {
      // confirm player wants to skip
      var confirmSkip = confirm("Are you sure you'd like to quit?");

      // if yes (true), leave fight
      if (confirmSkip) {
        alert(`${playerName} has decided to skip this fight. Goodbye!`);
        // subtract money from playerMoney for skipping
        playerMoney = playerMoney - 10;
        console.log("playerMoney", playerMoney);

        break;
      }
    }

    // Subtract the value of 'playerAttack from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(`${playerName} attacked ${enemyName}, ${enemyName} now has ${enemyHealth} health remaining.`
    );
      
    // check enemy's health
    if (enemyHealth <= 0) {
      alert(`${enemyName} has died!`);

      // award player money for winning
      playerMoney = playerMoney + 20;
      console.log("playerMoney", playerMoney);

      // leave while() loop since enemy is dead
      break;
    } else {
      alert(`${enemyName} still has ${enemyHealth} health left.`);
    }

    // Subtract the value of 'enemyAttack from the value of 'playerHealth' and use that result to update the value in the 'playerHealth' variable
    playerHealth = playerHealth - enemyAttack;
    // Log a resulting message to the console so we know that it worked
    console.log(`${enemyName} attacked ${playerName}, ${playerName} now has ${playerHealth} health remaining.`);

    // check player's health
    if (playerHealth <= 0) {
      alert(`${playerName} has died!`);
      // leave while() loop if player is dead
      break;
    } else {
        alert(`${playerName} still has ${playerHealth} health left`);
      }
    }
  };

for (var i= 0; i < enemyNames.length; i++) {
  // if player is still alive, keep fighting
  if (playerHealth > 0) {
    alert(`Welcome to Robot Gladiators! Round ${i+1}`);

    // pick new enemy to fight based on index of enemyNames array
    var pickedEnemyName = enemyNames[i];

    // reset enemyHealth before starting new fight
    enemyHealth = 50;

    // debugger;

    // pass the pickedEnemyName variable's value into the fight funtion, where it will assume the enemyName parameter value
    fight(pickedEnemyName);
  }

  else {
    alert("You have lost your robot in battle! Game over!");
    break;
  } 
}
