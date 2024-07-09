import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { getAllListings } from "@/api/searchApi";
import { Routes } from "@/types/globalTypes";
import SpinnerLoader from "@/components/common/SpinnerLoader";
import LandingCategory from "@/components/landing/LandingCategory";
import LandingHero from "@/components/landing/LandingHero";
import ListingGrid from "@/components/listing/ListingGrid";
import ListingCard from "@/components/listing/ListingCard";

export const GoogleAds = () => {
    return (
        <div className="w-full h-52 flex justify-center items-center bg-slate-300">
            <p className="p-2 rounded bg-slate-200 text-white">Ads by Google</p>
        </div >
    )
}

const LandingPage = () => {
    const navigate = useNavigate()
    // const [trendingListings, setTrendingListings] = useState(null)
    const [newListings, setNewListings] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            try {
                const { data, error } = await getAllListings({ searchRange: [0, 9] })

                if (error) {
                    console.error('Error fetching data:', error);
                } else {
                    setNewListings(data)
                    setIsLoading(false)
                }
            } catch (err) {
                navigate(Routes.ERROR_500)
                console.error('Error in fetchData:', err);
            }
        };
        fetchData();
    }, [])

    return isLoading ? <div className="h-[85svh] flex items-center"><SpinnerLoader /> </div> : (
        <>
            <LandingHero />

            <div className="my-8">
                <LandingCategory />
            </div>

            <ListingGrid title={"Recently Listed"}>
                {newListings.map((e) => <ListingCard data={e} key={e.id} />)}
            </ListingGrid>

            <div className="my-8">
                <GoogleAds />
            </div>

            <ListingGrid title={"Trending Now"}>
                {newListings.map((e) => <ListingCard data={e} key={e.id} />)}
            </ListingGrid>
        </>
    )
}

export default LandingPage