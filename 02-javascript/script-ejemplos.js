// Datos de ejemplo que puedes reutilizar en tu CV
const projects = [
  { title: "Landing personal", tech: ["HTML", "CSS"], year: 2024, url: "#" },
  { title: "API demo", tech: ["JavaScript", "Fetch"], year: 2025, url: "#" },
  { title: "Dashboard basico", tech: ["HTML", "CSS", "JS"], year: 2025, url: "#" },
];

const skills = [
  { name: "JavaScript", level: "en progreso" },
  { name: "HTML y CSS", level: "solido" },
  { name: "Git y GitHub", level: "en progreso" },
];

// Utilidades de datos (se pueden ejecutar en Node)
function filterProjectsByWord(word) {
  return projects.filter((project) =>
    project.title.toLowerCase().includes(word.toLowerCase())
  );
}

function experienceYears(sinceYear) {
  const current = new Date().getFullYear();
  return Math.max(0, current - sinceYear);
}

function validateContact({ name, email, message }) {
  const errors = [];
  if (!name || name.trim().length < 2) errors.push("Nombre incompleto");
  if (!email || !/^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$/.test(email))
    errors.push("Email invalido");
  if (!message || message.trim().length < 10)
    errors.push("Mensaje muy corto (min 10 caracteres)");
  return { ok: errors.length === 0, errors };
}

// Funciones para DOM (solo corren si hay document disponible)
function renderProjects(containerId, items = projects) {
  if (typeof document === "undefined") return;
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = "";
  items.forEach((item) => {
    const card = document.createElement("article");
    card.className = "project-card";
    card.innerHTML = `
      <h3>${item.title}</h3>
      <p><strong>Tech:</strong> ${item.tech.join(", ")}</p>
      <p><strong>Anio:</strong> ${item.year}</p>
      <a href="${item.url}" target="_blank" rel="noreferrer">Ver detalle</a>
    `;
    container.appendChild(card);
  });
}

function toggleTheme() {
  if (typeof document === "undefined" || typeof localStorage === "undefined")
    return;
  const next = document.body.dataset.theme === "dark" ? "light" : "dark";
  document.body.dataset.theme = next;
  localStorage.setItem("preferred-theme", next);
}

function applySavedTheme() {
  if (typeof document === "undefined" || typeof localStorage === "undefined")
    return;
  const saved = localStorage.getItem("preferred-theme");
  if (saved) {
    document.body.dataset.theme = saved;
  }
}

function wireContactForm(formSelector) {
  if (typeof document === "undefined") return;
  const form = document.querySelector(formSelector);
  const status = document.querySelector(`${formSelector} .form-status`);
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = {
      name: form.querySelector("[name='name']")?.value || "",
      email: form.querySelector("[name='email']")?.value || "",
      message: form.querySelector("[name='message']")?.value || "",
    };
    const result = validateContact(data);
    if (result.ok) {
      status && (status.textContent = "Mensaje listo para enviar (cliente).");
      form.reset();
    } else {
      status && (status.textContent = `Faltan datos: ${result.errors.join(", ")}`);
    }
  });
}

function initPage() {
  if (typeof document === "undefined") return;
  applySavedTheme();
  renderProjects("projects");

  const themeButton = document.getElementById("toggle-theme");
  if (themeButton) {
    themeButton.addEventListener("click", toggleTheme);
  }

  wireContactForm("#contact-form");
}

// Ejecuta initPage al cargar en el navegador
if (typeof document !== "undefined") {
  document.addEventListener("DOMContentLoaded", initPage);
}

// Demostraciones al correr en Node
function runCliDemos() {
  console.log("Demo: filtrar proyectos que contengan 'api'");
  console.table(filterProjectsByWord("api"));

  console.log("Demo: anos de experiencia desde 2022");
  console.log(`${experienceYears(2022)} anos`);

  console.log("Demo: validar contacto");
  const result = validateContact({
    name: "Ana Dev",
    email: "correo@ejemplo.com",
    message: "Quiero colaborar en un proyecto web.",
  });
  console.log(result);
}

if (typeof require !== "undefined" && require.main === module) {
  runCliDemos();
}
