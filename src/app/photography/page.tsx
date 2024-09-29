import Header from "@/components/header";
import projects from "@/data/projects.json";
import Footer from "@/components/footer";
import ImageCarousel from "@/components/imageCarousel";

interface Image {
    path: string,
    alt: string
}

export default function Fotos() {

    let images: Image[] = [
        {
            "path": "Fotos/Demmin_Kirche.JPEG",
            "alt": "Die Demminer Kirche, aufgenommen mit dem iPhone."
        },
        {
            "path": "Fotos/Grammentin_Haus.JPEG",
            "alt": "Ein Haus in Grammentin, Mecklenburg-Vorpommern, aufgenommen mit dem iPhone. Die Ansicht kommt aus dem sehr zu empfehlenden Restaurant 'Märchengarten'."
        },
        {
            "path": "Fotos/Muenster_Dom.JPEG",
            "alt": "Der Münsteraner Dom, aufgenommen mit dem iPhone. Dieses Foto ist auf der zweiten Etage des LWL-Museums für Kunst und Kultur entstanden, dieses ist auch im Vordergrund zu sehen."
        },
        {
            "path": "Fotos/Rostock_Kran.JPEG",
            "alt": "Die Rostocker Krane, aufgenommen mit meiner analogen Kamera. Der Linsenschutz meiner Kamera hatte sich hier ausversehen nicht ganz geöffnet."
        },
        {
            "path": "Fotos/Rostock_Rathaus.JPEG",
            "alt": "Das Rostocker Rathaus, aufgenommen mit meiner analogen Kamera. Die Möwe war ein glücklicher Zufall."
        },
        {
            "path": "Fotos/Upost_Badesteg.JPEG",
            "alt": "Der Uposter Badesteg, aufgenommen mit dem iPhone."
        },
        {
            "path": "Fotos/Upost_Fenster.JPEG",
            "alt": "Ein kaputtes Fenster in Uposter, aufgenommen mit dem iPhone."
        },
        {
            "path": "Fotos/Ockholm_Voegel.JPEG",
            "alt": "Ein paar Vögel über der Nordsee vor Ockholm, aufgenommen mit meiner analogen Kamera."
        }
    ]

    function getRandomImages(images: Image[]) {
        return images.sort(() => Math.random() - 0.5);
    }

    return (
        <div className="h-screen">
            <Header highlight={"photography"} />
            <div className="w-4/6 flex justify-self-center mx-auto max-sm:w-11/12 min-h-[88%]">
                <div className="flex flex-col">
                    <h1 className="font-bold"> Meine Fotos </h1>
                    <div> Ich fotographiere zwar nicht professionell, dafür aber gerne. Es folgen ein paar Fotos, die ich teilweise mit meiner iPhone-Kamera, teilweise mit einer anaolgen Kamera aufgenommen habe. </div>
                    <div> Das hier ist nur eine kleine Auswahl meiner Fotos in einer zufälligen Reihenfoge. </div>
                    <div className="w-4/5 self-center h-full mt-10">
                        <ImageCarousel images={getRandomImages(images)} showAltAsInfo={true} />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}