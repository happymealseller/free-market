import { Avatar, AvatarFallback, AvatarImage } from "@/components/shadcn/ui/avatar"

const ListingUserDetails = () => {
    return (
        <div className="flex h-32 items-center justify-starts gap-5 mx-2">
            <Avatar>
                <AvatarImage src=" https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <div className="h-24 flex flex-col justify-center text-sm">
                <p className="font-bold text-lg">PilotUser143</p>
                <p className="text-gray-400">@admin00043</p>
                <p className="mt-1">Joined 2y 9m <span className="text-gray-400 text-md">•</span> 200 Listings</p>
            </div>
        </div>
    )
}
export default ListingUserDetails