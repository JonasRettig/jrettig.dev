


export default function Header({highlight}: {highlight: string}) {
    return (
        <div className="w-screen flex">
            <div className="w-4/6 m-3 flex justify-between mx-auto max-sm:w-11/12">
                <a href="/" id="header" className={`text-${highlight === 'home' ? 'orangeHighlight' : 'default'} border-b-${highlight === 'home' ? '2' : '0'} border-orangeHighlight`}>
                    Home
                </a>
                <div className="w-2/6 flex justify-around max-sm:w-3/6">
                    <a href="/skills" id="header" className={`text-${highlight === 'skills' ? 'orangeHighlight' : 'default'} border-b-${highlight === 'skills' ? '2' : '0'} border-orangeHighlight`}>
                        Skills
                    </a>
                    <a href="/projects" id="header" className={`text-${highlight === 'projects' ? 'orangeHighlight' : 'default'} border-b-${highlight === 'projects' ? '2' : '0'} border-orangeHighlight`}>
                        Projekte
                    </a>
                    <a href="/about" id="header" className={`text-${highlight === 'about' ? 'orangeHighlight' : 'default'} border-b-${highlight === 'about' ? '2' : '0'} border-orangeHighlight`}>
                        About
                    </a>
                </div>
            </div>
        </div>
    )
}