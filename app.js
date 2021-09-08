 function getHistory(){
 return document.getElementById("historyResult").innerText;
 }

 function printHistory(num){
    return document.getElementById("historyResult").innerText=num;
 }

 function getOutput(){
    return document.getElementById("outputResult").innerText;
 }


 function printOutput(num){
    
    return document.getElementById("outputResult").innerText=num;
 }

 var output="";
 var prev="";

 var number = document.getElementsByClassName("number");
 for(var i =0;i<number.length;i++){
	number[i].addEventListener('click',function(){
		
        prev+=this.id;
        printHistory(prev);
            output=eval(prev);
			printOutput(output);
           
    })
    }
   
   
 var operator = document.getElementsByClassName("operator");	
    for(var i=0;i<operator.length;i++){
        operator[i].addEventListener('click',function(){
            if(this.id=="="){
                output=eval(prev);
                prev=output;
            }
            else if(this.id=="clear"){
                prev="";
                output="";
            }
            else if(this.id=="backspace"){
                prev=prev.substr(0,prev.length-1);
                output=eval(prev);
            }
           else if(this.id=="%"){
               var i;
               for(i=prev.length-1;prev[i]!=NaN;i--){
              
               }
               alert(i);
              var result=prev.substr(i+1,prev.length)/100;
                
                prev.substr(i+1,prev.length)=result;
                output=eval(prev);
                
            }
          else if(this.id=="."){
                prev+=this.id;
                if(isNaN(prev[prev.length-2])){
                    var result=prev.substr(0,prev.length-2);
                    output=eval(result);
                }
                else{
                    var result=prev.substr(0,prev.length-1);
                    output=eval(result);
                }
            }

            else{
            
                prev+=this.id;
                if(isNaN(prev[prev.length-1])){
                var result=prev.substr(0,prev.length-1);
                output=eval(result);
                }
                // else{
                //     output=eval(prev);
                // }
            }
            printHistory(prev);
            printOutput(output);
            
         })
    }
