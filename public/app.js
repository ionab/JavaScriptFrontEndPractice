var app = function(){
  addCat("Inbred Cat", "Toast", "https://i.pinimg.com/originals/22/7f/b1/227fb15938dfe0b60978072e9e7f61b3.jpg");
}

var addCat = function(name, food, url){
  var catul = createUl();
  var catName = createName(name);
  var catfood = createFood(food);
  var imageli = createImage();
  var url = createImg(url);

  appendElements(catul, catName, catfood, imageli, url);
}

var createUl = function(){
  var cat = document.createElement('ul');
  cat.classList.add('cat')
  return cat;
}

var createName = function(name){
  var catName = document.createElement('li');
  catName.textContent = name;
  return catName;
}

var createFood = function(food){
  var favFood = document.createElement('li');
  favFood.textContent = food;
  return favFood;
}
var createImage = function(){
  var image = document.createElement('li');
  return image;
}
var createImg = function(url){
  var img = document.createElement('img');
  img.src = url;
  img.width = 500;
  return img;
}

var appendElements = function(cat, name, food, image, img){
  var cats = document.querySelector("#cats");
  cats.appendChild(cat);

    cat.appendChild(name);
    cat.appendChild(food);
    cat.appendChild(image);
      image.appendChild(img);


}


window.onload = app;
