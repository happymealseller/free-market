import { AspectRatio } from "@/components/shadcn/ui/aspect-ratio";
import { IListingCardProps } from "@/components/listing/ListingCard";

const ListingImageCarousell = ({ data }: IListingCardProps) => {
    return (
        <div className="flex h-full items-center">
            <AspectRatio ratio={1 / 1} className="bg-muted">
                <img
                    src={data.image}
                    alt="Photo by Drew Beamer"
                    // fill
                    className="h-full w-full rounded-md object-cover"
                />
            </AspectRatio>
        </div>
    );
};

export default ListingImageCarousell;
