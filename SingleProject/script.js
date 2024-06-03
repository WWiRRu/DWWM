document.addEventListener("DOMContentLoaded", () => {
  fetch("social-medias.json")
    .then((response) => response.json())
    .then((data) => {
      const socialLinks = data.social_links;
      const socialLinksContainer = document.querySelector(".social-links");
      if (socialLinks == null) {
        return;
      }
      socialLinks.forEach((link) => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = link.url;
        a.target = "_blank";

        const icon = document.createElement("i");
        icon.className = `fab fa-${link.icon}`;
        icon.addEventListener("mouseover", (event) => {
          event.target.style.color = link.color;
        });
        icon.addEventListener("mouseout", (event) => {
          event.target.style.color = "white";
        });

        a.appendChild(icon);
        li.id = link.name.toLowerCase().replace(" ", "-");
        li.appendChild(a);
        socialLinksContainer.appendChild(li);
      });
    })
    .catch((error) =>
      console.error("Erreur lors du chargement des liens sociaux:", error)
    );

  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;
    });
  }
});
