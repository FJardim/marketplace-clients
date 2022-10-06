const TopCategories = ({ imgCat, title }) => {
    return (
        <div className="lg:w-48 lg:h-48 bg-white shadow-md">
            <img className="p-2 h-40 w-full text-center" src={imgCat} alt="cerrajeria" />
            <p className="mb-2 text-center font-bold">{title}</p>
        </div>
    );
}

export default TopCategories;