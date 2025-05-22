

const projects = [
    {
        id:1,
        title: "Movie App",
        description: "A movie app that allows users to search for movies and view details.",
        image: "/projects/image.png",
        link: "",
        github: "",
        tags: ["React", "JavaScript", "CSS"],
    },
    {
        id:2,
        title: "Weather App",
        description: "A weather app that provides current weather information for any location.",
        image:"\projects\image.png",
        link: "",
        github: "",
        tags: ["HTML", "JavaScript", "CSS"],
    }
]

export const ProjectSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="conainer mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl mb-4 text-center font-bold">Featured <span className="text-primary">Projects</span></h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my recent projects. I have worked on a variety of projects, from web applications to mobile apps. Each project has its own unique features and challenges.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project,key) => (
                        <div key={project.id} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                            <div className="h-48 overflow=hidden">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transistion-transform duration-500 group-hover:scale-110" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )

}
