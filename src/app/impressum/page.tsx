import Footer from "@/components/footer";
import Header from "@/components/header";

export default function Impressum() {
    return (
        <div className="h-screen">
            <Header highlight="false"/>
            <div className="w-4/6 flex flex-col justify-self-center mx-auto max-sm:w-11/12 h-[88%]">
                <h1 className="text-lg"><b>Impressum</b></h1>
                <h2>Angaben gem&auml;&szlig; &sect; 5 TMG</h2>
                <div className="flex flex-col">
                    <div className="my-2 ml-4">
                        <p>Jonas Rettig<br />
                        Anton-Knubel-Weg 64<br />
                        48167, M&uuml;nster</p>
                    </div>
                    <div className="mb-2">
                        <h2>Kontakt</h2>
                        <p className="ml-4">Telefon: +49 1575 5080848<br />
                        E-Mail: jonas@jrettig.dev</p>
                    </div>
                </div>
                <p>Quelle: <a href="https://www.e-recht24.de">eRecht24</a></p>
            </div>
            <Footer/>
        </div>
    )
}