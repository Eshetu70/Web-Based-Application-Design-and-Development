

function polygonPara(){ 
    document.getElementById("date").innerHTML = "Today is " + shapeSides ;
    document.getElementById("welcome").innerHTML="Eshetu Wekjira designers welcomes you, " + shape + "!\n" +
    "We're glad you are doing ";
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
    return sides;
    }
    else if(sides ==1){
    sides ="A polygon with 1 side is a Henagon";
    }

    else if(sides ==2){
    sides ="A polygon with 1 side is a Digon";
    return sides;
    }

    else if(sides ==3){
    sides ="A polygon with 1 side is a Trigon";
    return sides;
    }

    else if(sides ==4){
     sides ="A polygon with 1 side is a Tetragon";
     return sides;
     }

     else if(sides ==5){
     sides ="A polygon with 1 side is a pentagon";
     return sides;
    }
    else if(sides ==6){
    sides ="A polygon with 1 side is a Hexagon";
    return sides;
    }
    else if(sides ==7){
    sides ="A polygon with 1 side is a Heptagon";
    return sides;
        }

    else if(sides ==8){
     sides ="A polygon with 1 side is a Octagon";
     return sides;
    }
    else if(sides ==9){
    sides ="A polygon with 1 side is a Nonagon";
    return sides;
       }

    else if(sides ==10){
    sides ="A polygon with 1 side is a Decagon";
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
    
}
 

