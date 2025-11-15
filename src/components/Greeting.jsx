import Img from "../assets/otlum.png"

export default function Greeting() {
    return (
        <>
        <section className="w-full h-screen p-24 flex items-center justify-center">
            <div className="w-[50%] ">
                <img src={Img} alt="Otlum Image" />
            </div>
            <h1 className="w-[50%] uppercase font-bold text-6xl text-center">
                Good afternoon everyone
            </h1>
        </section>
        </>
    )
}