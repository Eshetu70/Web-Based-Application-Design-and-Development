

var name;
var feeling;

async function promptUser() {

}
async function questions(){ 
    let evt = await new Promise((resolve, reject) => {
        document.getElementById("preInputForm").addEventListener("submit", (evt) => {
            evt.preventDefault();
            resolve(evt);
        });
    });
    console.log("Submitted!");
    const data = new FormData(evt.target);
    name = data.get('first');
    feeling = data.get('feeling');
    document.getElementById("preInput").style = "visibility: hidden;";
    document.getElementById("afterInput").style = "";
    document.getElementById("date").innerHTML = "Today is " + getCurrentTime() + " on " +  getTodaysDate() + ", " + currentYear;
    document.getElementById("welcome").innerHTML="Eshetu Wekjira designers welcomes you, " + getName()  + "!\n" +
    "We're glad you are doing "+ getFeeling() + ".";
    form = document.querySelector("signup");
}

function setName(name){
    this.name =name;
}
function setFeeling(feeling){
    this.feeling=feeling;
}
function getName(){
    return name;
}
function getFeeling()
{
    return feeling;
}
function getTodaysDate() {
    let date = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return days[date.getDay()] + ', ' + date.getDate() + ' ' + months[date.getMonth()] ;
}

function getCurrentTime() {
    let date = new Date();
    let ampm = date.getHours() >= 12 ? 'PM' : 'AM';
    let mins = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    return date.getHours() % 12 + ':' + mins + ' ' + ampm;
}

const currentYear = new Date().getFullYear();


function getAccelaration()
{
    var mile =prompt("Please enter a distance in miles")
    var time =prompt("Please enter a time in second")
    acceleration =mile/(time*time);
    var Num =acceleration.toFixed(2);
    document.getElementById("speed").innerHTML ="Accelearation is equal: " + Num + "mi / s2 "+ " Thank you for using our app!";
}

function BodyMassIndex()
{
    var height =prompt("Please enter your height in meter? ")
    var weight =prompt("Please enter weight in kilogram? ")
    bodyMassIndex =weight/(height*height);
    var num =bodyMassIndex.toFixed(2);
    if (bodyMassIndex <= 18.5 )
    {
     var check ='underweight';
    }
        
    if (bodyMassIndex > 18.5 && bodyMassIndex < 24.9)
    {
     var check ='Healthy weight';
    }
       
    if (bodyMassIndex > 24.9 )
    {
     var check ='overweight';
    }

    
    document.getElementById("BMX").innerHTML ="Your body mass index is: " + num + " , "  +  check + "! " + " Thank you for using our app!";
}

function multiplications()
{
    var first =prompt("Please enter a first number")
    var second =prompt("Please enter a second number")
    answer =(first*second);
    var mul =answer.toFixed(3);
    document.getElementById("multiplications").innerHTML = "" + first +" x " +second + " = " + mul + ""+ " Thank you for using our app!";
}
   today=new Date();
    var cmas=new Date(today.getFullYear(), 10, 24);
   if (today.getMonth()==10 && today.getDate()>24) 
     {
   cmas.setFullYear(cmas.getFullYear()+1); 
}  
   var one_day=1000*60*60*24;

   function ThanksgivingDay(){
   document.getElementById("ThanksgivingDay").innerHTML = (Math.ceil((cmas.getTime()-today.getTime())/(one_day))+
   " days left until Thanksgiving!");
   }
