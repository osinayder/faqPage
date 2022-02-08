const btn = document.querySelectorAll('.btn');
  
btn.forEach(function (btn) {
  btn.addEventListener("click", function(e){
    const item = e.currentTarget.parentElement
    item.classList.toggle('open');
    const btn = e.currentTarget
    btn.classList.toggle('rotate');
  });
});