const sideMenu = document.querySelector('#sideMenu');
const navBar = document.querySelector("nav");
const navLinks = document.querySelector("nav ul");

function openMenu() {
    sideMenu.style.transform = 'translateX(-16rem)';
}

function closeMenu() {
    sideMenu.style.transform = 'translateX(16rem)';
}

// ===== Read More Toggle =====
const readMoreBtns = document.querySelectorAll('.read-more-btn');
readMoreBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const id = btn.getAttribute('data-id');
    const shortText = document.querySelector(`#shortText-${id}`);
    const moreText = document.querySelector(`#moreText-${id}`);

    if (moreText.classList.contains('hidden')) {
      shortText.classList.add('hidden');
      moreText.classList.remove('hidden');
      btn.innerHTML = `Show less <img src="./images/right-arrow.png" alt="" class="w-4">`;
    } else {
      shortText.classList.remove('hidden');
      moreText.classList.add('hidden');
      btn.innerHTML = `Read more <img src="./images/right-arrow.png" alt="" class="w-4">`;
    }
  });
});

// ===== Scroll Nav Effect =====
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navBar.classList.add(
      "bg-white",
      "bg-opacity-50",
      "backdrop-blur-lg",
      "shadow-sm"
    );
  } else {
    navBar.classList.remove(
      "bg-white",
      "bg-opacity-50",
      "backdrop-blur-lg",
      "shadow-sm"
    );
  }
});

// Theme setup at load
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}

// Toggle function
function toggleTheme() {
  document.documentElement.classList.toggle("dark");

  if (document.documentElement.classList.contains("dark")) {
    localStorage.theme = "dark";
  } else {
    localStorage.theme = "light";
  }
}

// Button listener
const themeBtn = document.getElementById("themeBtn");
if (themeBtn) {
  themeBtn.addEventListener("click", toggleTheme);
}

