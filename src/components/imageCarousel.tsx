"use client"

import { useState } from "react";

interface Image{
    path: string,
    alt: string
}

export default function ImageCarousel({images}: {images: Image[]}) {

    const [currentImage, setCurrentImage] = useState<number>(0);

    function nextImage() {
        if(currentImage < images.length-1) {
            setCurrentImage(currentImage+1);
        } else {
            setCurrentImage(0);
        }
    }

    function previousImage() {
        if(currentImage > 0) {
            setCurrentImage(currentImage-1);
        } else {
            setCurrentImage(images.length-1);
        }
    }

    return (
        <div>
            <img src={`/${images[currentImage].path}`} alt={images[currentImage].alt} title={images[currentImage].alt} className="object-contain" />
            <div className="flex justify-between">
                <button className="hover:text-orangeHighlight max-sm:text-orangeHighlight" onClick={() => previousImage()}> Vorheriges Bild </button>
                <label className="text-center"> {currentImage+1}/{images.length} </label>
                <button className="hover:text-orangeHighlight max-sm:text-orangeHighlight" onClick={() => nextImage()}> Nächstes Bild </button>
            </div>
        </div>
    )
}