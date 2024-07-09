const Footer = () => {
    return (
        <>
            <img
                className="hidden w-full object-contain md:block"
                src="/footer.svg"
                alt="Instant Listings Banner"
            />

            <footer className="h-[7vh] flex justify-between mx-6 items-center text-xs text-slate-500">
                <p>Copyright © 2024 FreeMarket.</p>
                <div className="flex gap-6">
                    <p className="hover:underline">Privacy Policy</p>
                    <p className="hover:underline">About Us</p>
                    <p className="hover:underline">Contact Us</p>
                </div>

            </footer>
        </>
    )
}

export default Footer
