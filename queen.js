// Checkpoint 1 | Creating the queen object
let queen = {
  direction: "s",
  position: [4, 0],

  whereabouts: [],
};
// Checkpoint 2 | Turning the queen
function queendirection() {
  console.log(queen);
}
function changedirection(direction) {
  switch (direction) {
    case "s":
      queen.direction = "south";
      break;
    case "n":
      queen.direction = "north";
      break;
    case "e":
      queen.direction = "east";
      break;
    case "w":
      queen.direction = "west";
      break;
    case "ne":
      queen.direction = "northeast";
      break;
    case "nw":
      queen.direction = "northwest";
      break;
    case "se":
      queen.direction = "southeast";
      break;
    case "sw":
      queen.direction = "southwest";
      break;
    default:
      console.log("enter valid direction");
      break;
  }
}
// Checkpoint 3 | Moving the queen
function moveForward() {
  switch (queen.direction) {
    case "n":
      queen.position[1] -= 1;
      break;
    case "s":
      queen.position[1] += 1;
      break;
    case "e":
      queen.position[0] += 1;
      break;
    case "w":
      queen.position[0] -= 1;
      break;
    case "ne":
      queen.position[0] += 1;
      queen.position[1] -= 1;
      break;
    case "nw":
      queen.position[0] -= 1;
      queen.position[1] -= 1;
      break;
    case "se":
      queen.position[0] += 1;
      queen.position[1] += 1;
      break;
    case "sw":
      queen.position[0] -= 1;
      queen.position[1] += 1;
      break;
  }
}
// Checkpoint 4 | Jump move the queen
function jumpMoveForward(steps) {
  while (steps > 0) {
    switch (queen.direction) {
      case "n":
        queen.position[1] -= 1;
        break;
      case "s":
        queen.position[1] += 1;
        break;
      case "e":
        queen.position[0] += 1;
        break;
      case "w":
        queen.position[0] -= 1;
        break;
      case "ne":
        queen.position[0] += 1;
        queen.position[1] -= 1;
        break;
      case "nw":
        queen.position[0] -= 1;
        queen.position[1] -= 1;
        break;
      case "se":
        queen.position[0] += 1;
        queen.position[1] += 1;
        break;
      case "sw":
        queen.position[0] -= 1;
        queen.position[1] += 1;
        break;
    }
    steps -= 1;
  }
}
// Checkpoint 5 |  Tracking the position
function updatePosition() {
  let lengths = queen.position.map((item) => item);
  queen.whereabouts.push(lengths);
}
// Bonus 1 - Gotta keep her in the battle!

// Bonus 2 - The queen is more powerful than what you think!

// Bonus 3 - How about multiple queens?
