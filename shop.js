function addition1()
{
/*var monimage1=document.getElementById('im1');
monimage1.src="maillot.jpg";*/
var ancienneValCompteur = document.getElementById('PremierArticle');
var nouvelleValCompteur = parseInt(ancienneValCompteur.value) + 1 ;
ancienneValCompteur.value = nouvelleValCompteur ;
var newprix=document.getElementsByClassName('total-prix')[0];
newprix.value=nouvelleValCompteur*10;
document.getElementsByClassName('total-prix')[0].innerHTML=(newprix.value);
var masomme=document.getElementById('ta');
masomme.textContent=parseInt(document.getElementsByClassName('total-prix')[0].innerHTML)+parseInt(document.getElementsByClassName('total-prix')[1].innerHTML)+parseInt(document.getElementsByClassName('total-prix')[2].innerHTML);
}
function addition2()
{
var ancienneValCompteur = document.getElementById('deuxiemeArticle');
var nouvelleValCompteur = parseInt(ancienneValCompteur.value) + 1 ;
ancienneValCompteur.value = nouvelleValCompteur ;
var newprix=document.getElementsByClassName('total-prix')[1];
newprix.value=nouvelleValCompteur*20;
document.getElementsByClassName('total-prix')[1].innerHTML=(newprix.value);
var masomme=document.getElementById('ta');
masomme.textContent=parseInt(document.getElementsByClassName('total-prix')[0].innerHTML)+parseInt(document.getElementsByClassName('total-prix')[1].innerHTML)+parseInt(document.getElementsByClassName('total-prix')[2].innerHTML);
}
function addition3()
{
var ancienneValCompteur = document.getElementById('troisiemeArticle');
var nouvelleValCompteur = parseInt(ancienneValCompteur.value) + 1 ;
ancienneValCompteur.value = nouvelleValCompteur ;
var newprix=document.getElementsByClassName('total-prix')[2];
newprix.value=nouvelleValCompteur*7;
document.getElementsByClassName('total-prix')[2].innerHTML=(newprix.value);
var masomme=document.getElementById('ta');
masomme.textContent=parseInt(document.getElementsByClassName('total-prix')[0].innerHTML)+parseInt(document.getElementsByClassName('total-prix')[1].innerHTML)+parseInt(document.getElementsByClassName('total-prix')[2].innerHTML);
}

function soustraction1()
{
var ancienneValCompteur = document.getElementById('PremierArticle');
var nouvelleValCompteur = parseInt(ancienneValCompteur.value);
var newprix=document.getElementsByClassName('total-prix')[0];
if (nouvelleValCompteur>0){
nouvelleValCompteur-=1;
ancienneValCompteur.value = nouvelleValCompteur ;
newprix.value=nouvelleValCompteur*10;
document.getElementsByClassName('total-prix')[0].innerHTML=(newprix.value);
var masomme=document.getElementById('ta');
masomme.textContent=parseInt(document.getElementsByClassName('total-prix')[0].innerHTML)+parseInt(document.getElementsByClassName('total-prix')[1].innerHTML)+parseInt(document.getElementsByClassName('total-prix')[2].innerHTML);
}
else if (nouvelleValCompteur<0){
ancienneValCompteur.value =0;
document.getElementsByClassName('total-prix')[0].innerHTML=("0");}
}
function soustraction2()
{
var ancienneValCompteur = document.getElementById('deuxiemeArticle');
var nouvelleValCompteur = parseInt(ancienneValCompteur.value);
var newprix=document.getElementsByClassName('total-prix')[1];
if (nouvelleValCompteur>0){
nouvelleValCompteur-=1;
ancienneValCompteur.value = nouvelleValCompteur ;
newprix.value=nouvelleValCompteur*20;
document.getElementsByClassName('total-prix')[1].innerHTML=(newprix.value);
var masomme=document.getElementById('ta');
masomme.textContent=parseInt(document.getElementsByClassName('total-prix')[0].innerHTML)+parseInt(document.getElementsByClassName('total-prix')[1].innerHTML)+parseInt(document.getElementsByClassName('total-prix')[2].innerHTML);
}
else if (nouvelleValCompteur<0){
ancienneValCompteur.value =0;
document.getElementsByClassName('total-prix')[1].innerHTML=("0");}
}
function soustraction3()
{
var ancienneValCompteur = document.getElementById('troisiemeArticle');
var nouvelleValCompteur = parseInt(ancienneValCompteur.value);
var newprix=document.getElementsByClassName('total-prix')[2];
if (nouvelleValCompteur>0){
nouvelleValCompteur-=1;
ancienneValCompteur.value = nouvelleValCompteur ;
newprix.value=nouvelleValCompteur*7;
document.getElementsByClassName('total-prix')[2].innerHTML=(newprix.value);
var masomme=document.getElementById('ta');
masomme.textContent=parseInt(document.getElementsByClassName('total-prix')[0].innerHTML)+parseInt(document.getElementsByClassName('total-prix')[1].innerHTML)+parseInt(document.getElementsByClassName('total-prix')[2].innerHTML);
}
else if (nouvelleValCompteur<0){
ancienneValCompteur.value =0;
document.getElementsByClassName('total-prix')[2].innerHTML=("0");}
}