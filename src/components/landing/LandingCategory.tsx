interface ILandingGroupsProps {
    title: string,
    subtitle: string
    src: string,
}

const LandingGroups = ({ title, subtitle, src }: ILandingGroupsProps) => {
    return (
        <div className="relative w-[32%] flex justify-end items-end text-black">
            <h1 className="absolute top-10 left-5 text-2xl">{title}</h1>
            <h2 className="absolute top-5 left-5 text-base">{subtitle}</h2>
            <img className="h-full object-contain" src={src} />
        </div >
    )
}

const LandingCategory = () => {
    return (
        <div className="hidden md:flex justify-between gap-4">
            <LandingGroups title="Gaming" subtitle="Games, consoles, devices" src="/category1.svg" />
            <LandingGroups title="Figurines" subtitle="Action figures, minis, bricks" src="/category2.svg" />
            <LandingGroups title="Trading Cards" subtitle="Booster packs, single cards" src="/category3.svg" />
        </div>
    )
}

export default LandingCategory