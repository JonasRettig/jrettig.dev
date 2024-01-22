import Footer from "@/components/footer";
import Header from "@/components/header";

export default function Impressum() {
    return (
        <div>
            <Header/>
            <div className="w-4/6 flex flex-col justify-self-center mx-auto max-sm:w-11/12">
                <h1>Impressum</h1>
                <h2>Angaben gem&auml;&szlig; &sect; 5 TMG</h2>
                <p>Jonas Rettig<br />
                Anton-Knubel-Weg 64<br />
                48167 M&uuml;nster</p>
                <h2>Kontakt</h2>
                <p>Telefon: 015755080848<br />
                E-Mail: jonas@jrettig.dev</p>
                <p>Quelle: <a href="https://www.e-recht24.de">eRecht24</a></p>
            </div>
            <Footer/>
        </div>
    )
}