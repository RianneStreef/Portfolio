console.log('test');



const header = document.getElementById('header-fx');

setTimeout(() => header.classList.add('header-fx'), 100)

function openNav() {
  document.getElementById("myNav").classList.remove("nav-hidden");
  document.getElementById("openNav").style.display="none";
}

function closeNav() {
  document.getElementById("myNav").style.display="none";
  document.getElementById("openNav").style.display="inline-block";
}