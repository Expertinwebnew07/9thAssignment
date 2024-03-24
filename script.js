//  for btn_Concatenate
 document.querySelector(".btn_Concatenate").onclick=()=>{
      document.querySelector(".btninput").innerHTML=`let a = "2"+"2";  <br> "2 plus 2 equals " = 2 + 2  `;
      document.querySelector(".btnoutput").innerHTML= "2"+"2";
     }
     // btn_Ask
     //from user Name
     //for biodata
 document.querySelector(".btn_Ask ") .onclick=()=>{
      let userName=prompt("Please Enter you full Name");
      document.querySelector(".btninput").innerHTML=` let b = ""Thanks " + ${'userName'} + "!" `;
      document.querySelector(".btnoutput").innerHTML= "2"+"2" + "<br>"+ `Thanks ${userName} !`;
    }
    //btn_Comparison
    // for user lastname
  document.querySelector(".btn_Comparison").onclick=()=>{
     let lastname=prompt("Please Enter your last name ! ")
     document.querySelector(".btninput").innerHTML=`if(fullname === 'Sadaqat'+' ' + ${lastname}) `;
     document.querySelector(".btnoutput").innerHTML= `Sadaqat   ${lastname} `;
}  
//btn_if
    //only for if condition   
document.querySelector(".btn_if").onclick=()=>{
     let a=prompt("Enter any number !")
     document.querySelector(".btninput").innerHTML=`if(${a}>=0) else `;
      if(a>=0){
          document.querySelector(".btnoutput").innerHTML=true;
     }else {
          document.querySelector(".btnoutput").innerHTML=false;
     }
} 
//  btn_Testing
document.querySelector(".btn_Testing").onclick=()=>{
     e =prompt("please enter any number");

     document.querySelector(".btninput").innerHTML=`
     let a=b=c=d=e;<br>
     e =prompt("please enter any number");<br>
   if(a===b){<br>
   document.querySelector(".btninput").innerHTML="a=b"<br>
   }else if(b===c){<br>
        document.querySelector(".btninput").innerHTML="b=c"   <br>
   }else if(c===d){<br>
        document.querySelector(".btninput").innerHTML="c=d"<br>
   }else{<br>
        document.querySelector(".btninput").innerHTML="a!=b!=c!=d"<br>
   }
     `;
     
       let a=b=c=d=e;
     if(a===b){
     document.querySelector(".btnoutput").innerHTML="a=b"
     }else if(b===c){
          document.querySelector(".btnoutput").innerHTML="b=c"   
     }else if(c===d){
          document.querySelector(".btnoutput").innerHTML="c=d"
     }else{
          document.querySelector(".btnoutput").innerHTML="a!=b!=c!=d"
     }

}
//Apply Nested if condition
document.querySelector(".btn_ifNested").onclick=()=>{
     let name=prompt(" Please Enter Name of Programmer !"),age;


     document.querySelector(".btninput").innerHTML=`
     let name=prompt(" Please Enter Name of Programmer !"),age;<br>
     if(name=="sadaqat"){<br>
          if(age>=18){<br>
               age=prompt("Enter programmer age");<br>  
            document.querySelector(".btnoutput").innerHTML='${name} is <br> an adult Person and you have a id. ';<br>
             }
            }<br>
       else{<br>
                 document.querySelector(".btnoutput").innerHTML='${name}<br> have no exist in this program'<br>
            }
       }<br>
       `

          if(name==="sadaqat"){
  if(age>=18){
     age=prompt("Enter programmer age");
     document.querySelector(".btnoutput").innerHTML=`${name} is an adult Person and  have a id. `;
      }
     }
else if(name !=="sadaqat"){
          document.querySelector(".btnoutput").innerHTML=`${name} have no exist in this program`
     }
}
//login

document.querySelector(".btn_Login").onclick=()=>{
     let email=prompt(" Please Enter email !"),passward;


     document.querySelector(".btninput").innerHTML=`
     let email=prompt(" Please Enter email !"),passward;<br>
     if( email==="sadaqat@gmail.com"){<br>
          passward=prompt("Enter passward");<br>  
          if(passward===123){<br>
            document.querySelector(".btnoutput").innerHTML='${email} and passward <br> are the valid now.';<br>
             }else{ document.querySelector(".btnoutput").innerHTML='${passward} is not a valid now.Please enter a valid passward';<br>
          }
            }<br>
       else{<br>
                 document.querySelector(".btnoutput").innerHTML='${email}<br> is not a valid now.Please enter a valid email'<br>
            }
       }<br>
       `;

     
       if( email==="sadaqat@gmail.com"){
            passward=prompt("Enter passward"); 
            if(passward==123){
              document.querySelector(".btnoutput").innerHTML=`${email} and passward are the valid now.`;
               }else{ document.querySelector(".btnoutput").innerHTML=` ${passward} is not a valid now.Please enter a valid passward`;
            }
              }
         else{
                   document.querySelector(".btnoutput").innerHTML=`${email}  is not a valid now.Please enter a valid email`;
              }
}
// check btn
document.querySelector(".btn_Check ").onclick=()=>{
     let a = "These all buttons are checked Now";
     document.querySelector(".btninput").innerHTML='console.log("These all buttons are checked Now")';
      document.querySelector(".btnoutput").innerHTML=a;

}

 //Clear input   
document.querySelector(".clear1").onclick=()=>{
     document.querySelector(".btninput").innerHTML="";
 }
//  clear output
  document.querySelector(".clear2").onclick=()=>{
 
    document.querySelector(".btnoutput").innerHTML="";
 
  }
