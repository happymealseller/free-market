import { AspectRatio } from "@/components/shadcn/ui/aspect-ratio"
import { IListingCardProps } from "@/components/listing/ListingCard"

const ListingImageCarousell = ({ data }: IListingCardProps) => {
    return (
        <div className="h-full flex items-center ">
            <AspectRatio ratio={1 / 1} className="bg-muted">
                <img
                    src={data.image}
                    alt="Photo by Drew Beamer"
                    // fill
                    className="rounded-md object-cover w-full h-full"
                />
            </AspectRatio>
        </div>
    )
}

export default ListingImageCarousell