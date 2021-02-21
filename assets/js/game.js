var playerName = prompt("What is your robot's name");
var playerHealth = 100;
var playerAttack = 50;
var playerMoney = 10;

var enemyNames = ["Bender Bending Ridriguez", "Flexo", "Femputer"];
var enemyHealth = 50;
var enemyAttack = 12;

// function to start a new game
var startGame = function() {
  // reset player stats
  playerHealth = 100;
  playerAttack = 50;
  playerMoney = 10;

  // fight each enemy robot by looping over them and fighting them one at a time
  for (var i= 0; i < enemyNames.length; i++) {
    // if player is still alive, keep fighting
    if (playerHealth > 0) {
      // let player know what round they are in
      alert(`Welcome to Robot Gladiators! Round ${i+1}`);
      
      // pick new enemy to fight based on index of enemyNames array
      var pickedEnemyName = enemyNames[i];

      // reset enemyHealth before starting new fight
      enemyHealth = 50;

      // pass the pickedEnemyName variable's value into the fight funtion, where it will assume the enemyName parameter value
      fight(pickedEnemyName);
    }
    // if player is not alive, break out of loop and let endGame function run
    else {
      break;
    } 
  }

  // play again
  endGame();
};

// function to end the entire game
var endGame = function() {
  alert("The game has now ended. Let's see how you did!");

  // if we're not at the last enemy in the array
  if (playerHealth > 0) {
    alert(`Great job, you've survived the game! You now have a score of ${playerMoney}.`);
  } else {
    alert("You've lost your robot in battle!");
  }

  // ask player if they'd like to play again
  var playAgainConfirm = confirm("Would you like to play again?");

  if (playAgainConfirm) {
    startGame();
  } else {
    alert("Thank you for playing Robot Gladiators! Come back soon!");
  }
};

// fight function
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
        shop();
        break;
      }
    }

    // Subtract the value of 'playerAttack from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(
      `${playerName} attacked ${enemyName}, ${enemyName} now has ${enemyHealth} health remaining.`
    );
      
    // check enemy's health
    if (enemyHealth <= 0) {
      alert(`${enemyName} has died!`);

      // award player money for winning
      playerMoney = playerMoney + 20;

      // ask if player wants to use the store before next round
      var storeConfirm = confirm("The fight is over, visit the store before the next round?");

      // if yes, take them to the store() function
      if (storeConfirm) {
        shop();
      }

      // leave while() loop since enemy is dead
      break;
    } else {
      alert(`${enemyName} still has ${enemyHealth} health left.`);
    }

    // Subtract the value of 'enemyAttack from the value of 'playerHealth' and use that result to update the value in the 'playerHealth' variable
    playerHealth = playerHealth - enemyAttack;
    console.log(
      `${enemyName} attacked ${playerName}, ${playerName} now has ${playerHealth} health remaining.`
      );

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

// add shop function
var shop = function() {
  // ask player what they'd like to do
  var shopOptionPrompt = prompt(
    `Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one, "REFILL", "UPGRADE", or "LEAVE".`
    );

  // use switch case to carry out action
  switch (shopOptionPrompt) {
    case "refill":
    case "REFILL":
    case "Refill":
      alert("Refilling player's health by 20 for 7 dollars.");
      playerHealth += 20;
      playerMoney -= 7;
      break;
    case "upgrade":
    case "UPGRADE":
    case "Upgrade":
      alert("Upgrading player's attack by 6 for 7 dollars.");
      playerAttack += 6;
      playerMoney -= 7;
      break;
    case "leave":
    case "LEAVE":
    case "Leave":
      alert("Leaving the store.");
      break;
    default:
      alert("You did not pick a valid option. Try again.");
      shop();
      break;
  }
};

// start the game when the page loads
startGame();
