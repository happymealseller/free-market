import { motion } from "framer-motion";

const Header = () => {
    return (
        <header className="flex min-h-[5svh] items-center justify-center overflow-hidden bg-gradient-to-t from-slate-50 to-slate-400">
            <motion.p
                initial={{ x: "100%" }}
                animate={{ x: ["-280%", "260%"] }}
                transition={{
                    repeat: Infinity,
                    duration: 20,
                    ease: "linear",
                }}
                className="whitespace-nowrap"
            >
                🎉 Beat scams by ...
            </motion.p>
        </header>
    );
};

export default Header;
