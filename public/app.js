var app = function(){
  // var img = document.createElement('img');
  // img.classList.add('img');

  var cat = document.createElement('ul');
  cat.classList.add('cat')

  var name = document.createElement('li');
  name.textContent = "Cat Name";

  var favFood = document.createElement('li');
  favFood.textContent = "New Favourite Food";

  var cats = document.querySelector("#cats");
  cats.appendChild(cat);

  cat.appendChild(name);
  cat.appendChild(favFood);
}

window.onload = app;
