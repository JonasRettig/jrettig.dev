"use client"
import { useEffect } from "react";

export default function TextScrollHome() {

    useEffect(() => {
        orchestrateTypewriter();
    }, [])

    async function typeWriter(messageToShow:string, targetElement:string, timeBetween:number, currentPos = 0) {
        return new Promise((resolve, reject) => {
        if (currentPos < messageToShow.length) {
            document.getElementById(targetElement)!.innerHTML += messageToShow.charAt(currentPos);
            currentPos++;
            setTimeout(function() { 
            resolve(typeWriter(messageToShow, targetElement, timeBetween, currentPos)); 
            }, timeBetween);
        } else if (currentPos === messageToShow.length) {
            resolve(true);
        }
        });
    }

    async function orchestrateTypewriter() {
        if(document.getElementById("textScroll")!.innerHTML === "") {
        await(typeWriter("Moin, ich bin Jonas", "textScroll", 100))
        .then(() => {
            return typeWriter("Entwickler mit ❤️ aus Münster", "textScroll2", 75)
        })
        }
    }

    return (
        <div className="flex flex-col mx-auto">
            <h1 id="textScroll" className="text-6xl max-sm:text-5xl min-h-20 max-h-20"/>
            <div id="textScroll2" className="text-4xl max-sm:text-2xl min-h-20 max-h-20 max-sm:mt-3"/>
        </div>    
    )
}