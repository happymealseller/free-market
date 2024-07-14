import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { IListingDetails } from "@/types/listingTypes";

export interface IListingCardProps {
    data: IListingDetails;
}

const ListingCard = ({ data }: IListingCardProps) => {
    return (
        <Link to={`/listing/${data.id}`}>
            <motion.div
                whileHover={{
                    padding: "10px",
                    borderRadius: "3px",
                    boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
                }}
                transition={{ type: "tween", duration: 0.1 }}
                className="w-full"
            >
                <div className="relative pb-[100%]">
                    <img
                        className="absolute left-0 top-0 h-full w-full object-cover"
                        src={`${data.image}?width=200&height=200`}
                        alt={`${data.title}`}
                    />
                </div>
                <div className="mt-2 whitespace-nowrap text-base leading-tight">
                    <p className="truncate">{`${data.title}`}</p>
                    <p className="font-semibold">{`${data.price}`}</p>
                </div>
            </motion.div>
        </Link>
    );
};

export default ListingCard;
