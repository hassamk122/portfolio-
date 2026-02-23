fetch("./data/skills.json")
  .then((r) => r.json())
  .then((d) =>
    d.skills.forEach((s) => {
      const e = document.createElement("span");
      e.className = "skill-tag";
      e.textContent = s;
      document.querySelector(".skills-grid").appendChild(e);
    }),
  );


fetch("./data/projects.json")
  .then(res => res.json())
  .then(data => {
    const grid = document.querySelector(".project-grid");

    data.projects.forEach(project => {
      const card = document.createElement("div");
      card.className = "project-card";

      const title = document.createElement("h3");
      title.className = "project-title";
      title.textContent = project.title;

      const description = document.createElement("p");
      description.className = "project-description";
      description.textContent = project.description;

      const tagsContainer = document.createElement("div");
      tagsContainer.className = "project-tags";

      const githubLink = document.createElement("a");
      githubLink.className = "project-github-link"
      githubLink.innerHTML = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width=25 height=25 fill="currentColor" ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title></title> <g id="Complete"> <g id="arrow-up-right"> <g> <polyline data-name="Right" fill="none" id="Right-2" points="18.7 12.4 18.7 5.3 11.6 5.3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polyline> <line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="5.3" x2="17.1" y1="18.7" y2="6.9"></line> </g> </g> </g> </g></svg>`;
      githubLink.href = project.link;
      githubLink.target = "_blank";

      project.tags.forEach(tag => {
        const span = document.createElement("span");
        span.className = "project-tag";
        span.textContent = tag;
        tagsContainer.appendChild(span);
      });

      card.appendChild(title);
      card.appendChild(description);
      card.appendChild(tagsContainer);
      card.appendChild(githubLink)

      grid.appendChild(card);
    });
  });
