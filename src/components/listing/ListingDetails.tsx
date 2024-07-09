import { IListingCardProps } from "@/components/listing/ListingCard"

const ListingDetails = ({ data }: IListingCardProps) => {
    return (
        <>
            <div className="flex-col">
                <h2 className="text-lg font-semibold my-2"> Details </h2>
                <div className="flex my-2 gap-4 text-sm">
                    <h3 className="w-16 text-gray-400">Condition</h3>
                    <p className="">{data.condition}</p>
                </div>

                <div className="flex my-2 gap-4 text-sm">
                    <h3 className="w-16 text-gray-400">Category</h3>
                    <p className="">{data.category}</p>
                </div>

                <div className="flex my-2 gap-4 text-sm">
                    <h3 className="w-16 text-gray-400">Posted</h3>
                    <p className="">{data.created_at}</p>
                </div>
            </div>

            <h2 className="text-lg font-semibold mt-4 mb-2"> Description </h2>
            <p className="my-2 text-sm max-h-44 overflow-y-scroll">{data.description}</p>
        </>
    )
}

export default ListingDetails