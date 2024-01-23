
export default function Skill({ icon, skill, info, level }: { icon: any, skill: string, info: string, level: number }) {
    return (
        <div className="flex flex-row my-5 items-center">
            <div className="text-8xl mr-4 flex flex-col">
                {icon}
            </div>
            <div className="mb-2">
                <b className="text-lg"> {skill} </b>
                <div>
                    {info}
                </div>
            </div>
        </div>
    )
}