import { Button } from '@/components/shadcn/ui/button';
import { useNavigate } from 'react-router-dom';

const ErrorPage404 = () => {
    const navigate = useNavigate();

    const handleHomeClick = () => {
        navigate('/');
    };

    return (
        <div className="h-[85vh] flex flex-col items-center">
            <img src="/404.svg" alt="Error 404" className="h-4/6 object-fit" />
            <p className="mt-6 mb-8 text-center">Oops! The page you are looking for does not exist.</p>
            <Button variant="primary" onClick={handleHomeClick}>Return to Home</Button>
        </div>
    );
};

export default ErrorPage404;
