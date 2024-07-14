import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
    getListingByUserId,
    getAllListings,
    getListingByListingId,
} from "@/api/searchApi";
import ListingGrid from "@/components/listing/ListingGrid";
import ListingCard from "@/components/listing/ListingCard";
import SpinnerLoader from "@/components/common/SpinnerLoader";
import ListingBreadcrumbs from "@/components/listing/ListingBreadcrumbs";
import ListingDetails from "@/components/listing/ListingDetails";
import ListingImageCarousell from "@/components/listing/ListingImageCarousell";
import ListingTipSection from "@/components/listing/ListingTipSection";
import ListingTitlePrice from "@/components/listing/ListingTitlePrice";
import ListingUserDetails from "@/components/listing/ListingUserDetails";

// import { useEffect, useState } from "react"
// import { useParams } from "react-router-dom"
// import { getListingByUserId, getAllListings } from "@/api/searchApi"
// import ListingGrid from "@/components/listing/ListingGrid"
// import ListingCard from "@/components/listing/ListingCard"
// import SpinnerLoader from "@/components/common/SpinnerLoader"
// import ListingBreadcrumbs from "@/components/listing/ListingBreadcrumbs"
// import ListingDetails from "@/components/listing/ListingDetails"
// import ListingImageCarousell from "@/components/listing/ListingImageCarousell"
// import ListingTipSection from "@/components/listing/ListingTipSection"
// import ListingTitlePrice from "@/components/listing/ListingTitlePrice"
// import ListingUserDetails from "@/components/listing/ListingUserDetails"

const ListingPage = () => {
    const [data, setData] = useState(null);
    const [similarListings, setSimilarListings] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const { listingId } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data: userData, error: userError } =
                    await getListingByListingId(listingId);
                if (userError) {
                    console.error("Error fetching user data:", userError);
                    return;
                }

                const { data: allListingsData, error: allListingsError } =
                    await getAllListings();
                if (allListingsError) {
                    console.error(
                        "Error fetching all listings:",
                        allListingsError
                    );
                    return;
                }

                setData(userData[0]);
                console.log("aaa", allListingsData);
                setSimilarListings(allListingsData);
            } catch (err) {
                console.error("Error in fetchData:", err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [listingId]);

    return isLoading ? (
        <div className="flex h-[85svh] items-center">
            <SpinnerLoader />{" "}
        </div>
    ) : (
        <>
            <div className="mb-4">
                <ListingBreadcrumbs />
            </div>

            <div className="grid-cols-5 flex-col justify-items-center gap-4 md:grid">
                <div className="col-span-2 w-full">
                    <ListingImageCarousell data={data} />
                </div>

                <div className="col-span-3 w-full px-2">
                    <ListingTitlePrice data={data} />
                    <ListingDetails data={data} />
                </div>
            </div>

            <div className="col-span-5 my-4 w-full">
                <hr />
                <div className="flex items-center justify-between">
                    <ListingUserDetails />
                    <ListingTipSection />
                </div>
                <hr />
            </div>

            {similarListings && (
                <ListingGrid title={"Similar Listings"}>
                    <>
                        {similarListings.map((e) => (
                            <ListingCard data={e} key={e.id} />
                        ))}
                    </>
                </ListingGrid>
            )}
        </>
    );
};

export default ListingPage;
