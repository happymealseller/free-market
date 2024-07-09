import ListingCard from "@/components/listing/ListingCard"
import ListingGrid from "@/components/listing/ListingGrid"

const SearchContent = ({ data, searchTerm }) => {
    return (
        <ListingGrid title={`data.length search results for '${searchTerm}' in Singapore`}>
            <>
                {data.map((e) => <ListingCard key={e.id} data={e} />)}
            </>
        </ListingGrid>

    )
}

export default SearchContent