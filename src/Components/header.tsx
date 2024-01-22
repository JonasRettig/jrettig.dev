
export default function Header() {
    return (
        <div className="m-3 flex justify-between">
            <button>Home</button>
            <div className="w-1/6 flex justify-around">
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
    )
}