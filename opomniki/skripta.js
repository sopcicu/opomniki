window.addEventListener('load', function() {
	//stran nalozena
		
	//Posodobi opomnike
	var posodobiOpomnike = function() {
		var opomniki = document.querySelectorAll(".opomnik");
		
		for (i = 0; i < opomniki.length; i++) {
			var opomnik = opomniki[i];
			var casovnik = opomnik.querySelector("span");
			var cas = parseInt(casovnik.innerHTML);
	
			//TODO: 
			if (cas > 0){
				casovnik.innerHTML=cas-1
			}
			else{
				var naziv = opomnik.querySelector(".naziv_opomnika").innerHTML;
				alert("Opomnik!\n\nZadolžitev '" + naziv_opomnika + "' je potekla!");
				document.querySelector("#opomniki").removeChild(opomnik);
			}
		}
	}
	setInterval(posodobiOpomnike, 1000);
	
});

var izvediPrijavo = function(event){
		
		var uporabnikIme=document.querySelector("#uporabnisko_ime").value
		document.getElementById("uporabnik").innerHTML = uporabnikIme;
		document.querySelector(".pokrivalo").style.display = "none";
		
	}
	document.querySelector("#prijavniGumb").addEventListener('click',izvediPrijavo);
	
var dodajOpomnik = function(event){
	
	var naziv=document.querySelector("#naziv_opomnika").value 
	var cas=document.querySelector("#cas_opomnika").value 
	document.querySelector("#naziv_opomnika").value = "";
	document.querySelector("#cas_opomnika").value = "";
	
	var ht = "<div class='opomnik'><div class='naziv_opomnika'>"+naziv+"</div><div class='cas_opomnika'> Opomnik čez <span>"+cas+"</span> sekund.</div></div>";

	document.querySelector("#opomniki").innerHTML += ht;

    

    


}
document.querySelector("#dodajGumb").addEventListener('click',dodajOpomnik);