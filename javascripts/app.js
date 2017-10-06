var rover = {
  direction: "N",
  x : 0,
  y : 0,
  travelLog: []
};


function turnLeft(rover){
  console.log("turnLeft was called!");
  switch (rover.direction){
  case "N":
      rover.direction = "W";
      console.log("Rover is facing North and turns left => Rover is now facing West");
      break;
  case "S":
      rover.direction = "E";
      console.log("Rover is facing South and turns left => Rover is now facing East");
       break;
  case "W":
     rover.direction = "S";
     console.log("Rover is facing West and turns Left => Rover is now facing South");
       break;
  case "E":
     rover.direction = "N";
     console.log("Rover is facing East and turns Left => Rover is now facing North");
       break;
 }
}

function turnRight(rover){
   console.log("turnRight was called!");
   switch (rover.direction){
   case "N":
       rover.direction = "E";
      console.log("Rover is facing North and turns right => Rover is now facing East");
        break;
  case "S":
      rover.direction = "W";
      console.log("Rover is facing South and turns Right => Rover is now facing West");
        break;
   case "W":
      rover.direction = "N";
      console.log("Rover is facing West and turns Right => Rover is now facing North");
        break;
   case "E":
   rover.direction = "S";
   console.log("Rover is facing East and turns Right => Rover is now facing South");
 }
}

function moveForward(rover){
  console.log("moveForward was called");
 if (rover.x < 10 && rover.y < 10 && rover.x >= 0 && rover.y >= 0){
  switch(rover.direction){
    case "N":
      rover.travelLog.push(rover.x + ", " + rover.y);
      rover.y -= 1;
      console.log("rover’s coordinates: " + rover.x +", " + rover.y);
      break;
    case "S":
      rover.travelLog.push(rover.x + ", " + rover.y);
      rover.y += 1;
      console.log("rover’s coordinates: " + rover.x +", " + rover.y);
      break;
    case "W":
      rover.travelLog.push(rover.x + ", " + rover.y);
      rover.x -= 1;
      console.log("rover’s coordinates: " + rover.x +", " + rover.y);
      break;
    case "E":
      rover.travelLog.push(rover.x + ", " + rover.y);
      rover.x += 1;
      console.log("rover’s coordinates: " + rover.x +", " + rover.y);
      break;
  }
 }
}

function moveBackward(rover){
  console.log("moveBackward was called");
  if(rover.x < 10 && rover.y < 10 && rover.x >= 0 && rover.y >= 0){
  switch(rover.direction){
    case "N":
      rover.travelLog.push(rover.x + ", " + rover.y);
      rover.y += 1;
      console.log("rover’s coordinates: " + rover.x +", " + rover.y);
      break;
    case "S":
      rover.travelLog.push(rover.x + ", " + rover.y);
      rover.y -= 1;
      console.log("rover’s coordinates: " + rover.x +", " + rover.y);
      break;
    case "W":
      rover.travelLog.push(rover.x + ", " + rover.y);
      rover.x += 1;
      console.log("rover’s coordinates: " + rover.x +", " + rover.y);
      break;
    case "E":
      rover.travelLog.push(rover.x + ", " + rover.y);
      rover.x -= 1;
      console.log("rover’s coordinates: " + rover.x +", " + rover.y);
      break;
  }
 }
}

function commands(commandString){
  for(var i = 0; i < commandString.length; i++){
  var letterString = commandString.charAt(i);
    switch(letterString){
      case "l":
       turnLeft(rover);
        break;
      case "r":
       turnRight(rover);
        break;
      case "f":
      moveForward(rover);
        break;
      case "b":
      moveBackward(rover);
        break;
      default:
        console.log("this command doesn´t exist");
  }
 }
 console.log(rover.travelLog);
}
commands("rrflfrfrf");
