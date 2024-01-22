
export default function Header() {
    return (
        <div className="w-screen flex">
            <div className="w-4/6 m-3 flex justify-between mx-auto">
                <button>Home</button>
                <div className="w-2/6 flex justify-around">
                    <a href="/skills">
                        Skills
                    </a>
                    <a href="/projects">
                        Projects
                    </a>
                    <a href="/about">
                        About
                    </a>
                </div>
            </div>
        </div>
    )
}