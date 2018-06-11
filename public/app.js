var app = function(){

  var cat = document.createElement('ul');
  cat.classList.add('cat')

  var name = document.createElement('li');
  name.textContent = "Cat Name";

  var favFood = document.createElement('li');
  favFood.textContent = "New Favourite Food";

  var img = document.createElement('img');
  img.src = "https://i.pinimg.com/originals/22/7f/b1/227fb15938dfe0b60978072e9e7f61b3.jpg"
  img.width = 500;

  var image = document.createElement('li');

  var cats = document.querySelector("#cats");

  cats.appendChild(cat);

    cat.appendChild(name);
    cat.appendChild(favFood);
    cat.appendChild(image);
      image.appendChild(img);


}

window.onload = app;
