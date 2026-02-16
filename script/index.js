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

      project.tags.forEach(tag => {
        const span = document.createElement("span");
        span.className = "project-tag";
        span.textContent = tag;
        tagsContainer.appendChild(span);
      });

      card.appendChild(title);
      card.appendChild(description);
      card.appendChild(tagsContainer);

      grid.appendChild(card);
    });
  });
