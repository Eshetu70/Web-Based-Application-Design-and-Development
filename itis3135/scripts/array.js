
person =[];
salary =[];
function addSalary(){
    var name_input =document.getElementById("person").value;
    var salary_input =document.getElementById("salary").value;
    if(salary_input>150 ||salary_input<10||salary_input==""){
        alert("please re-enter a name and a valid salary");
        salary_input ="";
        $("person").focus();
    }
    else{
        salary_input = parseInt(salary_input);
        if(person.includes(name_input)){
           var index =  person.indexOf(name_input);
           salary[index] = salary_input;
    
        }
        else{
            person.push(name_input);
            salary.push(salary_input);
        }
           
           $("salary").innerHTML = "" ;
           $("person").focus();
       }

function displayResults(){
  var average =0;
  var sum =0; 
  var highest;
  var max=0; 

  for(i=0; i<salary.length-1; i++){
    sum +=salary[i];
  }
  average=(sum/(salary.length);
  for(j=0; j<salary.length; j++){
    if(salary[j]>max){
        max=salary[j];
        highest=j;
    }
  }
  $("results").innerHTML ="<h2>Results</h2>" + "<p>Average salary is:" 
   + average + "</p>"+ "<p> The highest salary for " +person[highest]+ "with  a salary"+ max+ "</p";
}
function displaySalary(){
    var tables_html ="";

    tables_html +="<tr><th>Names</th> <th>Salary</th></tr>";
    for(k=0; k<salary.length; k++){
    tables_html += "<tr><td>"+ person[k]+ "</td><td>" +salary[k]+
    " k<td></tr>";
    }

    }
    tables_html +="</table>";
    $("results_table").innerHTML="<h2>Salaries</h2>" + tables_html;
}

window.onload =function(){
    document.getElementById("display_results").onclick= displayResults;
    document.getElementById("add_salary").onclick= addSalary;
    document.getElementById("display_salary").onclick= displaySalary;
    
}