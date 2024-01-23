"use client"
import Footer from "@/components/footer";
import Header from "@/components/header";
import { FaGithub, FaLinkedin, FaTools   } from "react-icons/fa";
import { MdArtTrack } from "react-icons/md";
import { IoMdPerson, IoIosMail  } from "react-icons/io";
import { useEffect } from "react";


export default function Home() {

  return (
    <div className="h-screen">
      <Header highlight={"home"}/>
      <div className="flex items-center justify-center h-[88%] max-sm:items-start max-sm:mt-4">
        <div className="w-4/6 flex flex-col justify-self-center mx-auto max-sm:w-11/12">
          <h1 className="text-6xl relative w-[max-content] before:absolute before:inset-0 before:animate-typewriter before:bg-darkBG max-sm:before:animate-none max-sm:bg-transparent max-sm:before:relative max-sm:text-4xl">Hallo, <br/> mein Name ist Jonas</h1>
          <div className="text-4xl max-sm:text-xl">
            Ich liebe es zu programmieren und neue Dinge zu lernen.
          </div>
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
