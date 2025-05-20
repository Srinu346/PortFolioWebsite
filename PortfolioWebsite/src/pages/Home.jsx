import { ThemeToggle } from "../components/ThemeToggle"
import { StarBackground } from "../components/StarBackground"
import { NavBar } from "../components/NavBar"
import { HeroSection } from "../components/HeroSection"
import { AboutSection } from "../components/AboutSection"
import { SkillSection } from "../components/SkillSection"
import { ProjectSection } from "../components/ProjectSection"


export const Home=()=>{
    return (
        <div className="min-h-screen">

            {/*ToggleTheme*/}

            <ThemeToggle  />

            {/*BackGroundEffect*/}
            <StarBackground/>

            {/*NavBar*/}
            <NavBar />

            {/*MainContent*/}
            <main>
                <HeroSection />
                <AboutSection />
                <SkillSection />
                <ProjectSection />
            </main>

            {/*Footer*/}


        </div>
    )
}