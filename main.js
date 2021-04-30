var a;  
function display(){
    if(a==1){
        document.getElementById("basic-ul").style.display = "block";
        document.getElementById("basic-button").style.display = "block";
        return a=0;
        
       
    }else{
        document.getElementById("basic-ul").style.display = "none";
        document.getElementById("basic-button").style.display = "none";
        return a=1;
    }
}


var b;
function display_two(){
    if(b==1){
        document.getElementById("premium-ul").style.display = "block";
        document.getElementById("premium-button").style.display = "block";
        return b=0;
        
       
    }else{
        document.getElementById("premium-ul").style.display = "none";
        document.getElementById("premium-button").style.display = "none";
        return b=1;
    }
}

var c;
function display_three(){
    if(b==1){
        document.getElementById("business-ul").style.display = "block";
        document.getElementById("business-button").style.display = "block";
        return b=0;
        
       
    }else{
        document.getElementById("business-ul").style.display = "none";
        document.getElementById("business-button").style.display = "none";
        return b=1;
    }
}


