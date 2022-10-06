const Menucategories = ({ nombCategories }) => {
    return (
        <div className="lg:w-3/12 p-6">
            <p className="text-2xl font-medium">{nombCategories}</p>
            <div className="py-10  font-normal">
                <ul className="text-base">
                    <li className="m-2 cursor-pointer hover:text-main-dark">Best Seller</li>
                    <li className="m-2 cursor-pointer hover:text-main-dark">New Arrivals</li>
                    <li className="m-2 cursor-pointer hover:text-main-dark">Desktop PC</li>
                    <li className="m-2 cursor-pointer hover:text-main-dark">Laptop</li>
                    <li className="m-2 cursor-pointer hover:text-main-dark">Smartphones</li>
                    <li className="m-2 cursor-pointer hover:text-main-dark">Tablets</li>
                </ul>
            </div>
            <span className="m-2 cursor-pointer italic text-gray-500 text-sm text-end">View All</span>
        </div>
    );
}

export default Menucategories;