const ratio = 0.15;
const options = {
  root: null,
  rootMargin: "0px",
  threshold: ratio,
};

const handleIntersect = function (entries, observer) {
  entries.forEach(function (entry) {
    if (entry.intersectionRatio > ratio) {
      entry.target.classList.add("reveal-visible");
      observer.unobserve(entry.target);
    }
  });
};

const observer = new IntersectionObserver(handleIntersect, options);
observer.observe(
  document.querySelectorAll(".reveal").forEach(function (r) {
    observer.observe(r);
  })
);

let showItem = document.getElementById("item");

showItem.addEventListener("mouseenter", function( event ) {
  event.target.style.display ='none';
})
