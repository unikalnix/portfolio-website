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

const whoWeAreDropDownIcon = document.getElementById(
  "who-we-are-dropdown-icon"
);
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
  aboutDropDown.classList.add("dropdown");
  aboutDropDown.addEventListener("mouseover", () => {
    document.querySelector(".dropdown-container").style.display = "block";
    whoWeAreDropDownIcon.style.transform = "rotate(0deg)";
    whoWeAreDropDownIcon.style.transition = "0.3s";
  });
  aboutDropDown.addEventListener("mouseout", () => {
    document.querySelector(".dropdown-container").style.display = "none";
    whoWeAreDropDownIcon.style.transform = "rotate(-90deg)";
  });
};

const menuOpenHandler = () => {
  const navbarMenu = document.getElementById("menu");
  const sidebar = document.getElementById("sidebar");
  const logo = document.getElementById("logo");
  if (window.innerWidth < 768) {
    navbarMenu.style.display = "block";
    logo.style.display = "none";
  } else {
    navbarMenu.style.display = "none";
    logo.style.display = "block";
  }

  // Toggle sidebar visibility
  navbarMenu.addEventListener("click", () => {
    sidebar.classList.toggle("open"); // Toggle the 'open' class
  });
};

window.addEventListener("DOMContentLoaded", () => {
  Array.from(navLinks)[0].classList.add("active");
  whoWeAreDropDownIcon.style.transform = "rotate(-90deg)";
  // scrollToTop();
  if(window.innerWidth < 768){
    hoverClick();
  }
  navLinksScrollHandler();
  skillAutoWriter();
  aboutDropDown();
  menuOpenHandler();
});

const hoverClick = () =>{
  
document.querySelectorAll(".project").forEach((item) => {
  // Track hover state
  let isHovered = false;

  item.addEventListener("click", (e) => {
    // Check if item is already in 'hover' state
    if (!isHovered) {
      // Show hover effect
      item.classList.add("projectHover"); // Assuming 'hover-effect' is the class that styles hover
      isHovered = true;
    } else {
      // Trigger action after second click
      console.log("Action performed");
      window.location.href = 'index.html'
      item.classList.remove("projectHover"); // Optional: Remove hover effect after action
      isHovered = false;
    }
  });

  // Optional: Reset on mouseleave (if needed)
  item.addEventListener("mouseleave", () => {
    item.classList.remove("projectHover");
    isHovered = false;
  });
});

}

// Skills data
const skillsSection = [
  { name: 'HTML', level: 90 },
  { name: 'CSS', level: 85 },
  { name: 'JavaScript', level: 80 },
  { name: 'React', level: 75 },
  { name: 'Node.js', level: 70 },
];

// Blog posts data
const blogPosts = [
  { 
    title: 'Getting Started with React', 
    date: '2023-01-15', 
    excerpt: 'Learn the basics of React and start building your first app.' 
  },
  { 
    title: 'CSS Grid vs Flexbox', 
    date: '2023-02-22', 
    excerpt: 'Understand the differences and when to use each layout system.' 
  },
  { 
    title: 'JavaScript ES6 Features', 
    date: '2023-03-10', 
    excerpt: 'Explore the powerful features introduced in ES6.' 
  },
];

// Social profiles data
const socialProfiles = [
  { name: 'GitHub', icon: 'fab fa-github', url: 'https://github.com/yourusername' },
  { name: 'LinkedIn', icon: 'fab fa-linkedin', url: 'https://linkedin.com/in/yourusername' },
  { name: 'Twitter', icon: 'fab fa-twitter', url: 'https://twitter.com/yourusername' },
];

// Function to populate skills
function populateSkills() {
  const skillsContainer = document.querySelector('.skills-container');
  skillsSection.forEach(skill => {
    const skillItem = document.createElement('div');
    skillItem.classList.add('skill-item');
    skillItem.innerHTML = `
      <div class="skill-name">${skill.name}</div>
      <div class="skill-bar">
        <div class="skill-progress" style="width: ${skill.level}%"></div>
      </div>
    `;
    skillsContainer.appendChild(skillItem);
  });
}

// Function to populate blog posts
function populateBlogPosts() {
  const blogContainer = document.querySelector('.blog-container');
  blogPosts.forEach(post => {
    const blogPost = document.createElement('div');
    blogPost.classList.add('blog-post');
    blogPost.innerHTML = `
      <h3 class="blog-title">${post.title}</h3>
      <div class="blog-date">${post.date}</div>
      <p class="blog-excerpt">${post.excerpt}</p>
      <a href="#" class="read-more">Read More</a>
    `;
    blogContainer.appendChild(blogPost);
  });
}

// Function to populate social profiles
function populateSocialProfiles() {
  const socialContainer = document.querySelector('.social-container');
  socialProfiles.forEach(profile => {
    const socialItem = document.createElement('a');
    socialItem.classList.add('social-item');
    socialItem.href = profile.url;
    socialItem.target = '_blank';
    socialItem.innerHTML = `
      <i class="${profile.icon} social-icon"></i>
      <span>${profile.name}</span>
    `;
    socialContainer.appendChild(socialItem);
  });
}

// Function to handle form submission
function handleFormSubmission(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  
  // Here you would typically send this data to a server
  console.log('Form submitted:', { name, email, message });
  
  // Clear the form
  event.target.reset();
  
  // Show a success message (you can replace this with a more sophisticated notification)
  alert('Message sent successfully!');
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
  populateSkills();
  populateBlogPosts();
  populateSocialProfiles();
  
  const contactForm = document.getElementById('contact-form');
  contactForm.addEventListener('submit', handleFormSubmission);
});