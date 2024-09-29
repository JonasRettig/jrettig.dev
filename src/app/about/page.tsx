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
                        <b className="text-lg"> Ein (paar) Infos über mich </b>
                        <div> Moin, ich bin Jonas :) </div>
                        <div> Ich lebe seit 24 Jahren in Münster und liebe diese Stadt genau so lange. </div>
                        <div> In meiner Freizeit spiele ich gerne Spiel (ob Brett- oder Video- ist mir hier gleich), schau Filme oder verbinge einfach einen entspannten Abend mit meinen Freunden. </div>
                    </div>
                    <div className="relative w-2/6 ml-10">
                        <img src="/me_good.jpeg" alt="Ein Bild von Jonas Rettig. Er trägt ein Hemd und lächelt in die Kamera." className="absolute"/>
                    </div>
                </div>
                <div className="w-4/6 mt-2 border-t-2">
                        <b className="text-lg"> Bildungsweg </b>
                        <div>
                            <div> - Bachelor in Wirtschaftsinformatik an der Universität Münster </div>
                            <div className="ml-6"> 2019 bis Mai 2024, Abschlussnote 2,5 </div>
                        </div>
                        <div>
                            <div> - Abitur am Gymnasium Paulinum </div>
                            <div className="ml-6"> 2011 bis 2019, Abschlussnote 1,8 </div>
                        </div>
                </div>
                <div className="w-4/6 mt-2 border-t-2">
                    <b className="text-lg"> Berufserfahrung </b>
                    <Job 
                        name={"Softwareentwickler"}
                        company={"GuideCom AG"}
                        what = {["Full-Stack-Development in Java", "Arbeit an der GuideCom HR-Suite", "Enge Zusammenarbeit mit dem Customer Service sowie den Kunden der GuideCom"]}
                        timeframe={"Juni 2024 - heute"}
                    /> 
                    <Job 
                        name={"Werkstudent im IT-Support"}
                        company={"Oberverwaltungsgericht für das Land Nordrhein-Westfalen"}
                        what = {["IT-Support, Einrichten von IT-Arbeitsplätzen", "Leitung von Schulungen und Erstellen von Dokumentationen", "Entwicklung einer Informationsanzeige für öffentliche Räume des Gerichts", "Unterstützung des lokalen IT-Teams"]}
                        timeframe={"Mai 2022 - April 2024"}
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