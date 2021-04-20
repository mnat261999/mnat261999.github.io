//HEADER
const nav = document.querySelector(".nav-menu");
const navigation = document.querySelector(".navigation");
const header = document.querySelector(".header");
const nav_link = document.querySelectorAll(".scroll-link");
const openBtn = document.querySelector(".hamburger");
const closeBtn = document.querySelector(".close");

const navLeft = nav.getBoundingClientRect().left;

console.log(navLeft)
 openBtn.addEventListener("click", () => {
  if (navLeft < 0) {
    for(var x=0; x < nav_link.length; x++)
        {
            nav_link[x].classList.add("nav-link-response");
            nav_link[x].classList.remove("nav_link");
        }
    header.classList.remove("header");
    navigation.classList.add("show");
    nav.classList.add("show");
    document.body.classList.add("show");
  }
}); 

closeBtn.addEventListener("click", () => {
    if (navLeft < 0) {
      for(var x=0; x < nav_link.length; x++)
      {
          nav_link[x].classList.remove("nav-link-response");
          nav_link[x].classList.add("nav_link");
      }
      header.classList.add("header");
      navigation.classList.remove("show");
      nav.classList.remove("show");
      document.body.classList.remove("show");
    }
});


// FIXED NAV
const navBar = document.querySelector(".navigation");
const navHeight = navBar.getBoundingClientRect().height;
window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;
  if (scrollHeight > navHeight) {
    navBar.classList.add("fix-nav");
    for(var x=0; x < nav_link.length; x++)
    {
        nav_link[x].classList.add("nav-link-response");
        nav_link[x].classList.remove("nav_link");
    } 

  } else {
    navBar.classList.remove("fix-nav");
    for(var x=0; x < nav_link.length; x++)
    {
        nav_link[x].classList.remove("nav-link-response");
        nav_link[x].classList.add("nav_link");
    }
  }
});

// Scroll To
const links = [...document.querySelectorAll(".scroll-link")];
links.map(link => {
  link.addEventListener("click", e => {
    e.preventDefault();

    const id = e.target.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    const fixNav = navBar.classList.contains("fix-nav");
    let position = element.offsetTop - navHeight;
    if (!fixNav) {
      position = position - navHeight;
    }

    window.scrollTo({
      top: position,
      left: 0,
    });

    navigation.classList.remove("show");
    nav.classList.remove("show");
    document.body.classList.remove("show");
  });
});



