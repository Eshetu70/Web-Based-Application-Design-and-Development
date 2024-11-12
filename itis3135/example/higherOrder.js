

function greaterthan(a){
    return function(b)
    {
        return b>a;
    }

}

const geaterthan10 =greaterthan(10);
 console.log(geaterthan10(15));


// comparing and sort the values in ascedeing order
 const num =[2, 4, 5, -10, 67, 9];
 num.sort(comp);
 function comp(a , b){
    return a -b;
 }
 console.log(num);


 // deceding order
 const dec =[2, 4, 5, -10, 67, 9];
 dec.sort(comp);
 function comp(a , b){
    return b -a ;
 }
 console.log(dec);



 // find the maximum values
 const nums =[2, 4, 5, -10, 67, 9, 567, 980, 3456 ];
 const max =nums.reduce((a, b)=>{
    return Math.max(a, b);
 });

 console.log(max);


 // find the minimum values
 const nu =[2, 4, 5, -10, 67, 9, 567, 980, 3456 ];
 const min =nu.reduce((a, b)=>{
    return Math.min(a, b);
 });

 console.log(min);