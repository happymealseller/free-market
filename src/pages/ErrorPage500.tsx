import { Button } from '@/components/shadcn/ui/button';
import { useNavigate } from 'react-router-dom';

const ErrorPage500 = () => {
    const navigate = useNavigate();

    const handleHomeClick = () => {
        navigate('/');
    };

    return (
        <div className="h-[85vh] flex flex-col items-center">
            <img src="/500.svg" alt="Error 500" className="h-4/6 object-fit" />
            <p className="mt-6 mb-8 text-center">Oops! The server has encountered a situation it doesn't know how to handle.</p>
            <Button variant="primary" onClick={handleHomeClick}>Return to Home</Button>
        </div>
    );
};

export default ErrorPage500;
