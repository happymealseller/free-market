import { getListingByTitleAndDescription } from "@/api/searchApi";
import { Routes } from "@/types/globalTypes";
import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState("")
    const navigate = useNavigate()

    const handleClick = async () => {
        navigate(Routes.SEARCH_RESULTS_PAGE.replace(":searchTerm", searchTerm))
    };

    return (
        <div className="relative">
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => {
                    setSearchTerm(e.target.value)
                }}
                placeholder="Search"
                className="px-4 h-12 w-full border-2 border-royal rounded-3xl p-2 pr-10"
            />

            <motion.button
                whileHover={{ backgroundColor: "#C3CEDA" }}
                transition={{ duration: 0.2 }}
                initial={false}
                className="absolute top-1 right-2 p-2 rounded-full"
                onClick={handleClick}>
                <img className="h-6 w-6" src="/search-icon.svg" alt="search-icon" />
            </motion.button>
        </div>
    );
};

export default SearchBar;
