import Header from "@/Components/header";

export default function About() {
    return (
        <div>
            <Header/>
            <div className="w-4/6 flex flex-col justify-self-center mx-auto max-sm:w-11/12">
                <div>
                    Ich bin Jonas, gebürtiger Münsteraner. Die letzten Jahre habe ich an der Universität Münster Wirtschaftsinformatik studiert und bin nun auf der Suche nach einer neuen Herausforderung.
                </div>
                <div>
                    Im Studium habe ich gelernt, dass ich mich sehr für die Entwicklung von Software interessiere. Besonders spannend finde ich dabei die Frontend-Entwicklung, da ich hier meine kreative Ader ausleben kann.
                </div>
                <div>
                    Mein ganzer Lebenslauf ist wie folgt:
                </div>
                <embed src="Lebenslauf.pdf" className="w-4/6 h-screen" />
            </div>
        </div>
    )
}