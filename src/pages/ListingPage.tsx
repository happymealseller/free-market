import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getListingByUserId, getAllListings } from "@/api/searchApi"
import ListingGrid from "@/components/listing/ListingGrid"
import ListingCard from "@/components/listing/ListingCard"
import SpinnerLoader from "@/components/common/SpinnerLoader"
import ListingBreadcrumbs from "@/components/listing/ListingBreadcrumbs"
import ListingDetails from "@/components/listing/ListingDetails"
import ListingImageCarousell from "@/components/listing/ListingImageCarousell"
import ListingTipSection from "@/components/listing/ListingTipSection"
import ListingTitlePrice from "@/components/listing/ListingTitlePrice"
import ListingUserDetails from "@/components/listing/ListingUserDetails"

const ListingPage = () => {
    const [data, setData] = useState(null)
    const [similarListings, setSimilarListings] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    let { listingId } = useParams();
    console.log(listingId)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data: userData, error: userError } = await getListingByUserId(listingId);
                if (userError) {
                    console.error('Error fetching user data:', userError);
                    return;
                }

                const { data: allListingsData, error: allListingsError } = await getAllListings();
                if (allListingsError) {
                    console.error('Error fetching all listings:', allListingsError);
                    return;
                }

                setData(userData[0]);
                console.log("aaa", allListingsData)
                setSimilarListings(allListingsData);
            } catch (err) {
                console.error('Error in fetchData:', err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [listingId]);

    return isLoading ? <div className="h-[85svh] flex items-center"><SpinnerLoader /> </div> :
        (<>
            <div className="mb-4">
                <ListingBreadcrumbs />
            </div>

            <div className=" md:grid flex-col grid-cols-5 gap-4 justify-items-center">
                <div className="col-span-2 w-full">
                    <ListingImageCarousell data={data} />
                </div>

                <div className="col-span-3 w-full px-2">
                    <ListingTitlePrice data={data} />
                    <ListingDetails data={data} />
                </div>

            </div>

            <div className="col-span-5 w-full my-4">
                <hr />
                <div className="flex justify-between items-center">
                    <ListingUserDetails />
                    <ListingTipSection />
                </div>
                <hr />
            </div>


            {similarListings && (<ListingGrid title={"Similar Listings"}>
                <>
                    {similarListings.map((e) => <ListingCard data={e} key={e.id} />)}
                </>
            </ListingGrid>)}
        </>)
}

export default ListingPage