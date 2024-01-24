"use client"
import { useState } from "react";

interface Image {
    path: string,
    alt: string
}

export default function ImageCarousel({ images }: { images: Image[] }) {

    const [currentImage, setCurrentImage] = useState<number>(0);
    const [imgPopup, setImgPopup] = useState<boolean>(false);

    function nextImage() {
        if (currentImage < images.length - 1) {
            setCurrentImage(currentImage + 1);
        } else {
            setCurrentImage(0);
        }
    }

    function previousImage() {
        if (currentImage > 0) {
            setCurrentImage(currentImage - 1);
        } else {
            setCurrentImage(images.length - 1);
        }
    }

    function renderBig() {
        return (
            <div className="z-2 flex fixed top-0 right-0 z-0 bottom-0 left-0 bg-black bg-opacity-75 justify-center items-center" style={{ display: imgPopup ? 'flex' : 'none' }} onClick={() => setImgPopup(false)}>
                <div className="flex flex-col z-10 bg-darkBG h-fit w-fit drop-shadow-xl max-sm:w-4/5 max-sm:pt-5 max-sm:min-h-fit" onClick={(e) => e.stopPropagation()}>
                    <div className="h-[97%] w-[97%] mx-auto">
                        <div className="h-[1%] text-xs"> &nbsp;</div>
                        <img
                            src={`/${images[currentImage].path}`}
                            alt={images[currentImage].alt}
                            title={images[currentImage].alt}
                            className="object-contain max-h-[45rem] mx-auto"
                        />
                        {images.length > 1 ? (
                            <div className="flex justify-between">
                                <button className="hover:text-orangeHighlight max-sm:text-orangeHighlight" onClick={() => previousImage()}> Vorheriges Bild </button>
                                <label className="text-center"> {currentImage + 1}/{images.length} </label>
                                <button className="hover:text-orangeHighlight max-sm:text-orangeHighlight" onClick={() => nextImage()}> Nächstes Bild </button>
                            </div>
                        ): 
                        <div className="h-[1%] text-xs"> &nbsp;</div>
                        }
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="flex mx-auto flex-col">
            {imgPopup && renderBig()}
            <img
                src={`/${images[currentImage].path}`}
                alt={images[currentImage].alt}
                title={images[currentImage].alt}
                onClick={() => setImgPopup(true)}
                className="object-contain max-h-96"
            />
            {images.length > 1 && (
                <div className="flex justify-between">
                    <button className="hover:text-orangeHighlight max-sm:text-orangeHighlight" onClick={() => previousImage()}> Vorheriges Bild </button>
                    <label className="text-center"> {currentImage + 1}/{images.length} </label>
                    <button className="hover:text-orangeHighlight max-sm:text-orangeHighlight" onClick={() => nextImage()}> Nächstes Bild </button>
                </div>
            )}
        </div>
    )
}