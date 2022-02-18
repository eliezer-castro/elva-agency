const cursor = document.querySelector(".cursor"),
  anchor = document.querySelectorAll("h2, h3"),
  link = document.querySelectorAll("button, a");

//   Cursor Personalizado

window.addEventListener("mousemove", (e) => {
  let x = e.pageX,
    y = e.pageY;

  cursor.style.left = `${x}px`;
  cursor.style.top = `${y}px`;
});

// efeito de foco nas tags selecionas

anchor.forEach((anc) => {
  anc.addEventListener("mouseover", () => {
    cursor.style.transform = "scale(4)";
    cursor.style.animationName = "borderAnim";
  });
  anc.addEventListener("mouseleave", () => {
    cursor.style.transform = "";
    cursor.style.animationName = "";
  });
});
link.forEach((anc) => {
  anc.addEventListener("mouseover", () => {
    cursor.style.transform = "scale(2)";
    cursor.style.animationName = "borderAnim";
  });
  anc.addEventListener("mouseleave", () => {
    cursor.style.transform = "";
    cursor.style.animationName = "";
  });
});
