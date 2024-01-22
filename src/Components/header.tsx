


export default function Header() {
    return (
        <div className="w-screen flex">
            <div className="w-4/6 m-3 flex justify-between mx-auto max-sm:w-11/12">
                <a href="/" id="header">
                    Home
                </a>
                <div className="w-2/6 flex justify-around max-sm:w-3/6">
                    <a href="/skills" id="header">
                        Skills
                    </a>
                    <a href="/projects" id="header">
                        Projekte
                    </a>
                    <a href="/about" id="header">
                        About
                    </a>
                </div>
            </div>
        </div>
    )
}