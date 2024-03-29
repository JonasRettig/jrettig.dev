import Header from "@/components/header";
import Footer from "@/components/footer";
import Job from "@/components/job";

export default function About() {
    return (
        <div className="h-screen">
            <Header highlight={"about"}/>
            <div className="w-4/6 flex flex-col justify-self-center mx-auto max-sm:w-11/12 min-h-[88%]">
                <div className="flex flex-row">
                    <div className="flex flex-col w-4/6">
                        <b className="text-lg"> Ein (paar) Fakten über mich </b>
                        <div> - 23 Jahre alt </div>
                        <div> - Münsteraner durch und durch </div>
                        <div> - Lieblingssong (momentan): <a href="https://open.spotify.com/track/2JIVeQQvIdyQvrz9Mhi6qL?autoplay=true"  target="_blank"> Does Your Mother Know von ABBA </a></div>
                        <div> - Lieblingsspiel: <a href="https://store.steampowered.com/app/501300/What_Remains_of_Edith_Finch/" target="_blank"> What Remains of Edith Finch </a></div>
                        <div> - Lieblingsfilm: <a href="https://letterboxd.com/film/paddington-2/" target="_blank"> Paddington 2 </a></div>
                        <div> - Lieblingsreise: entweder die Schweiz oder New York</div>
                        <div> - sonstige Hobbies: Photographieren, Backen, Brettspiele </div>
                    </div>
                    <div className="relative w-2/6 ml-10">
                        <img src="/me_good.jpeg" alt="Ein Bild von Jonas Rettig. Er trägt ein Hemd und lächelt in die Kamera." className="absolute"/>
                    </div>
                </div>
                <div className="w-4/6 mt-2 border-t-2">
                        <b className="text-lg"> Bildungsweg </b>
                        <div>
                            <div> - Bachelor in Wirtschaftsinformatik an der Universität Münster </div>
                            <div className="ml-6"> 2019 bis April 2024, noch kein Abschluss </div>
                        </div>
                        <div>
                            <div> - Abitur am Gymnasium Paulinum </div>
                            <div className="ml-6"> 2011 bis 2019, Abschlussnote 1,8 </div>
                        </div>
                </div>
                <div className="w-4/6 mt-2 border-t-2">
                    <b className="text-lg"> Berufserfahrung </b>
                    <Job 
                        name={"Werkstudent im IT-Support"}
                        company={"Oberverwaltungsgericht für das Land Nordrhein-Westfalen"}
                        what = {["IT-Support, Einrichten von IT-Arbeitsplätzen", "Leitung von Schulungen und Erstellen von Dokumentationen", "Entwicklung einer Informationsanzeige für öffentliche Räume des Gerichts", "Unterstützung des lokalen IT-Teams"]}
                        timeframe={"Mai 2022 - heute"}
                    /> 
                    <Job 
                        name={"Studentische Hilfskraft im IT-Support"}
                        company={"DRK Landesverband Westfalen-Lippe Betriebswirtschaftliche Beratungs- und Service-GmbH"}
                        what = {["Betreuung des Helpdesk-Ticketsystems", "Einrichten von Arbeitsplätzen", "Eigenständiges Bearbeiten administrativer Aufgaben"]}
                        timeframe={"April 2021 - April 2022"}
                    /> 
                    <Job 
                        name={"Arbeit an einer Studie zur Bewertung der kommunalen Umsetzung des OZG"}
                        company={"Lehrstuhl für Wirtschaftsinformatik und Informationsmanagement an der Universität Münster"}
                        what = {["Datenerhebung und Datenanalyse", "Literaturrecherche"]}
                        timeframe={"August 2020 - Dezember 2020"}
                    /> 
                </div>
                <div>
                    Mein ganzer Lebenslauf ist <a href="/Lebenslauf.pdf"> hier </a> zu finden.
                </div>
            </div>
            <Footer/>
        </div>
    )
}