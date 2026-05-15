const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const menuToggle = document.querySelector(".menu-toggle");
const portfolio = document.querySelector("[data-portfolio]");
const form = document.querySelector("[data-contact-form]");
const year = document.querySelector("[data-year]");

const phone = "5519984056043";

year.textContent = new Date().getFullYear();

window.addEventListener("scroll", () => {
  header.classList.toggle("is-scrolled", window.scrollY > 20);
});

menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

nav.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    nav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
  }
});

document.querySelectorAll("[data-scroll-portfolio]").forEach((button) => {
  button.addEventListener("click", () => {
    const direction = Number(button.dataset.scrollPortfolio);
    portfolio.scrollBy({
      left: direction * Math.min(520, window.innerWidth * 0.82),
      behavior: "smooth",
    });
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const business = data.get("business");
  const need = data.get("need");
  const message = data.get("message") || "Sem observações no momento.";

  const text = [
    "Olá, Invex! Quero um plano inicial para meu negócio.",
    "",
    `Negócio: ${business}`,
    `Necessidade: ${need}`,
    `Observação: ${message}`,
  ].join("\n");

  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 }
);

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
