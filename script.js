document.addEventListener("DOMContentLoaded", function(){
  init();
});

function init() {
  document.querySelector('.nav-hamburger a').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('.nav-expandable').classList.toggle('hidden');
  });
}