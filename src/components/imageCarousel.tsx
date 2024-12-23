"use client"
import { useState } from "react";
import ImagePopover from "./imagePopover";

interface Image {
    path: string,
    alt: string
}

export default function ImageCarousel({ images }: { images: Image[]}) {

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

    return (
        <div className="flex mx-auto flex-col">
            {imgPopup && <ImagePopover images={images} currentImageIndex={currentImage} currentImage={images[currentImage]} setCurrentImage={setCurrentImage} imgPopup={imgPopup} setImgPopup={setImgPopup}/>}
            <img
                src={`/${images[currentImage].path}`}
                alt={images[currentImage].alt}
                title={images[currentImage].alt}
                onClick={() => setImgPopup(true)}
                className="object-contain max-h-96 hover:scale-105"
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