interface ILandingGroupsProps {
    title: string;
    subtitle: string;
    src: string;
}

const LandingGroups = ({ title, subtitle, src }: ILandingGroupsProps) => {
    return (
        <div className="relative flex w-[32%] items-end justify-end text-black">
            <h1 className="absolute left-5 top-10 text-2xl">{title}</h1>
            <h2 className="absolute left-5 top-5 text-base">{subtitle}</h2>
            <img className="h-full object-contain" src={src} />
        </div>
    );
};

const LandingCategory = () => {
    return (
        <div className="hidden justify-between gap-4 md:flex">
            <LandingGroups
                title="Gaming"
                subtitle="Games, consoles, devices"
                src="/category1.svg"
            />
            <LandingGroups
                title="Figurines"
                subtitle="Action figures, minis, bricks"
                src="/category2.svg"
            />
            <LandingGroups
                title="Trading Cards"
                subtitle="Booster packs, single cards"
                src="/category3.svg"
            />
        </div>
    );
};

export default LandingCategory;
