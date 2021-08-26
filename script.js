
const hamburger = document.querySelector(
  ".header .nav-bar .nav-list .hamburger"
);
const mobile_menu = document.querySelector(".header .nav-bar .nav-list ul");
const header = document.querySelector(".header.container");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("active");
  mobile_menu.classList.toggle("active");
});

document.addEventListener("scroll", () => {
  var scroll_position = window.scrollY;

  var scroll_position = window.scrollY;
  if (scroll_position > 250) {
    header.style.backgroundColor = "#29323c";
    header.style.opacity = "0.8";
  } else {
    header.style.backgroundColor = "transparent";
  }
});

/*Parallax Effect */
/* Service Item Effect */
const service1 = document.querySelector(
  ".service-bottom .service-item:nth-child(1)"
);
const service2 = document.querySelector(
  ".service-bottom .service-item:nth-child(2)"
);
const service3 = document.querySelector(
  ".service-bottom .service-item:nth-child(3)"
);
const service4 = document.querySelector(
  ".service-bottom .service-item:nth-child(4)"
);

document.addEventListener("scroll", () => {
  let scroll_position = window.scrollY;
  console.log(scroll_position);
  if (scroll_position > 600) {
    service1.classList.add("service1");
    service2.classList.add("service2");
    service3.classList.add("service2");
    service4.classList.add("service3");
  }
  /* End of Service Item Effect */
  /*Project Section */
  const project = document.querySelectorAll(".project-info");
  const img = document.querySelectorAll(".project-img");

  if (scroll_position > 1345) {
    project[0].classList.add("project2");
    img[0].classList.add("project1");
  }
  if (scroll_position > 1709) {
    project[1].classList.add("project2");
    img[1].classList.add("project1");
  }
  if (scroll_position > 2110) {
    project[2].classList.add("project2");
    img[2].classList.add("project1");
  }
  if (scroll_position > 2510) {
    project[3].classList.add("project2");
    img[3].classList.add("project1");
  }
  if (scroll_position > 2910) {
    project[4].classList.add("project2");
    img[4].classList.add("project1");
  }
});

/*End of Project Section*/
/*End of Parallax Effect */
