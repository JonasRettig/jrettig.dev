export default function Header({highlight}: {highlight: string}) {

    return (
        <div className="w-screen flex h-[6%]">
            <div className="w-4/6 m-3 flex justify-between mx-auto max-sm:w-11/12">
                <div className={"hover:text-orangeHighlight text-2xl max-sm:text-base"}>
                    <a
                        href="/" 
                        id="header" 
                        style={{
                            color: highlight === 'home' ? '#c3602c' : 'default',
                            textDecoration: highlight === 'home' ? 'underline' : 'none'
                        }}>
                        Home
                    </a>
                </div>
                <div className="w-3/6 flex justify-evenly max-sm:w-5/6">
                    <a 
                        href="/projects" 
                        id="header" 
                        className={"hover:text-orangeHighlight text-2xl max-sm:text-base"}
                        style={{
                            color: highlight === 'projects' ? '#c3602c' : 'default',
                            textDecoration: highlight === 'projects' ? 'underline' : 'none'
                        }}>
                        Projekte
                    </a>
                    <a 
                        href="/skills" 
                        id="header" 
                        className={"hover:text-orangeHighlight text-2xl max-sm:text-base"}
                        style={{
                            color: highlight === 'skills' ? '#c3602c' : 'default',
                            textDecoration: highlight === 'skills' ? 'underline' : 'none'
                    }}>
                        Skills
                    </a>
                    <a 
                        href="/photography" 
                        id="header" 
                        className={"hover:text-orangeHighlight text-2xl max-sm:text-base"}
                        style={{
                            color: highlight === 'photography' ? '#c3602c' : 'default',
                            textDecoration: highlight === 'photography' ? 'underline' : 'none'
                    }}>
                        Fotos
                    </a>
                    <a 
                        href="/about" 
                        id="header" 
                        className={"hover:text-orangeHighlight text-2xl max-sm:text-base"}
                        style={{
                            color: highlight === 'about' ? '#c3602c' : 'default',
                            textDecoration: highlight === 'about' ? 'underline' : 'none'
                    }}>
                        About
                    </a>
                </div>
            </div>
        </div>
    )
}