
var precal;
var cal;

window.onload =function(){
    document.getElementById("bn1").onclick =shownNum;
    document.getElementById("bn2").onclick =shownNum;
    document.getElementById("bn3").onclick =shownNum;
    document.getElementById("bn4").onclick =shownNum;
    document.getElementById("bn5").onclick =shownNum;
    document.getElementById("bn6").onclick =shownNum;
    document.getElementById("bn7").onclick =shownNum;
    document.getElementById("bn8").onclick =shownNum;
    document.getElementById("bn9").onclick =shownNum;
    document.getElementById("bn0").onclick =shownNum;

    document.getElementById("bnPlus").onclick =add;
    document.getElementById("bnMinus").onclick =subtract;
    document.getElementById("bnMultiply").onclick = multiply;
    document.getElementById("bnPow").onclick =power;
    document.getElementById("bnDecrement").onclick =decrement;
    document.getElementById("bnIncrement").onclick =increment;
    document.getElementById("bnSqrt").onclick =sqrt;
    document.getElementById("bnPow2").onclick =square;
    document.getElementById("bnFloor").onclick =floor;
    document.getElementById("bnRound").onclick =round;
    document.getElementById("bnDivide").onclick =divide;
    document.getElementById("bnDecimal").onclick = shownNum;
    document.getElementById("bnReset").onclick = clean;
    document.getElementById("bnCalc").onclick = calculate;

}

function shownNum(){
    document.cal_form.textNumber.value += this.value;
}

function decrement(){
    var num =parseFloat(document.cal_form.textNumber.value);
    if(!(isNaN(num)))
    {
        num--;
        document.cal_form.textNumber.value =num;

    }
}
  
function increment(){
    var num =parseFloat(document.cal_form.textNumber.value);
    if(!(isNaN(num)))
    {
        num ++;
        document.cal_form.textNumber.value =num;
    }

}

function square(){
    var num =parseFloat(document.cal_form.textNumber.value);
    if(!(isNaN(num)))
    {
        num =Math.pow(num, 2);
        document.cal_form.textNumber.value =num;
    }
}

function sqrt(){
    var num =parseFloat(document.cal_form.textNumber.value);
    if(!(isNaN(num)))
    {
        num =Math.sqrt(num);
        document.cal_form.textNumber.value=num;
    }
}

function floor(){
    var num =parseFloat(document.cal_form.textNumber.value);
    if(!(isNaN(num)))
    {
        num =Math.floor(num);
        document.cal_form.textNumber.value =num;
    }
}
function round(){
    var num =parseFloat(document.cal_form.textNumber.value);
    if(!(isNaN(num)))
    {
        num =Math.ceil(num);
        document.cal_form.textNumber.value =num;
    }
}

function add(){
    var num =parseFloat(document.cal_form.textNumber.value);
    if(!(isNaN(num)))
    {
        precal =num;
        document.cal_form.textNumber.value="";
        cal="Add";
    }
}
function subtract(){
    var num =parseFloat(document.cal_form.textNumber.value);
    if(!(isNaN(num)))
    {
        precal =num;
        document.cal_form.textNumber.value="";
        cal="Subtract";
    }
}

function multiply(){
    var num =parseFloat(document.cal_form.textNumber.value);
    if(!(isNaN(num)))
    {
        precal =num;
        document.cal_form.textNumber.value ="";
        cal="Multiply";
    }
}

function divide(){
    var num =parseFloat(document.cal_form.textNumber.value);
    if(!(isNaN(num)))
    {
        precal =num;
        document.cal_form.textNumber.value="";
        cal="Divide";
    }
}

function power(){
    var num =parseFloat(document.cal_form.textNumber.value);
    if(!(isNaN(num)))
    {
        precal =num;
        document.cal_form.textNumber.value ="";
        cal="Power";
    }
}

function calculate()
{
    var num =parseFloat(document.cal_form.textNumber.value);
    if(!(isNaN(num)))
    {
        if(cal == "Add"){
        var total = precal + num;
        document.cal_form.textNumber.value = total;
    }

    if(cal =="Subtract"){
        var total =precal-num;
        document.cal_form.textNumber.value = total;
    }

    if(cal =="Multiply"){
        var total =precal*num;
        document.cal_form.textNumber.value= total;
    }

    if(cal =="Divide"){
        var total =(precal)/(num);
        document.cal_form.textNumber.value = total;
    }
    if(cal =="Power"){
        var total =Math.pow(precal, num);
        document.cal_form.textNumber.value = total;
    }
}

}

function clean()
{
    document.cal_form.textNumber.value="";
    var precal="";
    var cal ="";
}