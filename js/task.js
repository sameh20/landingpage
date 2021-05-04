window.onscroll = function multi(){
      
    if(window.scrollY>60){
    document.getElementById("nav").style.background="lightgray";
    }else if(window.scrollY<60){
    document.getElementById("nav").style.background="#fff";
    }else{
    return false
    }}
    
 