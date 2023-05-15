var coll = document.getElementsByClassName("collapse");

document.addEventListener("click", function(event) {
  if (event.target.getAttribute("data-toggle") === "collapse") {
    var target = document.querySelector(event.target.getAttribute("href"));
    if (target) {
      target.classList.toggle("show");
      event.preventDefault();
    }
  }
});
