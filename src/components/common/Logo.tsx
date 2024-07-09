import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Routes } from '@/types/globalTypes';

const Logo = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(Routes.INDEX);
    };

    return (
        <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex justify-center items-center"
        >
            <button
                className="font-logo font-bold text-white whitespace-nowrap flex justify-center items-center"
                onClick={handleClick}
            >
                <p className="text-4xl no-wrap">1-1</p>
                <p className="text-3xl">freemarket</p>
            </button>
        </motion.div>
    )
}

export default Logo
