export default function Header({highlight}: {highlight: string}) {

    return (
        <div className="w-screen flex h-[6%]">
            <div className="w-4/6 m-3 flex justify-between mx-auto max-sm:w-11/12">
                <a 
                    href="/" 
                    id="header" 
                    className={"hover:text-orangeHighlight text-2xl max-sm:text-base"}
                    style={{
                        color: highlight === 'home' ? '#c3602c' : 'default',
                        borderBottom: highlight === 'home' ? '2px solid #c3602c' : 'none'
                }}>
                    Home
                </a>
                <div className="w-2/6 flex justify-around max-sm:w-4/6">
                    <a 
                        href="/projects" 
                        id="header" 
                        className={"hover:text-orangeHighlight text-2xl max-sm:text-base"}
                        style={{
                            color: highlight === 'projects' ? '#c3602c' : 'default',
                            borderBottom: highlight === 'projects' ? '2px solid #c3602c' : 'none'
                        }}>
                        Projekte
                    </a>
                    <a 
                        href="/skills" 
                        id="header" 
                        className={"hover:text-orangeHighlight text-2xl max-sm:text-base"}
                        style={{
                            color: highlight === 'skills' ? '#c3602c' : 'default',
                            borderBottom: highlight === 'skills' ? '2px solid #c3602c' : 'none'
                    }}>
                        Skills
                    </a>
                    <a 
                        href="/about" 
                        id="header" 
                        className={"hover:text-orangeHighlight text-2xl max-sm:text-base"}
                        style={{
                            color: highlight === 'about' ? '#c3602c' : 'default',
                            borderBottom: highlight === 'about' ? '2px solid #c3602c' : 'none'
                    }}>
                        About
                    </a>
                </div>
            </div>
        </div>
    )
}