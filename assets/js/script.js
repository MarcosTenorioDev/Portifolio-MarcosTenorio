var coll = document.getElementsByClassName("collapse");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("transitionend", function() {
    this.style.maxHeight = this.classList.contains("show") ? "none" : null;
  });
}

document.addEventListener("click", function(event) {
  if (event.target.getAttribute("data-toggle") === "collapse") {
    var target = document.querySelector(event.target.getAttribute("href") || event.target.getAttribute("data-target"));
    if (target) {
      target.classList.toggle("show");
      event.preventDefault();
    }
  }
});
