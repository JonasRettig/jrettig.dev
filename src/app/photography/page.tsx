import Header from "@/components/header";
import Footer from "@/components/footer";
import ImageGrid from "@/components/imageGrid"; 

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
        },
        {
            "path": "Fotos/London_Statuen.JPEG",
            "alt": "Zwei Statuen vor dem Buckingham Palace in London, aufgenommen mit dem iPhone."
        },
        {
            "path": "Fotos/London_StadtUndWolken.JPEG",
            "alt": "Wolken über Canary Wharf, aufgenommen mit dem iPhone."
        },
        {
            "path": "Fotos/London_Fuchs.JPEG",
            "alt": "Ein Fuchs auf dem Highgate Cemetery in London, aufgenommen mit dem iPhone."
        },
        {
            "path": "Fotos/London_Friedhof.JPEG",
            "alt": "Der Highgate Cemetery in London, aufgenommen mit dem iPhone."
        },
        {
            "path": "Fotos/London_Reflektion.JPEG",
            "alt": "Eine Reflektion der Wolken in einem Hochhaus in London, aufgenommen mit dem iPhone."
        },
        {
            "path": "Fotos/London_Eye.JPEG",
            "alt": "Das London Eye bei Nacht, aufgenommen mit dem iPhone."
        },
        {
            "path": "Fotos/London_Eye_2.JPEG",
            "alt": "Das London Eye abgeschnitten von einem Gebäude, aufgenommen mit dem iPhone."
        },
        {
            "path": "Fotos/London_Eye_3.JPEG",
            "alt": "Das London Eye inklusive Vogel, aufgenommen mit dem iPhone."
        },
        {
            "path": "Fotos/London_Flugzeug.JPEG",
            "alt": "Ein Flugzeug in den Wolken über London, aufgenommen mit dem iPhone."
        },
        {
            "path": "Fotos/London_Statue.JPEG",
            "alt": "Eine Statue neben dem Royal Observatory in Greenwich überblickt Canary Wharf, aufgenommen mit dem iPhone."
        }
    ]

    return (
        <div className="h-screen">
            <Header highlight={"photography"} />
            <div className="w-5/6 flex justify-self-center mx-auto max-sm:w-11/12 min-h-[88%]">
                <div className="flex flex-col">
                    <h1 className="font-bold"> Meine Fotos </h1>
                    <div> Ich fotographiere zwar nicht professionell, dafür aber gerne. Es folgen ein paar Fotos, die ich teilweise mit meiner iPhone-Kamera, teilweise mit einer anaolgen Kamera aufgenommen habe. </div>
                    <div> Das hier ist nur eine kleine Auswahl meiner Fotos, diese können mit einem Klick auf das Bild vergrößert werden. </div>
                    <div className="w-4/5 self-center h-full mt-10">
                        <ImageGrid images={images}/>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}