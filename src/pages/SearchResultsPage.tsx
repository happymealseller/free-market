import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SearchContent from "@/components/search/SearchContent";
import SearchFilter from "@/components/search/SearchFilter";
import SearchSelectedFilters from "@/components/search/SearchSelectedFilters";
import {
    ISearchOptions,
    getListingByTitleAndDescription,
} from "@/api/searchApi";

const SearchResultsPage = () => {
    const { searchTerm } = useParams();
    // console.log(params)
    // consider making this a hook
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState([]);
    const [errorMsg, setErrorMsg] = useState([]);

    const [searchOptions, setSearchOptions] = useState<ISearchOptions>({
        searchRange: [0, 19],
    });

    console.log(searchOptions);
    console.log(Object.keys(searchOptions).length);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await getListingByTitleAndDescription(
                    searchTerm,
                    searchOptions
                );
                if (data) {
                    setData(data);
                }
            } catch (error) {
                console.error(
                    "Error in getListingByTitleAndDescription, error"
                );
            }
        };
        fetchData();
        console.log(searchTerm);
    }, [searchTerm, searchOptions]);

    useEffect(() => {
        let timeout: number;

        const handleScroll = () => {
            const { scrollTop, clientHeight, scrollHeight } =
                document.documentElement;
            if (scrollTop + clientHeight >= scrollHeight - 500) {
                setSearchOptions({
                    ...searchOptions,
                    searchRange: [0, searchOptions.searchRange[1] + 20],
                });
            }
        };

        const debouncedHandleScroll = () => {
            window.clearTimeout(timeout);
            timeout = window.setTimeout(handleScroll, 350);
        };

        window.addEventListener("scroll", debouncedHandleScroll);

        return () => {
            window.removeEventListener("scroll", debouncedHandleScroll);
            window.clearTimeout(timeout);
        };
    }, [searchOptions]);

    return (
        <>
            <div className="grid grid-cols-5 gap-1">
                <div className="col-span-1 hidden w-full md:block">
                    <SearchFilter
                        searchOptions={searchOptions}
                        updateSearchOptions={setSearchOptions}
                    />
                </div>

                <div className="col-span-5 w-full md:col-span-4">
                    {Object.keys(searchOptions).length > 1 && (
                        <SearchSelectedFilters searchOptions={searchOptions} />
                    )}

                    <SearchContent data={data} searchTerm={searchTerm} />
                </div>
            </div>
        </>
    );
};

export default SearchResultsPage;
