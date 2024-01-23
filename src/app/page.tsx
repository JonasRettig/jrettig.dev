"use client"
import Footer from "@/components/footer";
import Header from "@/components/header";
import { FaGithub, FaLinkedin, FaTools   } from "react-icons/fa";
import { MdArtTrack } from "react-icons/md";
import { IoMdPerson, IoIosMail  } from "react-icons/io";
import { useEffect } from "react";


export default function Home() {

  async function typeWriter(messageToShow:string, targetElement:string, timeBetween:number, currentPos = 0) {
    return new Promise((resolve, reject) => {
      if (currentPos < messageToShow.length) {
        document.getElementById(targetElement).innerHTML += messageToShow.charAt(currentPos);
        currentPos++;
        setTimeout(function() { 
          resolve(typeWriter(messageToShow, targetElement, timeBetween, currentPos)); 
        }, timeBetween);
      } else if (currentPos === messageToShow.length) {
        resolve(true);
      }
    });
  }

  useEffect(() => {
    orchestrateTypewriter()
  }, [])

  async function orchestrateTypewriter() {
    if(document.getElementById("textScroll").innerHTML === "") {
      await(typeWriter("Hallo, mein Name ist Jonas", "textScroll", 100))
      .then(() => {
        return typeWriter("Ich ❤️ Programmieren und neue Dinge zu lernen.", "textScroll2", 75)
      })
    }
  }


  return (
    <div className="h-screen">
      <Header highlight={"home"}/>
      <div className="flex items-center justify-center h-[88%] max-sm:items-start max-sm:mt-4">
        <div className="w-4/6 flex flex-col justify-self-center mx-auto max-sm:w-11/12">
          <h1 id="textScroll" className="text-6xl max-sm:text-4xl min-h-20 max-h-20"/>
          <div id="textScroll2" className="text-4xl max-sm:text-xl min-h-20 max-h-20"/>
          <div className="mt-10 flex flex-row mx-auto justify-evenly w-full max-sm:grid max-sm:grid-cols-2 max-sm:w-11/12 max-sm:justify-items-center max-sm:gap-4">
            <a id="home" href="/projects" className="text-8xl flex flex-col text-center hover:text-orangeHighlight w-1/6 justify-center items-center" >
              <MdArtTrack/>
              <h2 className="text-2xl">Portfolio</h2>
            </a>
            <a id="home" href="https://github.com/JonasRettig" target="_blank" className="text-8xl flex flex-col text-center hover:text-orangeHighlight w-1/6 justify-center items-center" >
              <FaGithub/>
              <h2 className="text-2xl">GitHub</h2>
            </a>
            <a id="home" href="https://www.linkedin.com/in/jonasrettig/" target="_blank" className="text-8xl flex flex-col text-center hover:text-orangeHighlight w-1/6 justify-center items-center" >
              <FaLinkedin/>
              <h2 className="text-2xl">LinkedIn</h2>
            </a>
            <a id="home" href="/skills" className="text-8xl flex flex-col text-center hover:text-orangeHighlight w-1/6 justify-center items-center" >
              <FaTools/>
              <h2 className="text-2xl">Meine Skills</h2>
            </a>
            <a id="home" href="/about" className="text-8xl flex flex-col text-center hover:text-orangeHighlight w-1/6 justify-center items-center" >
              <IoMdPerson/>
              <h2 className="text-2xl">Mehr über mich</h2>
            </a>
            <a id="home" href="mailto:jonas@jrettig.dev" className="text-8xl flex flex-col text-center hover:text-orangeHighlight w-1/6 justify-center items-center" >
              <IoIosMail/>
              <h2 className="text-2xl">Kontakt</h2>
            </a>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
