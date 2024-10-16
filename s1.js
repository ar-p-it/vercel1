
const projects = [
    {
        title: "aaj",
        description: "Showcase All Your Projects 🖥️📱",
        stars: 237,
        language: "JavaScript",
        languageColor: "#f1e05a",
        forks: 127
    },
    {
        title: "kal",
        description: "Passionately Crafted CLI Setup ✨❤️",
        stars: 211,
        language: "React,CSS",
        languageColor: "#89e051",
        forks: 23
    },
    {
        title: "terem",
        description: "CLI Dev Setup in Your Hands ✌️📱",
        stars: 121,
        language: "Shell",
        languageColor: "#89e051",
        forks: 25
    },
    {
        title: "bahuit",
        description: "Make tmux powerful and pretty 🎨🚀",
        stars: 114,
        language: "Shell",
        languageColor: "#89e051",
        forks: 9
    },
    {
        title: "zyadaaa",
        description: "Your Personalized Dev Env ❤️💫",
        stars: 101,
        language: "Lua",
        languageColor: "#000080",
        forks: 9
    },
    {
        title: "mastiii",
        description: "Find Nerd Glyphs Easily 😎⚡",
        stars: 100,
        language: "Lua",
        languageColor: "#000080",
        forks: 1
    },
    {
        title: "chalbe",
        description: "Passionately Crafted CLI Setup ✨❤️",
        stars: 211,
        language: "Shell",
        languageColor: "#89e051",
        forks: 23
    },
    {
        title: "shera",
        description: "Passionately Crafted CLI Setup ✨❤️",
        stars: 211,
        language: "Shell",
        languageColor: "#89e051",
        forks: 23
    },
    {
        title: "heraaaa",
        description: "Passionately Crafted CLI Setup ✨❤️",
        stars: 211,
        language: "Shell",
        languageColor: "#89e051",
        forks: 23
    },
];

function createProjectCard(project) {
    return `
        <div class="project-card">
            <div class="project-image">
                <div class="view-project">
                    <a href="#${project.title}">View Project</a>
                </div>
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-stats">
                    <div class="stat">
                        <span>⭐</span>
                        <span>${project.stars}</span>
                    </div>
                    <div class="stat">
                        <span class="language-dot" style="background-color: ${project.languageColor}"></span>
                        <span>${project.language}</span>
                    </div>
                    <div class="stat">
                        <span>🍴</span>
                        <span>${project.forks}</span>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function renderProjects(projectsList) {
    const projectsGrid = document.getElementById('projectsGrid');
    projectsGrid.innerHTML = projectsList.map(project => createProjectCard(project)).join('');
}

function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredProjects = projects.filter(project => 
            project.title.toLowerCase().includes(searchTerm) ||
            project.description.toLowerCase().includes(searchTerm) ||
            project.language.toLowerCase().includes(searchTerm)
        );
        renderProjects(filteredProjects);
    });
}

// Initial render
renderProjects(projects);
setupSearch();
