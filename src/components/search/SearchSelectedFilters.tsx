import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { OrderDirection } from "@/api/searchApi";

const SearchSelectedFilters = ({ searchOptions }) => {
    const { minPrice, maxPrice, orderByDate, orderByPrice, condition } = searchOptions

    return (

        <div className="w-full h-10 flex items-center justify-between mb-6 sm:mb-0 ">
            <div className="flex flex-wrap gap-4">
                {minPrice && <Badge className="h-6 px-3" variant="secondary">Min: {minPrice}</Badge>}
                {maxPrice && <Badge className="h-6 px-3" variant="secondary">Max: {maxPrice}</Badge>}
                {orderByDate === OrderDirection.ASCENDING && <Badge className="h-6 px-3" variant="secondary">Oldest</Badge>}
                {orderByDate === OrderDirection.DESCENDING && <Badge className="h-6 px-3" variant="secondary">Latest</Badge>}
                {orderByPrice === OrderDirection.ASCENDING && <Badge className="h-6 px-3" variant="secondary">Price Asc</Badge>}
                {orderByPrice === OrderDirection.DESCENDING && <Badge className="h-6 px-3" variant="secondary">Price Dsc</Badge>}
                {condition && <Badge className="h-6 px-3" variant="secondary">{condition}</Badge>}
            </div >

            {/* <button className="text-sm hover:underline" onClick={handleClickReset}>Reset</button> */}

            <button className="text-sm hover:underline">Reset</button>
        </div>
    )
}

export default SearchSelectedFilters