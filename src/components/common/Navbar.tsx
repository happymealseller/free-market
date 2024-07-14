import { Routes } from "@/types/globalTypes";
import { useNavigate } from "react-router-dom";
import Logo from "@/components/common/Logo";
import SearchBar from "@/components/common/SearchBar";
import SellButton from "@/components/navbar/ModalSell";
import LoginComponent from "@/components/navbar/Login";

const Navbar = () => {
    const navigate = useNavigate();

    const handleClickLogin = () => {
        // navigate(Routes.LOGIN_PAGE);
    };

    const handleClickSell = () => {};

    return (
        <nav className="flex h-[10svh] items-center justify-center bg-royal px-4 sm:px-6">
            <div className="flex w-full items-center justify-between">
                <div className="flex w-3/4 justify-start gap-10">
                    <div className="hidden sm:flex">
                        <Logo />
                    </div>
                    <div className="w-3/4 sm:w-full">
                        <SearchBar />
                    </div>
                </div>

                <div className="flex w-1/4 justify-end gap-2">
                    <LoginComponent />

                    <div className="hidden sm:flex">
                        <SellButton />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
