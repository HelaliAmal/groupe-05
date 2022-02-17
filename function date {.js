function date {
  var d = new Date();
  var x=d.getDay();
  switch(x) {
      case 0; document.getElementById("res").innerHTML="onest"+"dimmanche";
      case 1 ;
    document.getElementById("res").innerHTML="onest"+"lundi"; 
      break;
      
  }
}