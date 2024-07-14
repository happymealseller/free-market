import { ReactNode } from "react";

export interface IListingGridProps {
    title: string;
    children: ReactNode;
}

const ListingGrid = ({ title, children }: IListingGridProps) => {
    return (
        <>
            <p className="mb-4 text-2xl"> {`${title}`} </p>
            <div className="grid w-full grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
                {children}
            </div>
        </>
    );
};

export default ListingGrid;
