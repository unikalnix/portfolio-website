console.log("JavaScript is working");

const navLinks = Array.from(document.querySelectorAll("#nav-links"));

function navLinksScrollHandler() {
  navLinks.forEach((navLink) => {
    navLink.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = navLink.firstElementChild.getAttribute("href");
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        navLinks.forEach((link) => link.classList.remove("active"));
        navLink.classList.add("active");
        window.scrollTo({
          top: targetElement.offsetTop,
        });
      }
    });
  });
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
  });
};
const skills = [
  "Full stack Developer",
  "Mern App Developer",
  "JavaScript Instructor",
];
const skillHeading = document.querySelector(".home-autotype-effect"); // Adjusted selector for consistency
// skillHeading.innerHTML = "";
let skillIndex = 0;
let charIndex = 0;
let wordSpeed = 100; // Delay between each character
let skillSpeed = 1000; // Delay between each skill

// Function to handle typing each skill one character at a time
const skillAutoWriter = () => {
  if (skillIndex < skills.length) {
    const currentSkill = skills[skillIndex];

    // Add characters one by one
    if (charIndex < currentSkill.length) {
      skillHeading.innerHTML += currentSkill[charIndex];
      charIndex++;
      setTimeout(skillAutoWriter, wordSpeed);
    } else {
      // Pause and clear after typing the full word, then move to the next skill
      setTimeout(() => {
        skillHeading.innerHTML = "";
        charIndex = 0;
        skillIndex = (skillIndex + 1) % skills.length; // Loop back to the first skill
        skillAutoWriter();
      }, skillSpeed);
    }
  }
};

const aboutDropDown = () => {
  const aboutDropDown = document.getElementById("about-dropdown");
  let dropdown = document.createElement("div");
    dropdown.innerHTML = `
    <div class="dropdown-container">
    <div>We are innovative thinkers dedicated to bringing <a style="text-decoration:underline;" href="#skills">ideas</a> to life.</div>
    <div>We are a <a style="text-decoration:underline;" href="#contact">team</a> building responsive, efficient, and engaging web solutions</div>
    <div><a style="text-decoration:underline;" href="#projects">10 projects completed</a></div>
    </div>
`;
    aboutDropDown.appendChild(dropdown);
    aboutDropDown.classList.add('dropdown');
  aboutDropDown.addEventListener("mouseover", () => {
    document.querySelector('.dropdown-container').style.display = 'block'
  });
  aboutDropDown.addEventListener("mouseout", () => {
    document.querySelector('.dropdown-container').style.display = 'none'
  });
};

const menuOpenHandler = () =>{
    const navbarMenu = document.getElementById('menu');
    const sidebar = document.getElementById('sidebar');
    const logo =  document.getElementById('logo');
    if(window.innerWidth < 768){
        navbarMenu.style.display = 'block';
        logo.style.display = 'none';
    }else{
        navbarMenu.style.display = 'none';
        logo.style.display = 'block';
    }

// Toggle sidebar visibility
navbarMenu.addEventListener('click', () => {
    sidebar.classList.toggle('open'); // Toggle the 'open' class
});

// Close the sidebar when a link is clicked
navLinks.forEach((navLink) => {
    navLink.addEventListener("click", () => {
        sidebar.classList.remove('open'); // Close sidebar on link click
    });
});
}

window.addEventListener("DOMContentLoaded", () => {
  Array.from(navLinks)[0].classList.add("active");
  scrollToTop();
  navLinksScrollHandler();
  skillAutoWriter();
  aboutDropDown();
  menuOpenHandler()
});
