import { motion } from 'framer-motion';

const SpinnerLoader = () => {
    return (
        <motion.div
            style={spinnerStyle}
            animate={{
                rotate: [0, 360],
            }}
            transition={{
                repeat: Infinity,
                duration: 1,
                ease: 'linear',
            }}
        />
    );
};

const spinnerStyle = {
    width: '50px',
    height: '50px',
    border: '8px solid rgba(0, 0, 0, 0.1)',
    borderTop: '8px solid #3498db',
    borderRadius: '50%',
    margin: 'auto',
    display: 'block',
};

export default SpinnerLoader;
