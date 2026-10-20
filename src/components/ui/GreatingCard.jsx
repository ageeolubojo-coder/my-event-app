export default function GreetingCard({name,message}) {
    return (
        <div className="flex flex-col gap-4 justify-center item-centre h screen">
            <h1 className="text-4xl font-bold "> Welcome to my app, {name}</h1>
            <p className="text-base text-red-200 p-2">{message}</p>
        </div>
    )
}