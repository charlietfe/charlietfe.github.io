document.addEventListener(
  "DOMContentLoaded",
  (event) => {

    const index = Math.floor(Math.random() * 3);
  
    particlesJS.load("particles-js", `assets/js/particles${index}.json`, function () {
      console.log("particles.js loaded - callback");
    });
  },
  false
);
