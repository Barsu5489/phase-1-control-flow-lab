function scuberGreetingForFeet(figure)
{
  let outcome
  if (figure <= 400)
  {
    outcome = 'This one is on me!';
  }
  else if (figure > 2000 && figure <= 2500)
  {
    outcome = 'I will gladly take your thirty bucks.';
  }
  else if (figure > 2500)
  {
    outcome = 'No can do.';
  }
  return (outcome);
}

function ternaryCheckCity(city)
{
  let destination;
  destination = city === "NYC" ?  "Ok, sounds good." : "No go.";
  return (destination);
}

function switchOnCharmFromTip(tip)
{
  
  switch (tip) 
  {
    case "generous":
      return ("Thank you so much.");
       
    case "not as generous":
      return ("Thank you.");
  
    default: 
      return ("Bye.");
      break;
  }
}