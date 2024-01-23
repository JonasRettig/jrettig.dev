import Footer from "@/components/footer";
import Header from "@/components/header";

export default function Skills() {
    return (
        <div>
            <Header highlight={"skills"}/>
            <div className="w-4/6 flex flex-col justify-self-center mx-auto max-sm:w-11/12">
                <div className="mb-2">
                    <b> Webentwicklung </b>
                    <div>
                    In den letzten Jahren habe ich mich hauptsächlich mit Webentwicklung beschäftigt, wobei ich mich auf Frontend-Entwicklung spezialisiert habe. 
                    Meine Arbeit lag dabei hauptsächlich in der Anwendungsentwicklung, mittlerweile durfte ich aber auch Erfahrung im Design mit Tailwind CSS sammeln.
                    </div>
                </div>
                <div>
                    <b> Sonstige Entwicklung </b>
                    <div>
                    Durch mein Studium der Wirtschaftsinformatik habe ich auch Erfahrung in anderen Bereichen der Softwareentwicklung gesammelt. So habe ich bereits mit Java, Python, R, Haskell und SQL gearbeitet. 
                    Zudem bin ich mit verschiedenen Softwaretools, welche in der Softwareentwicklung eingesetzt werden, vertraut. Hierzu zählen unter anderem Git, Docker und Jira.
                    </div>
                </div>
                <div>
                    <b> Methodik </b>
                    <div>
                    Zudem konnte ich durch mein Studium Kontakt mit verschiedenen Methoden der Softwareentwicklung sammeln. 
                    Besonders spannend finde ich hier Design Thinking, zu welchem ich auch bei einem ERASMUS+ Vertiefungsmodul in den USA viel lernen konnte.
                    </div>
                </div>
                <div>
                    <b> Soft Skills </b>
                    <div>
                    Durch meine Erfahrung beim Sozialkompass konnte ich meine Soft Skills weiterentwickeln. Ich kann sehr gut im Team arbeiten und bin sehr kommunikativ. Zudem bin ich sehr lernbereit und kann mich schnell in neue Themen einarbeiten.
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}