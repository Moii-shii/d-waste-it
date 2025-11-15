export default function Member() {
    
    const members = [
        {
            id: 1,
            src: '../assets/mem1.png',
            alt: 'Member 1'
        },
        {
            id: 2,
            src: '../assets/mem2.png',
            alt: 'Member 2'
        },
        {
            id: 3,
            src: '../assets/mem3.png',
            alt: 'Member 3'
        },
        {
            id: 4,
            src: '../assets/mem4.png',
            alt: 'Member 4'
        },
        {
            id: 5,
            src: '../assets/mem5.png',
            alt: 'Member 5'
        }
    ]
    
    const card = members.map(member => (
        <div className="shadow-md" key={member.id}>
            <img src={member.src} alt={member.alt} className="w-full h-full" />
        </div>
    ));


    return (
        <>
        <section className="w-full h-screen flex flex-col items-center justify-center">
            <h1 className="h-[10%] uppercase text-bold text-6xl flex items-end">
                Members
            </h1>
            <div className="h-[90%] flex items-center justify-center gap-4">
                {card}
            </div>
        </section>
        </>
    )
}