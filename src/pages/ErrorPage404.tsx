import { Button } from "@/components/shadcn/ui/button";
import { useNavigate } from "react-router-dom";

const ErrorPage404 = () => {
    const navigate = useNavigate();

    const handleHomeClick = () => {
        navigate("/");
    };

    return (
        <div className="flex h-[85vh] flex-col items-center">
            <img src="/404.svg" alt="Error 404" className="object-fit h-4/6" />
            <p className="mb-8 mt-6 text-center">
                Oops! The page you are looking for does not exist.
            </p>
            <Button variant="primary" onClick={handleHomeClick}>
                Return to Home
            </Button>
        </div>
    );
};

export default ErrorPage404;
