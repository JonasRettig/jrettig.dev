
export default function Skill({ icon, skill, info, level }: { icon: any, skill: string, info: string, level: number }) {
    return (
        <div className="flex flex-row my-5 items-center">
            <div className="text-9xl mr-2 flex flex-col">
                {icon}
                <div className="bg-black rounded-3xl h-[20px] w-full mt-2" >
                    <div style={{ width: `${(level / (10)) * 100}%` }} className=" bg-white rounded-3xl h-full">
                    </div>
                </div>
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