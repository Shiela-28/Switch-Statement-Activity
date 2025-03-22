// Prompt the user to enter a day of the week and convert the input to lowercase
let day = prompt("Enter a day of the week (e.g., Monday, Tuesday):").toLowerCase();

// Use a switch statement to check the entered day
switch (day) {
  case "monday": // Case for Monday
    console.log("Your task for Monday is: Finish your assignments."); 
    break; // Exit the switch statement

  case "tuesday": // Case for Tuesday
    console.log("Your task for Tuesday is: [Add Tuesday's task here]."); 
    break; 

  case "wednesday": // Case for Wednesday
    console.log("Your task for Wednesday is: [Add Wednesday's task here]."); 
    break; 

  case "thursday": // Case for Thursday
    console.log("Your task for Thursday is: [Add Thursday's task here]."); 
    break; 

  case "friday": // Case for Friday
    console.log("Your task for Friday is: [Add Friday's task here]."); 
    break; 

  case "saturday": // Case for Saturday
    console.log("Your task for Saturday is: [Add Saturday's task here]."); 
    break; 

  case "sunday": // Case for Sunday
    console.log("Your task for Sunday is: [Add Sunday's task here]."); 
    break; 

  default: // Default case if the input does not match any expected day
    console.log("Invalid input. Please enter a valid day of the week."); 
}