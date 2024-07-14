import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/shadcn/ui/avatar";

const ListingUserDetails = () => {
    return (
        <div className="justify-starts mx-2 flex h-32 items-center gap-5">
            <Avatar>
                <AvatarImage
                    src=" https://github.com/shadcn.png"
                    alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <div className="flex h-24 flex-col justify-center text-sm">
                <p className="text-lg font-bold">PilotUser143</p>
                <p className="text-gray-400">@admin00043</p>
                <p className="mt-1">
                    Joined 2y 9m{" "}
                    <span className="text-md text-gray-400">•</span> 200
                    Listings
                </p>
            </div>
        </div>
    );
};
export default ListingUserDetails;
