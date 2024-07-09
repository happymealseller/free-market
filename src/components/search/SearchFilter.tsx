import { OrderDirection } from '@/api/searchApi';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/shadcn/ui/accordion'
import { Button } from '@/components/shadcn/ui/button';
import { RadioGroup } from '@/components/shadcn/ui/radio-group';
import { ListingCondition } from '@/types/listingTypes';
import { useState } from 'react';

enum SortOptions {
    DATE_LATEST = "date-desc",
    DATE_OLDEST = "date-asc",
    PRICE_LOWEST = "price-asc",
    PRICE_HIGHEST = "price-desc",
}

const SearchFilter = ({ searchOptions, updateSearchOptions }) => {
    const [selectedOptions, setSelectedOptions] = useState({});
    const [radioDateSortOption, setRadioDateSortOption] = useState("");
    const [radioPriceSortOption, setRadioPriceSortOption] = useState("");
    const [radioConditionOption, setRadioConditionOption] = useState("");
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");

    const handleClickApply = () => {
        updateSearchOptions({ ...searchOptions, ...selectedOptions })
    }

    const handleClickReset = () => {
        updateSearchOptions({})
        setRadioDateSortOption("");
        setRadioPriceSortOption("");
        setRadioConditionOption("");
        setMinPrice("");
        setMaxPrice("");
    }

    const handleRadioOptionsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        switch (event.target.value) {
            case (SortOptions.DATE_LATEST):
                setSelectedOptions({ ...selectedOptions, orderByDate: OrderDirection.DESCENDING })
                setRadioDateSortOption(SortOptions.DATE_LATEST)
                break;
            case (SortOptions.DATE_OLDEST):
                setSelectedOptions({ ...selectedOptions, orderByDate: OrderDirection.ASCENDING })
                setRadioDateSortOption(SortOptions.DATE_OLDEST)
                break;
            case (SortOptions.PRICE_LOWEST):
                setSelectedOptions({ ...selectedOptions, orderByPrice: OrderDirection.ASCENDING })
                setRadioPriceSortOption(SortOptions.PRICE_LOWEST)
                break;
            case (SortOptions.PRICE_HIGHEST):
                setSelectedOptions({ ...selectedOptions, orderByPrice: OrderDirection.DESCENDING })
                setRadioPriceSortOption(SortOptions.PRICE_HIGHEST)
                break;
            case (ListingCondition.NEW):
                setSelectedOptions({ ...selectedOptions, condition: ListingCondition.NEW })
                setRadioConditionOption(ListingCondition.NEW)
                break;
            case (ListingCondition.LIKENEW):
                setSelectedOptions({ ...selectedOptions, condition: ListingCondition.LIKENEW })
                setRadioConditionOption(ListingCondition.LIKENEW)
                break;
            case (ListingCondition.USED):
                setSelectedOptions({ ...selectedOptions, condition: ListingCondition.USED })
                setRadioConditionOption(ListingCondition.USED)
                break;
            case (ListingCondition.WORN):
                setSelectedOptions({ ...selectedOptions, condition: ListingCondition.WORN })
                setRadioConditionOption(ListingCondition.WORN)
                break;
        }
    };

    const handleMinPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let price = Number(event.target.value)
        if (price <= 0 || price >= 99_999_999 || Number.isNaN(price)) {
            setMinPrice("")
            const { minPrice, ...remaindingOptions } = selectedOptions
            setSelectedOptions(remaindingOptions)
            return
        }
        setMinPrice(String(price))
        setSelectedOptions({ ...selectedOptions, minPrice: price })
    }

    const handleMaxPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let price = Number(event.target.value)
        if (price <= 0 || price >= 99_999_999 || Number.isNaN(price)) {
            setMaxPrice("")
            const { maxPrice, ...remaindingOptions } = selectedOptions
            setSelectedOptions(remaindingOptions)
            return
        }
        setMaxPrice(String(price))
        setSelectedOptions({ ...selectedOptions, maxPrice: price })
    }

    const generateRadioCircle = (radioTitle: string, radioValue: string, radioType: string) => {
        return (
            <div className="flex items-center space-x-2">
                <input
                    type="radio"
                    value={radioValue}
                    id={radioTitle}
                    checked={radioValue === radioType}
                    onChange={handleRadioOptionsChange}
                />
                <label htmlFor={radioTitle}>{radioTitle}</label>
            </div>
        )
    }

    return (
        <div className="sticky top-24 left-20 pr-10">
            <div className="flex justify-between items-baseline gap-2">
                <h1 className="text-2xl text-nowrap">Filter by</h1>
                <button className="text-sm hover:underline" onClick={handleClickApply}>Apply</button>
            </div>
            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="sortByDate">
                    <AccordionTrigger>Date</AccordionTrigger>
                    <AccordionContent>
                        <RadioGroup defaultValue="" value={radioDateSortOption} onChange={handleRadioOptionsChange}>
                            {generateRadioCircle("Latest First", SortOptions.DATE_LATEST, radioDateSortOption)}
                            {generateRadioCircle("Oldest First", SortOptions.DATE_OLDEST, radioDateSortOption)}
                        </RadioGroup>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="sortByPrice">
                    <AccordionTrigger>Price</AccordionTrigger>
                    <AccordionContent>
                        <RadioGroup defaultValue="" value={radioPriceSortOption} onChange={handleRadioOptionsChange}>
                            {generateRadioCircle("Price Low to High", SortOptions.PRICE_LOWEST, radioPriceSortOption)}
                            {generateRadioCircle("Price High to Low", SortOptions.PRICE_HIGHEST, radioPriceSortOption)}
                        </RadioGroup>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="price">
                    <AccordionTrigger>Range</AccordionTrigger>
                    <AccordionContent>
                        <div className="flex flex-col space-y-2">
                            <div className="flex justify-start items-center">
                                <label className="w-10" htmlFor="min">Min</label>
                                <input className="border px-1 border-slate-400 rounded w-3/4" id="min" onChange={handleMinPriceChange} value={minPrice} />
                            </div>
                            <div className="flex justify-start items-center">
                                <label className="w-10" htmlFor="max">Max</label>
                                <input className="border px-1 border-slate-400 rounded w-3/4" id="max" onChange={handleMaxPriceChange} value={maxPrice} />
                            </div>
                        </div>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="condition">
                    <AccordionTrigger>Condition</AccordionTrigger>
                    <AccordionContent>
                        <RadioGroup defaultValue="" value={radioConditionOption} onChange={handleRadioOptionsChange}>
                            {generateRadioCircle("New", ListingCondition.NEW, radioConditionOption)}
                            {generateRadioCircle("Like New", ListingCondition.LIKENEW, radioConditionOption)}
                            {generateRadioCircle("Used", ListingCondition.USED, radioConditionOption)}
                            {generateRadioCircle("Worn", ListingCondition.WORN, radioConditionOption)}
                        </RadioGroup>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    )
}

export default SearchFilter