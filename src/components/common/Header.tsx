import { motion } from "framer-motion"

const Header = () => {
    return (
        <header className="overflow-hidden min-h-[5svh] bg-gradient-to-t from-slate-50 to-slate-400 flex justify-center items-center">
            <motion.p
                initial={{ x: '100%' }}
                animate={{ x: ['-280%', '260%'] }}
                transition={{
                    repeat: Infinity,
                    duration: 20,
                    ease: 'linear'
                }}
                className="whitespace-nowrap"
            >
                🎉 Beat scams by ...
            </motion.p>
        </header>
    )
}

export default Header
