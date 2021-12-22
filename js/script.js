const filmes = document.getElementById("filmes");
const series = document.getElementById("series");
const search = document.getElementById("search");



search.addEventListener("click",function (){


alert("Digite o nome de um filme ou série !");


});



const prev = document.getElementById("prev");

const next = document.getElementById("next");

const slider_img = document.getElementById("slider_img");

var img = ['filme-05.jpg', 'filme-06.jpg', 'filme-07.jpg', 'filme-08.jpg'];

var i = 0;





prev.addEventListener("click",function (){

if (i <= 0) i = img.length;
i--;
return setImg();

});

next.addEventListener("click",function (){

if (i >= img.length -1) i = -1;
i++;
return setImg();

});


function setImg() {

return slider_img.setAttribute('src', 'img/' +img[i]);

}