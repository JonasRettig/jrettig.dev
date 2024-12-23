"use client"
interface Image {
    path: string,
    alt: string
}

export default function ImagePopover({ images, currentImageIndex, currentImage, setCurrentImage, imgPopup, setImgPopup}: { images: Image[], currentImageIndex: number, currentImage: Image, setCurrentImage: any, imgPopup: boolean, setImgPopup: any}) {

    function nextImage() {
        if (currentImageIndex < images.length - 1) {
            setCurrentImage(currentImageIndex + 1);
        } else {
            setCurrentImage(0);
        }
    }

    function previousImage() {
        if (currentImageIndex > 0) {
            setCurrentImage(currentImageIndex - 1);
        } else {
            setCurrentImage(images.length - 1);
        }
    }

    return (
        <div className="z-20 flex fixed top-0 right-0 bottom-0 left-0 bg-black bg-opacity-75 justify-center items-center" style={{ display: imgPopup ? 'flex' : 'none' }} onClick={() => setImgPopup(false)}>
        <div className="flex flex-col z-30 bg-darkBG h-fit w-fit drop-shadow-xl " onClick={(e) => e.stopPropagation()}>
            <div className="h-[97%] w-[97%] mx-auto">
                <div className="h-[1%] text-xs"> &nbsp;</div>
                <img
                    src={`/${currentImage.path}`}
                    alt={currentImage.alt}
                    title={currentImage.alt}
                    className="object-contain max-h-[45rem] mx-auto"
                />
                {currentImageIndex === -1 && 
                    <label className="text-left mt-5"> {currentImage.alt} </label>
                }
                {(currentImageIndex != -1 && images.length > 1) ? (
                    <div className="flex justify-between">
                        <button className="hover:text-orangeHighlight max-sm:text-orangeHighlight" onClick={() => previousImage()}> Vorheriges Bild </button>
                        <label className="text-center"> {currentImageIndex + 1}/{images.length} </label>
                        <button className="hover:text-orangeHighlight max-sm:text-orangeHighlight" onClick={() => nextImage()}> Nächstes Bild </button>
                    </div>
                ) :
                    <div className="h-[1%] text-xs"> &nbsp;</div>
                }
            </div>
        </div>
    </div>
    )
}