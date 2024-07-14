import { Routes } from "@/types/globalTypes";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <img
                className="hidden w-full object-contain md:block"
                src="/footer.svg"
                alt="Instant Listings Banner"
            />

            <footer className="mx-6 flex h-[7vh] items-center justify-between text-xs text-slate-500">
                <p>Copyright &copy; 2024 FreeMarket.</p>
                <nav className="flex gap-6">
                    <Link to={Routes.PRIVACY_PAGE} className="hover:underline">
                        Privacy Policy
                    </Link>
                    <Link to={Routes.ABOUT_PAGE} className="hover:underline">
                        About Us
                    </Link>
                    <Link to={Routes.CONTACT_PAGE} className="hover:underline">
                        Contact Us
                    </Link>
                </nav>
            </footer>
        </>
    );
};

export default Footer;
