const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", checkcards);

function checkcards() {
  const triggerBottom = (window.innerHeight / 5) * 4;

  cards.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}