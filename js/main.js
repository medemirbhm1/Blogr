// ====== SHOW / HIDE MENU ======
const toggle = document.getElementById("toggle");
const toggleChildren = Array.from(toggle.children);
const menu = document.getElementById("menu");

toggle.addEventListener("click", () => {
  toggleChildren.forEach((child) => child.classList.toggle("hidden"));
  menu.classList.toggle("active");
});

// ====== SHOW / HIDE LISTS OF LINKS ======
const lis = document.querySelectorAll("header .links > li");

lis.forEach((li, i) => {
  li.addEventListener("click", () => {
    lis.forEach((li, j) => {
      if (i != j) li.classList.remove("active");
    });
    li.classList.toggle("active");
  });
});
/*=============== CHANGE BACKGROUND HEADER ===============*/
const header = document.querySelector("header");
window.addEventListener("scroll", chngBg);
function chngBg() {
  if (this.scrollY >= 50) header.classList.add("scroll");
  else header.classList.remove("scroll");
}
