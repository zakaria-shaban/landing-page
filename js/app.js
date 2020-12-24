



const sections = document.querySelectorAll('section');
const menu = document.querySelector('#navbar__list');


// build the nav
function buildNav(){
    const fragment = document.createDocumentFragment();
    for (let sec of sections) {
        const li = document.createElement('li');
        const li_link = document.createElement('a');
        li_link.href = '#' + sec.id;
        li_link.className = "menu__link";
        li_link.setAttribute('data-id', sec.id);
        li_link.textContent = sec.getAttribute('data-nav');
        li.appendChild(li_link);
        fragment.appendChild(li);
    }
    menu.appendChild(fragment);
}

buildNav();


function addScroll(event){
  event.preventDefault();
   // prevent the click from completing
  let a = event.target; 
  // get the anchor clicked on
  let href = a.getAttribute('href'); 
  // get the href of the anchor
  let section = document.querySelector(href); 
  // get the section from the href
  let scrollTop = section.offsetTop;
   // get the top of that section href.section
;
  scrollTo({
      top: scrollTop,
      behavior: 'smooth'
  })
}
// Scroll to section on link click

menu.addEventListener('click', addScroll);




const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})