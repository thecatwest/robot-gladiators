console.log("Things aren't working...");

// function to start a new game
var startGame = function() {
  // reset player stats
  playerInfo.reset();

  // fight each enemy robot by looping over them and fighting them one at a time
  for (var i= 0; i < enemyInfo.length; i++) {
    // if player is still alive, keep fighting
    if (playerInfo.health > 0) {
      // let player know what round they are in
      alert(`Welcome to Robot Gladiators! Round ${i+1}`);
      
      // pick new enemy to fight based on index of enemyNames array
      var pickedEnemyObj = enemyInfo[i];

      // reset enemy.health before starting new fight
      pickedEnemyObj.health = randomNumber(40, 60);

      // pass the pickedEnemyName variable's value into the fight funtion, where it will assume the enemyName parameter value
      fight(pickedEnemyObj);
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
  if (playerInfo.health > 0) {
    alert(`Great job, you've survived the game! You now have a score of ${playerInfo.money}.`);
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

var fightOrSkip = function() {
  // Prompt the player to 'fight' or 'skip' battle
  var promptFight = prompt("Would you like to FIGHT or SKIP this battle? Enter 'Fight' or 'SKIP' to choose.");

  // Conditionall Recursive Function Call
  if (!promptFight) {
    alert("You need to provide a valid answer! Please try again.");
    return fightOrSkip();
  }
  
  promptFight = promptFight.toLowerCase();

  if (promptFight === "skip") {
    // confirm player wants to skip
    var confirmSkip = confirm("Are you sure you'd like to quit?");

    // if yes (true), leave fight
    if (confirmSkip) {
      alert(`${playerInfo.name} has decided to skip this fight. Goodbye!`);
      // subtract money from playerInfo.money for skipping
      playerInfo.money = Math.max(0, playerInfo.money - 10);

      // return true if player wants to leave
      return true;
    }

    // if no (false), return to fight
    if (!confirmSkip) {
      alert("You have decided to fight this battle!");
      
      // return false if player wants to battle
      return false;
    }
    //   shop();
    // }
  }
}
// fight function
var fight = function(enemy) {
  console.log(enemy);
  // alert("Welcome to Robot Gladiators!");
  while(enemy.health > 0 && playerInfo.health > 0) {
    // ask player if theyd' like to fight or skip using fightOrSkip function
    if (fightOrSkip()) {
      // if true, leave fight by breaking loop
      break;
    }

    var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

    enemy.health = Math.max(0, enemy.health - damage);
    console.log(
      `${playerInfo.name} 
      attacked 
      ${enemy.name}, 
      ${enemy.name} 
      now has 
      ${enemy.health} 
      health remaining.`
    );
      
    // check enemy's health
    if (enemy.health <= 0) {
      alert(`${enemy.name} has died!`);

      // award player money for winning
      playerInfo.money = playerInfo.money + 20;

      // ask if player wants to use the store before next round
      var storeConfirm = confirm("The fight is over, visit the store before the next round?");

      // if yes, take them to the store() function
      if (storeConfirm) {
        shop();
      }

      // leave while() loop since enemy is dead
      break;
    } else {
      alert(`${enemy.name} still has ${enemy.health} health left.`);
    }

    // Subtract the value of 'enemyAttack from the value of 'playerInfo.health' and use that result to update the value in the 'playerInfo.health' variable
    var damage = randomNumber(enemy.attack -3, enemy.attack);
    
    playerInfo.health = Math.max(0, playerInfo.health - damage);
    console.log(
      `${enemy.name} 
      attacked 
      ${playerInfo.name}, 
      ${playerInfo.name} 
      now has 
      ${playerInfo.health} 
      health remaining.`
      );

    // check player's health
    if (playerInfo.health <= 0) {
      alert(`${playerInfo.name} has died!`);
      // leave while() loop if player is dead
      break;
    } else {
      alert(`${playerInfo.name} still has ${playerInfo.health} health left`);
    }
  }
};

// add shop function
var shop = function() {
  // ask player what they'd like to do
  var shopOptionPrompt = prompt(
    `Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 1 for REFILL, 2 for UPGRADE, or 3 for LEAVE.`
    );

  // convert string to integer
  shopOptionPrompt = parseInt(shopOptionPrompt);

  // use switch case to carry out action
  switch (shopOptionPrompt) {
    case 1:
      playerInfo.refillHealth();
      break;
    case 2:
      playerInfo.upgradeAttack();
      break;
    case 3:
      alert("Leaving the store.");
      break;
    default:
      alert("You did not pick a valid option. Try again.");
      shop();
      break;
  }
};

// function to generate a random numeric value
var randomNumber = function(min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);

  return value;
};
/* END GAME FUNCTIONS */

/* GAME INFORMATION / VARIABLES */

// function to set name
var getPlayerName = function() {
  var name = "";

  while (name === "" || name === null) {
    name = prompt("What is your robot's name?");
  }

  console.log(`Your robot's name is ${name}`);
  return name;
};

// player information
var playerInfo = {
  name: getPlayerName(),
  health: 100,
  attack: 10,
  money: 10,
  reset: function() {
    this.health = 100;
    this.attack = 10;
    this.money = 10;
  },
  refillHealth: function() {
    if (this.money >= 7) {
      alert("Refilling player's health by 20 for 7 dollars.");
      this.health += 20;
      this.money -= 7;
    }
    else {
      alert("You don't have enough money!");
    }
  },
  upgradeAttack: function() {
    if (this.money >= 7) {
    alert("Upgrading player's attack by 6 for 7 dollars.");
      this.attack +=6;
      this.money =- 7;
    }
    else {
      alert("You don't have enough money!");
    }
  }
};

// enemy information
var enemyInfo = [
  {
    name: "Bender Bending Ridriguez",
    attack: randomNumber(10, 14)
  },
  {
    name:"Flexo",
    attack: randomNumber(10, 14)
  },
  {
    name:"Femputer",
    attack: randomNumber(10, 14)
  }
];

console.log(enemyInfo);
console.log(enemyInfo[0]);
console.log(enemyInfo[0].name);
console.log(enemyInfo[0]["attack"]);

/* END GAME INFORMATION / VARIABLES */

/* RUN GAME */
startGame();
