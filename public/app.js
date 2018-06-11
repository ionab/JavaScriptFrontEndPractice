var app = function(){
  addCat("Boba", "Sock fluff", "http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg");
  addCat("Inbred Cat", "Toast", "https://i.pinimg.com/originals/22/7f/b1/227fb15938dfe0b60978072e9e7f61b3.jpg");
  addCat("Barnaby", "Tuna", "https://68.media.tumblr.com/88d0fcf2b84a7b098dda839130597569/tumblr_okuo4teiql1uhevdso1_1280.jpg");
  addCat("Max", "Whiskas Temptations", "http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg");
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
  catName.textContent = "Name: " + name;
  return catName;
}

var createFood = function(food){
  var favFood = document.createElement('li');
  favFood.textContent = "Favourite food: " + food;
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
