const fort= new Audio();
fort.src="zvukovi/fn.mp3"

function close_window() {
   if (confirm("Izadji?")) {
       close();
      }
}




var audio1 = document.getElementById("audioID");





const gett=document.getElementById("sounddd");
gett.addEventListener("click",audiom);

function audiom(){
   var imgsrc=gett.getAttribute("src");
   var soundimg=imgsrc=="img/soundon.jpg" ? "img/soundoff.jpg":"img/soundon.jpg";
   gett.setAttribute("src",soundimg);

  fort.muted=fort.muted ? false:true;
  audio1.muted=audio1.muted ? false:true;
  
}

