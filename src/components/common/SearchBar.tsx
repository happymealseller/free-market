import { getListingByTitleAndDescription } from "@/api/searchApi";
import { Routes } from "@/types/globalTypes";
import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();

    const handleClick = async () => {
        navigate(Routes.SEARCH_RESULTS_PAGE.replace(":searchTerm", searchTerm));
    };

    return (
        <div className="relative">
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => {
                    setSearchTerm(e.target.value);
                }}
                placeholder="Search"
                className="h-12 w-full rounded-3xl border-2 border-royal p-2 px-4 pr-10"
            />

            <motion.button
                whileHover={{ backgroundColor: "#C3CEDA" }}
                transition={{ duration: 0.2 }}
                initial={false}
                className="absolute right-2 top-1 rounded-full p-2"
                onClick={handleClick}
            >
                <img
                    className="h-6 w-6"
                    src="/search-icon.svg"
                    alt="search-icon"
                />
            </motion.button>
        </div>
    );
};

export default SearchBar;
