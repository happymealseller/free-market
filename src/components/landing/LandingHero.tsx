const LandingHero = () => {
    return (
        <>
            <img
                className=" w-full object-contain sm:hidden"
                src="/hero-sm.svg"
                alt="Small Banner"
            />
            <img
                className="hidden w-full object-contain sm:block md:hidden"
                src="/hero-md.svg"
                alt="Medium Banner"
            />
            <img
                className="hidden w-full object-contain md:block"
                src="/hero-lg.svg"
                alt="Large Banner"
            />
        </ >
    )
}

export default LandingHero