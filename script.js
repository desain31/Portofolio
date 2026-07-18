/* ==========================
   LOADING SCREEN
========================== */

window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  setTimeout(() => {
    loader.style.opacity = "0";
    loader.style.visibility = "hidden";
  }, 1000);
});

/* ==========================
   TYPING EFFECT
========================== */

const typingText = document.getElementById("typing");

const words = ["Web Developer", "UI Designer", "Designer", "Editor Video"];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
  const currentWord = words[wordIndex];

  if (!deleting) {
    typingText.textContent = currentWord.substring(0, charIndex++);

    if (charIndex > currentWord.length) {
      deleting = true;

      setTimeout(typeEffect, 1500);
      return;
    }
  } else {
    typingText.textContent = currentWord.substring(0, charIndex--);

    if (charIndex < 0) {
      deleting = false;
      wordIndex++;

      if (wordIndex >= words.length) wordIndex = 0;
    }
  }

  setTimeout(typeEffect, deleting ? 50 : 100);
}

typeEffect();

/* ==========================
   BACK TO TOP
========================== */

const topBtn = document.getElementById("topBtn");

window.onscroll = function () {
  if (document.documentElement.scrollTop > 300) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
};

topBtn.onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

/* ==========================
   SKILL BAR ANIMATION
========================== */

const progress = document.querySelectorAll(".progress");

function showSkill() {
  progress.forEach((bar) => {
    const position = bar.getBoundingClientRect().top;

    if (position < window.innerHeight - 50) {
      bar.style.width = bar.classList.contains("html")
        ? "70%"
        : bar.classList.contains("css")
          ? "70%"
          : bar.classList.contains("js")
            ? "50%"
            : bar.classList.contains("php")
              ? "30%"
              : bar.classList.contains("capcut")
                ? "70%"
                : bar.classList.contains("capcut")
                  ? "90%"
                  : "90%";
    }
  });
}

window.addEventListener("scroll", showSkill);

/* ==========================
   FADE ANIMATION
========================== */

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0px)";
    }
  });
});

sections.forEach((section) => {
  section.style.opacity = "0";
  section.style.transform = "translateY(50px)";
  section.style.transition = "1s";

  observer.observe(section);
});

/* ==========================
   COUNTER
========================== */

const counters = document.querySelectorAll(".counter-box h1");

let started = false;

function startCounter() {
  if (started) return;

  const counterSection = document.querySelector(".counter");

  if (!counterSection) return;

  const position = counterSection.getBoundingClientRect().top;

  if (position < window.innerHeight) {
    started = true;

    counters.forEach((counter) => {
      const target = parseInt(counter.innerText);

      let number = 0;

      const speed = target / 100;

      const update = () => {
        number += speed;

        if (number < target) {
          counter.innerText = Math.floor(number) + "+";

          requestAnimationFrame(update);
        } else {
          counter.innerText = target + "+";
        }
      };

      update();
    });
  }
}

window.addEventListener("scroll", startCounter);

/* ==========================
   NAVBAR ACTIVE LINK
========================== */

const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";

  document.querySelectorAll("section").forEach((section) => {
    const sectionTop = section.offsetTop - 120;

    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

const themeAI = document.getElementById("themeAI");

function updateThemeButton(){

    if(document.body.classList.contains("light-mode")){

        themeAI.innerHTML="🌞 Light Mode";

    }else{

        themeAI.innerHTML="🌙 Dark Mode";

    }

}

themeAI.onclick=()=>{

    document.body.classList.toggle("light-mode");

    updateThemeButton();

};

updateThemeButton();
/* ==========================
   HOVER EFFECT PROJECT
========================== */

document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-12px) scale(1.02)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0px) scale(1)";
  });
});

/* ==========================
   EMAILJS
========================== */

const form = document.getElementById("contactForm");

const sendBtn = document.getElementById("sendBtn");

const toast = document.getElementById("toast");

function showToast(message, type) {
  toast.innerHTML = message;

  toast.className = "show " + type;

  setTimeout(() => {
    toast.className = "";
  }, 3000);
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  sendBtn.innerHTML = "Mengirim...";

  sendBtn.classList.add("loading");

  emailjs
    .sendForm(
      "YOUR_SERVICE_ID",

      "YOUR_TEMPLATE_ID",

      this,
    )

    .then(() => {
      showToast("✅ Pesan berhasil dikirim", "success");

      sendBtn.innerHTML = "Kirim Pesan";

      sendBtn.classList.remove("loading");

      form.reset();
    })

    .catch(() => {
      showToast("❌ Gagal mengirim pesan", "error");

      sendBtn.innerHTML = "Kirim Pesan";

      sendBtn.classList.remove("loading");
    });
});

/* ==========================
   FILTER PROJECT
========================== */

const filterButtons = document.querySelectorAll(".filter button");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Hapus class active dari semua tombol
    filterButtons.forEach((btn) => btn.classList.remove("active"));

    // Tambahkan active ke tombol yang diklik
    button.classList.add("active");

    const filter = button.dataset.filter;

    projectCards.forEach((card) => {
      if (filter === "all") {
        card.style.display = "block";
      } else {
        if (card.dataset.category === filter) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      }
    });
  });
});

/* ===========================
   AI ASSISTANT
=========================== */

const aiToggle=document.getElementById("aiToggle");

const aiBox=document.getElementById("aiBox");

const closeAI=document.getElementById("closeAI");

aiToggle.onclick=()=>{

    aiBox.style.display=
    aiBox.style.display==="block"
    ?"none"
    :"block";

}

closeAI.onclick=()=>{

    aiBox.style.display="none";

}

