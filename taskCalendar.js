let day = prompt("Enter a day of the week (e.g., Monday, Tuesday):").toLowerCase();

switch (day) {
  case "monday":
    console.log("Your task for Monday is: Finish your assignments.");
    break;
  case "tuesday":
    console.log("Your task for Tuesday is: [Add Tuesday's task here].");
    break;
  case "wednesday":
    console.log("Your task for Wednesday is: [Add Wednesday's task here].");
    break;
  case "thursday":
    console.log("Your task for Thursday is: [Add Thursday's task here].");
    break;
  case "friday":
    console.log("Your task for Friday is: [Add Friday's task here].");
    break;
  case "saturday":
    console.log("Your task for Saturday is: [Add Saturday's task here].");
    break;
  case "sunday":
    console.log("Your task for Sunday is: [Add Sunday's task here].");
    break;
    console.log("Invalid day entered.");
}