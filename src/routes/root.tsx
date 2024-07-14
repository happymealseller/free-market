// import Header from "@/components/common/Header"
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
    return (
        <div className="w-full">
            {/* <Header /> */}
            <div className="sticky left-0 top-0 z-10">
                <Navbar />
            </div>
            {/* my-5 for listing */}
            <div className="mx-6 my-8 lg:mx-12">
                <Outlet />
            </div>

            <Footer />
            {/* <MobileFooter /> */}
        </div>
    );
};

export default RootLayout;
