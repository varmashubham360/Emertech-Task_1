//star pattern

pattern(5);


function pattern(rows){
    var a = '';

var m = (rows-1); 
for(i=1; i <= rows; i++)
{
    a = a.trim();
    a = ' '.repeat(m) + a + (i > 1 ? ' ' : '') + '*';
    console.log(a);
    m--;
}
}

//********************************************************************** */
//star pattern inverted format

function stars(n){
    var str = '';
    for(var i=n; i>=1; i--){
        for(var k=n; k>=i; k--){
            str += "\t";
        }
        for(var j=i; j>=1; j--){
            str += j+"\t\t";
        }
        console.log(str);
        str = "";
    }
}
stars(5);

//******************************************************************************* */
//difference between simple function, anonymous function and arrow functions

  
var myfun1 = function show() {  
    console.log("It is a Function Expression");     
   }  
     
   // Anonymous function  
     
   var myfun2 = function () {  
       console.log("It is an Anonymous Function");     
      }  
        
   //Arrow function  
     
   var myfun3 = () => {  
       console.log("It is an Arrow Function");     
      };  
     
   myfun1();  
   myfun2();  
   myfun3();  
