"use client"
import { useState } from "react";
import ImagePopover from "./imagePopover";

interface Image {
    path: string,
    alt: string
}

export default function ImageGrid({ images }: { images: Image[] }) {

    const [imgPopup, setImgPopup] = useState<boolean>(false);
    const [currentImage, setCurrentImage] = useState<Image>(images[0]);

    return (
        <div className="flex mx-auto flex-col">
            {imgPopup && <ImagePopover images={images} currentImage={currentImage} currentImageIndex={-1} setCurrentImage={null} imgPopup={imgPopup} setImgPopup={setImgPopup} />}
            <div className="flex mx-auto justify-evenly flex-row flex-wrap gap-2">
            {images.map(image => {
                return (
                    <div>
                        <img
                            key={image.path}
                            src={`/${image.path}`}
                            alt={image.alt}
                            title={image.alt}
                            onClick={() => {setCurrentImage(image); setImgPopup(true)}}
                            className="object-contain max-h-96 hover:scale-105"
                        />
                    </div>
                )
            })}
            </div>
        </div>
    )
}