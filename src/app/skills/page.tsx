import Footer from "@/components/footer";
import Header from "@/components/header";
import Skill from "@/components/skill";
import { IoLogoJavascript } from "react-icons/io5";
import { FaTools, FaJava, FaLightbulb, FaFlagUsa, FaFileCode } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";

export default function Skills() {
    return (
        <div className="h-screen">
            <Header highlight={"skills"}/>
            <div className="w-4/6 flex flex-col justify-self-center mx-auto max-sm:w-11/12 min-h-[88%]">
                <Skill 
                    icon={<FaJava />} 
                    skill={"Java"} 
                    info={"Seit Juni 2024 arbeite ich Hauptberuflich mit Java. Neben der Full-Stack Entwicklung mit Java habe ich auch Kontakt mit anderen angrenzenden Technologien wie Wicket, Hibernate und Maven sammeln können."}
                    level={9}
                />
                <Skill 
                    icon={<IoLogoJavascript />} 
                    skill={"Webentwicklung"} 
                    info={"In den letzten Jahren habe ich mich hauptsächlich mit Webentwicklung beschäftigt. Neben viel Arbeit in der Anwendungsentwicklung habe ich auch Erfahrung im Umsetzen von Designs in die Realität. Gearbeitet habe ich mit Java-/Typescript, React.js, Next.js, Tailwind CSS und Material UI."}
                    level={9}
                />
                <Skill 
                    icon={<FaFileCode />} 
                    skill={"Sonstige Entwicklung"} 
                    info={"Auch in anderen Programmiersprachen habe ich bereits Erfahrungen sammeln können. Diese liegen haupsächlich in Python, aber auch mit R, C# und SQL habe ich schon viel gearbeitet."}
                    level={7}
                />
                <Skill 
                    icon={<FaFlagUsa />} 
                    skill={"Englisch"} 
                    info={"Ich habe schon immer ein Interesse an Englisch gehabt und deswegen die Sprache auch als Leistungskurs im Abitur gehabt. Ich durfte Englisch bei einem Auslandsaufenthalt in den USA anwenden und konsumiere auch die meisten Medien in meiner Freizeit auf Englisch."}
                    level={10}
                />
                <Skill 
                    icon={<FaLightbulb />} 
                    skill={"Design Thinking"} 
                    info={"Design Thinking ist eine Methodik zur Lösung von Problemen durch innovative Ideen. Hierbei werden die Endnutzer dieser Lösung in den Mittelpunkt gestellt und durch verschiedene Methoden wie Brainstorming oder Prototyping Lösungen entwickelt. Ich durfte diese Methodik in einem Praxisprojekt in Zusammenarbeit mit Celonis und Southwire in den USA anwenden."}
                    level={8}
                />
                <Skill 
                    icon={<FaTools />} 
                    skill={"Tools"} 
                    info={"Natürlich habe ich auch Erfahrung mit verschiedenen Tools, die in der Softwareentwicklung verwendet werden. Ich habe Erfahrung mit Git, Docker, Jira, Confluence, Figma und vielen mehr."}
                    level={7}
                />
                <Skill 
                    icon={<RiTeamFill />} 
                    skill={"Teamwork"} 
                    info={"Ich durfte in den letzten Jahren in vielen verschiedenen Teams arbeiten. Hier habe ich gelernt, wie wichtig es ist, sich gegenseitig zu unterstützen und sich aufeinander verlassen zu können. Ich konnte sowohl in Remote-Teams als auch in Teams vor Ort arbeiten, zudem habe ich auch mit der Arbeit in internationalen Teams Erfahrung."}
                    level={10}
                />
            </div>
            <Footer/>
        </div>
    )
}