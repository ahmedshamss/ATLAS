

window.onscroll = function() {
    showScrollToTopButton();
  };

  let cards = [document.querySelectorAll(".card")[0], document.querySelectorAll(".card")[1], document.querySelectorAll(".card")[2]]
  
  function showScrollToTopButton() {
    var scrollToTopButton = document.getElementById('scrollToTop');
    if (window.pageYOffset >= window.innerHeight / 4) {
      scrollToTopButton.style.display = 'block';
      for(i=0; i < cards.length; i++){
        cards[i].style.transform = "rotate(360deg)"
      }

    } else {
      scrollToTopButton.style.display = 'none';
    }
  }


  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  function setLightTheme() {
    var elements = document.getElementsByTagName('*');
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      if (element.hasAttribute('data-bs-theme')) {
        element.setAttribute('data-bs-theme', 'light', 'important');
      }
    }
  }

  function setDarkTheme() {
    var elements = document.getElementsByTagName('*');
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      if (element.hasAttribute('data-bs-theme')) {
        element.setAttribute('data-bs-theme', 'dark', 'important');
      }
    }
  }

let button = document.getElementById("dark")
let x = [document.querySelectorAll(".btn-info")[0], document.querySelectorAll(".btn-info")[1],document.querySelectorAll(".btn-info")[2],document.querySelectorAll(".btn-info")[3]]

button.onclick = function(){
    setDarkTheme()
    document.getElementById("cform").style.cssText= "padding: 50px; background: #343a40; color: white;";
    document.getElementById("cardform").style.cssText= "padding: 100px; display: flex; justify-content: space-evenly; gap: 20px; flex-wrap: wrap; background: linear-gradient(90deg, rgba(30,30,30,1) 0%, rgba(0,0,0,1) 100%)";
    document.getElementById("img1").src = "https://i.postimg.cc/5y778Y3P/first-carousel-dark.png";
    document.getElementById("exampleInputPassword1").style.cssText = "background-color: #212529; width: 25%;"
    document.getElementById("exampleInputEmail1").style.cssText = "background-color: #212529; width: 25%;"
    x[0].style.color = "black"
    x[1].style.color = "black"
    x[2].style.color = "black"
    x[3].style.color = "black"
} 


let button2 = document.getElementById("light")

button2.onclick = function(){
    setLightTheme()
    document.getElementById("cform").style.cssText= "padding: 50px; background: white; color: black;";
    document.getElementById("cardform").style.cssText= "padding: 100px; display: flex; justify-content: space-evenly; gap: 20px; flex-wrap: wrap; background: linear-gradient(90deg, rgba(222,222,222,1) 0%, rgba(255,255,255,1) 52%, rgba(222,222,222,1) 100%;";
    document.getElementById("img1").src = "https://i.postimg.cc/3xDSDwDB/first-carousel.png";
    document.getElementById("exampleInputPassword1").style.cssText = "background-color: white; width: 25%;"
    document.getElementById("exampleInputEmail1").style.cssText = "background-color: white; width: 25%;"
    x[0].style.color = "white"
    x[1].style.color = "white"
    x[2].style.color = "white"
    x[3].style.color = "white"
}

let banner = document.getElementById("flick")

banner.onmouseover = function (){
  banner.style.cssText = "transform: scale(0.6) rotate(350deg);"
}