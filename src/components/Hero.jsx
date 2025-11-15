import Img from "../assets/hero-img.png"

export default function Hero() {
    return (
        <>
        <section className="w-full h-screen">
            <img src={Img} alt="Hero Image" className="w-full h-screen" />
        </section>
        </>
    )
}