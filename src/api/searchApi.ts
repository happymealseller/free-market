import supabase from "@/api/setupSupabase";
import { ListingCondition } from "@/types/listingTypes";

export enum OrderDirection {
    ASCENDING = "ASC",
    DESCENDING = "DESC",
}

type SearchRange = [number, number]; // [start, end]

export interface ISearchOptions {
    minPrice?: number;
    maxPrice?: number;
    orderByDate?: OrderDirection;
    orderByPrice?: OrderDirection;
    condition?: ListingCondition;
    searchRange?: SearchRange;
}

export const getListingByTitleAndDescription = async (
    searchTerm: string,
    searchOptions: ISearchOptions
) => {
    const {
        minPrice,
        maxPrice,
        orderByDate,
        orderByPrice,
        condition,
        searchRange,
    } = searchOptions;

    const queryBuilder = supabase.rpc("search_listings", {
        search_term: searchTerm,
    });

    if (condition) {
        queryBuilder.eq("condition", condition);
    }

    if (maxPrice) {
        queryBuilder.lte("price", maxPrice);
    }

    if (minPrice) {
        queryBuilder.gte("price", minPrice);
    }

    if (orderByDate === OrderDirection.ASCENDING) {
        queryBuilder.order("date", { ascending: true });
    } else if (orderByDate === OrderDirection.DESCENDING) {
        queryBuilder.order("date", { ascending: false });
    }

    if (orderByPrice === OrderDirection.ASCENDING) {
        queryBuilder.order("price", { ascending: true });
    } else if (orderByPrice === OrderDirection.DESCENDING) {
        queryBuilder.order("price", { ascending: false });
    }

    if (searchRange) {
        queryBuilder.range(searchRange[0], searchRange[1]);
    }

    const result = await queryBuilder;
    // console.log(queryBuilder)
    // console.log(result)
    return result;
};

export const getListingByUserId = async (
    searchOptions: ISearchOptions,
    userId: string
) => {
    const range = searchOptions?.searchRange || [0, 9];

    const result = await supabase
        .from("listings")
        .select("*")
        .eq("id", userId)
        .range(range[0], range[1]);
    return result;
};

export const getListingByListingId = async (listingId: string) => {
    const result = await supabase
        .from("listings")
        .select("*")
        .eq("id", listingId);
    return result;
};

export const getAllListings = async (searchOptions: ISearchOptions) => {
    const range = searchOptions?.searchRange || [0, 9];

    const result = await supabase
        .from("listings")
        .select("*")
        .range(range[0], range[1]);
    return result;
};

export const getAllListingsByDate = async (searchOptions: ISearchOptions) => {
    const range = searchOptions?.searchRange || [0, 9];

    const result = await supabase
        .from("listings")
        .select("*")
        .order("created_at", { ascending: false })
        .range(range[0], range[1]);
    return result;
};
