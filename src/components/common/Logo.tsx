import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Routes } from "@/types/globalTypes";

const Logo = () => {
    return (
        <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex items-center justify-center"
        >
            <Link
                to={Routes.INDEX}
                className="flex items-center justify-center whitespace-nowrap font-logo font-bold text-white"
            >
                <p className="no-wrap text-4xl">1-1</p>
                <p className="text-3xl">freemarket</p>
            </Link>
        </motion.div>
    );
};

export default Logo;
