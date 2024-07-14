import { IListingCardProps } from "@/components/listing/ListingCard";

const ListingDetails = ({ data }: IListingCardProps) => {
    return (
        <>
            <div className="flex-col">
                <h2 className="my-2 text-lg font-semibold"> Details </h2>
                <div className="my-2 flex gap-4 text-sm">
                    <h3 className="w-16 text-gray-400">Condition</h3>
                    <p className="">{data.condition}</p>
                </div>

                <div className="my-2 flex gap-4 text-sm">
                    <h3 className="w-16 text-gray-400">Category</h3>
                    <p className="">{data.category}</p>
                </div>

                <div className="my-2 flex gap-4 text-sm">
                    <h3 className="w-16 text-gray-400">Posted</h3>
                    <p className="">{data.created_at}</p>
                </div>
            </div>

            <h2 className="mb-2 mt-4 text-lg font-semibold"> Description </h2>
            <p className="my-2 max-h-44 overflow-y-scroll text-sm">
                {data.description}
            </p>
        </>
    );
};

export default ListingDetails;
