


export default function Header() {
    return (
        <div className="w-screen flex" id="header">
            <div className="w-4/6 m-3 flex justify-between mx-auto">
                <a href="/" id="header">
                    Home
                </a>
                <div className="w-2/6 flex justify-around">
                    <a href="/skills" id="header">
                        Skills
                    </a>
                    <a href="/projects" id="header">
                        Projects
                    </a>
                    <a href="/about" id="header">
                        About
                    </a>
                </div>
            </div>
        </div>
    )
}