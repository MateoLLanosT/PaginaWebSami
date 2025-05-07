(function () {
  const isAnimationOk = window.matchMedia('(prefers-reduced-motion: no-preference)').matches;
  // Cnahge to false to make the animations play when the section's in viewport
  const scrub = true;

  if (isAnimationOk) {
    setupAnimations();
  }

  function setupAnimations() {
    gsap.from(".keyhole", {
      "clip-path": "polygon(0% 0%, 0% 100%, 25% 100%, 25% 25%, 75% 25%, 75% 75%, 25% 75%, 25% 100%, 100% 100%, 100% 0%)",
      scrollTrigger: {
        trigger: ".section--primary",
        start: "top top", // when the top of the trigger hits the top of the viewport
        end: "bottom bottom", // bottom of the trigger hits the bottom of the vp
        scrub: scrub,
        markers: false } });



    gsap.to(".arrow", {
      opacity: 0,
      scrollTrigger: {
        trigger: ".section--primary",
        start: "top top", // when the top of the trigger hits the top of the viewport
        end: "+=200", // scroll 150px down
        scrub: scrub } });


  }

  document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
      document.getElementById('nav-toggle').checked = false;
    });
  });
  
  
})();

//

function clicc() {
  
  const modal = document.createElement("div");
  modal.classList.add("video-modal");

  modal.innerHTML = `
    <div class="video-container">
      <span class="video-close" onclick="cerrarModal()">&times;</span>
      <video controls autoplay>
        <source src="Recursos/Siecha.mp4" type="video/mp4">
        Tu navegador no soporta video HTML5.
      </video>
    </div>
  `;

  document.body.appendChild(modal);

 
  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      cerrarModal();
    }
  });
}

function cerrarModal() {
  const modal = document.querySelector(".video-modal");
  if (modal) {
    modal.remove(); // Elimina el modal del DOM
  }
}





