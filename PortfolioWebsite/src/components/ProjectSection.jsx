

const projects = [
    {
        id:1,
        title: "Movie App",
        description: "A movie app that allows users to search for movies and view details.",
        image:"\projects\Screenshot 2025-05-22 171333.png",
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
            </div>
        </section>
    )

}
