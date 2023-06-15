const topBar = document.getElementById("top-bar-container");

const observer = new IntersectionObserver( 
    ([e]) => e.target.classList.toggle("is-pinned", e.intersectionRatio < 1),
    { threshold: [1] }
  );
  
  observer.observe(topBar);


const classCard = document.querySelector("#class-preview");



classCard.onmousemove = (e) => {

  const rect = classCard.getBoundingClientRect();

  if (e.clientY - rect.top < (rect.height/2)){
    classCard.classList.add("card-hover-top")
    classCard.classList.remove("card-hover-bottom");
  } else {
  classCard.classList.add("card-hover-bottom")
  classCard.classList.remove("card-hover-top")
  }
  
};

classCard.onmouseout = (e) => {
  classCard.classList.remove("card-hover-bottom");
  classCard.classList.remove("card-hover-top")
};

