export default function Footer() {
    return (
        <div className="w-screen flex h-[6%] max-sm:h-[4%]" id="footer">
            <div className="w-4/6 mt-3 flex justify-end mx-auto max-sm:w-11/12">
                <div className="w-2/6 flex justify-end max-sm:w-3/6">
                    <a href="/impressum" id="footer" className="mr-2 hover:text-orangeHighlight">
                        Impressum
                    </a>
                    <a href="/datenschutzerklaerung" id="footer" className="hover:text-orangeHighlight">
                        Datenschutz
                    </a>
                </div>
            </div>
        </div>
    )
}