document.addEventListener("DOMContentLoaded",function(){
  
    let now = new Date();
    const text = document.getElementById("welcome-message");
    if(now.getHours() < 12) {
        text.textContent ="Bonjour,Bienvenue au Gourmet Limousin";
    }else{
        text.textContent ="Bonsoir,Bienvenue au Gourmet Limousin";
    }

});



document.getElementById("discount-button1").addEventListener("click",function() {
         
    let price = document.getElementById("card1").textContent;

    prix = parseFloat(price);
    prix-=prix*0.1;

    document.getElementById("card1").textContent = prix +"€";
    
});

document.getElementById("discount-button2").addEventListener("click",function() {
         
    let price = document.getElementById("card2").textContent;

    
    price = document.getElementById("card2").textContent;

    prix = parseFloat(price);
    prix-=prix*0.1;

    document.getElementById("card2").textContent = prix+"€";
    
});

document.getElementById("discount-button3").addEventListener("click",function() {
         
    let price = document.getElementById("card3").textContent;


    prix = parseFloat(price);
    prix-=prix*0.1;

    document.getElementById("card3").textContent = prix+"€";
    
});

document.getElementById("send-form-button").addEventListener("click", function(e) {

   
    e.preventDefault();


    if(!document.getElementById("name").value) {
        alert("Veullez saisir votre nom");
    }
});

