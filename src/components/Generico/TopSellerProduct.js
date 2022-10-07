
const TopSellerProduct = ({ imagen, title, precio }) => {
    return (
        <div className="flex w-full">
            <img className="h-28 w-28" src={imagen} alt="top-seller" />
            <div className="pl-2 w-8/12">
                <p className="cursor-pointer hover:text-main font-normal underline">
                    {title}
                </p>
                <p className="">{precio}</p>
            </div>
        </div>
    );
}

export default TopSellerProduct;