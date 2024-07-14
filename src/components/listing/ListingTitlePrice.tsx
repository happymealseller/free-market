import { IListingCardProps } from "@/components/listing/ListingCard";

const ListingTitlePrice = ({ data }: IListingCardProps) => {
    return (
        <>
            <div className="mt-4 flex-col text-2xl md:mt-0 md:text-3xl">
                <p className="overflow-hidden md:max-h-28">{data.title}</p>
                <div className="flex items-center justify-between">
                    <p className="text-shadow-10 mb-4 mt-1">{data.price}</p>
                    <button className="hidden h-10 w-36 rounded-lg bg-royal text-sm font-bold text-white md:block">
                        Buy Now
                    </button>
                </div>
            </div>
            <hr />
        </>
    );
};

export default ListingTitlePrice;
