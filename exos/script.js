document.addEventListener('DOMContentLoaded', () => {
    fetch('social-medias.json')
        .then(response => response.json())
        .then(data => {
            const socialLinks = data.social_links;
            const socialLinksContainer = document.querySelector('.social-links');

            socialLinks.forEach(link => {
                const li = document.createElement('li');
                const a = document.createElement('a');
                a.href = link.url;
                a.target = '_blank';

                const icon = document.createElement('i');
                icon.className = `fab fa-${link.icon}`;
                icon.addEventListener('mouseover', (event) => {
                    event.target.style.color = link.color;
                });
                icon.addEventListener('mouseout', (event) => {
                    event.target.style.color = 'white';
                });

                const span = document.createElement('span');
                span.textContent = link.name;

                const abbr = document.createElement('abbr');
                abbr.title = link.url;
                abbr.appendChild(span);

                a.appendChild(icon);
                a.appendChild(abbr);
                li.id = link.name.toLowerCase().replace(' ', '-');
                li.appendChild(a);
                socialLinksContainer.appendChild(li);
            });
        })
        .catch(error => console.error('Erreur lors du chargement des liens sociaux:', error));
});
