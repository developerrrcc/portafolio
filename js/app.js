 const text = "Hola, soy Rolin, bienvenido.";
    let i = 0;
    let forward = true;
    const speed = 100;
    const delay = 2000;

    function typeWriter() {
      const el = document.getElementById("typewriter");

      if (forward) {
        el.textContent = text.substring(0, i++);
        if (i > text.length) {
          forward = false;
          setTimeout(typeWriter, delay);
          return;
        }
      } else {
        el.textContent = text.substring(0, i--);
        if (i < 0) {
          forward = true;
          i = 0;
        }
      }
      setTimeout(typeWriter, speed);
    }

typeWriter();

const form = document.getElementById("contactForm");
  form.addEventListener("submit", function() {
  setTimeout(() => form.reset(), 100); 
});
