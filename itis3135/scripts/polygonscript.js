

var shapeSides = getNumber();
var i = 0;
while (i == 0) {
 if (validateEntry(shapeSides)) 
{
 var shape = getShape(shapeSides);
 alert(shape);
i = 1;
 }
else 
 {
 shapeSides = getError();
    }
}

function getNumber()
{
    var polygonNumber =parseFloat(prompt("Emotional Whale Designers welcome you! please enter number between 0 to 10 and we will tell name of polygon of that sides"));
    return polygonNumber;

} 
function getError() 
{
    var polygonNumber = parseFloat(prompt("It looks like you typed in an invalid entry. Please type in a number 0 through 10."));
    return polygonNumber;
}

function getShape(sides){
    sides = Math.round(Math.abs(sides));

    if (sides == 0){
    sides ="A polygon with this many sides does not exis";
 
    }
    else if(sides ==1){
    sides ="A polygon with 1 side is a Henagon";
    }

    else if(sides ==2){
    sides ="A polygon with 2 side is a Digon";
  
    }

    else if(sides ==3){
    sides ="A polygon with 3 side is a Trigon";
   
    }

    else if(sides ==4){
     sides ="A polygon with 4 side is a Tetragon";
  
     }

     else if(sides ==5){
     sides ="A polygon with 5 side is a pentagon";

    }
    else if(sides ==6){
    sides ="A polygon with 6 side is a Hexagon";
 
    }
    else if(sides ==7){
    sides ="A polygon with 7 side is a Heptagon";
  
        }

    else if(sides ==8){
     sides ="A polygon with 8 side is a Octagon";
    
    }
    else if(sides ==9){
    sides ="A polygon with 9 side is a Nonagon";
  
       }

    else if(sides ==10){
    sides ="A polygon with 10 side is a Decagon";
    

       }
       return sides;
    }


    function validateEntry(sides) 
   {
    if (typeof sides == 'number') 
    {
   if (sides >= -10 && sides <= 10) 
    {
     return (sides == sides);
    }
    }
}
    

 

