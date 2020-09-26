const jogador1="X";
const jogador2="O";
var start= jogador1;
var gameover=false;


iniciaitem();
atualizainicio();

function atualizainicio(){

	if(gameover){
		return;
	}
	if(start==jogador1){
		var player;
		player= document.querySelectorAll("div#inicio img")[0];
		player.setAttribute("src","imagens/x.jpg");
	}
	else {
		player= document.querySelectorAll("div#inicio img")[0];
		player.setAttribute("src","imagens/o.jpg");

	}
}

function iniciaitem(){
	var itens=document.getElementsByClassName("item");
	for (var i=0;i<itens.length;i++){

		itens[i].addEventListener("click", function(){

			if(gameover){return;}

			if(this.getElementsByTagName("img").length==0){
				if(start==jogador1){
					this.innerHTML="<img src='imagens/x.jpg'width=50>";
					this.setAttribute("jogada",jogador1);
					start=jogador2;
				}
				else{
					this.innerHTML="<img src='imagens/o.jpg'width=50>";
					this.setAttribute("jogada",jogador2);
					start=jogador1;
				}
				iniciaitem();
				Vencedor();
			}
		}
		);
	}


}

async function Vencedor()
{
	var a1=document.getElementById("p1").getAttribute("jogada");
	var a2=document.getElementById("p2").getAttribute("jogada");
	var a3=document.getElementById("p3").getAttribute("jogada");

	var b1=document.getElementById("p4").getAttribute("jogada");
	var b2=document.getElementById("p5").getAttribute("jogada");
	var b3=document.getElementById("p6").getAttribute("jogada");

	var c1=document.getElementById("p7").getAttribute("jogada");
	var c2=document.getElementById("p8").getAttribute("jogada");
	var c3=document.getElementById("p9").getAttribute("jogada");


	var vencedor="";

	if((a1==b1 && a1==c1 && a1!="")||(a1==a2 && a1==a3 && a1!= "") || (a1==b2 && a1==c3 && a1!=""))
		vencedor= a1;

	else if((b2==b1 && b2==b3 && b2!="")||(b2==a2 && b2==c2 && b2!="")||(b2==a3 && b2==c1 && b2!="")){
		vencedor=b2;
	}
	else if((c3==c2 && c3==c1)||(c3==a3 && c3==b3 && c3!="")){
		vencedor=c3;
	}

	if (vencedor!="") 
	{
		gameover=true;

		await sleep(50);
		alert("O ganhador foi o :'"+vencedor+"'");
	}

}
function sleep(ms){

	return new Promise(tempo=>setTimeout(tempo,ms));
}


