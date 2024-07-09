import { ReactNode } from "react";

export interface IListingGridProps {
    title: string;
    children: ReactNode;
}

const ListingGrid = ({ title, children }: IListingGridProps) => {
    return (
        <>
            <p className="text-2xl mb-4"> {`${title}`} </p>
            <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                {children}
            </div>
        </>
    )
}

export default ListingGrid