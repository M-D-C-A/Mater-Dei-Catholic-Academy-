
     function getresults(){
          
var SE09SS1 = document.getElementById("SE09SS1")
         if(document.getElementById("userinput").value === 'SE09SS1'){
         document.getElementById("SE09SS1").style.display = 'block';
         
         } else if(document.getElementById("userinput").value=== null){
             console.log('wrong');
             alert('Student id cannot be empty')
         }
     }