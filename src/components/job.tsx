export default function Job({ name, company, what, timeframe }: { name: string, company: string, what: string[], timeframe: string }) {
    return (
        <div className="flex flex-col border-b-2 border-dotted">
            <div className="flex flex-row">
                <div> <b className="mr-2"> {name} </b> <div> / {company} </div> </div>
            </div>
            <div className="flex flex-col ml-6">
                {what.map((what, index) => (
                    <div key={index}>
                       - {what}
                    </div>
                ))}
            </div>
            <div className="mt-1 mb-1">
                {timeframe}
            </div>
        </div>
    )
}