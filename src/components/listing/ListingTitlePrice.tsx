import { IListingCardProps } from "@/components/listing/ListingCard"

const ListingTitlePrice = ({ data }: IListingCardProps) => {
    return (
        <>
            <div className="flex-col text-2xl md:text-3xl mt-4 md:mt-0">
                <p className="md:max-h-28 overflow-hidden">{data.title}</p>
                <div className="flex justify-between items-center">
                    <p className="mt-1 mb-4 text-shadow-10">{data.price}</p>
                    <button className="hidden md:block bg-royal h-10 w-36 rounded-lg text-sm font-bold text-white">
                        Buy Now
                    </button>
                </div>
            </div>
            <hr />
        </>
    )
}

export default ListingTitlePrice