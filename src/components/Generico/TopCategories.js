const TopCategories = ({ imgCat, title }) => {
    return (
        <div className="w-48 h-48 bg-white">
            <img className="p-2 h-40 w-full text-center" src={imgCat} alt="cerrajeria" />
            <p className="mb-2 text-center font-bold">{title}</p>
        </div>
    );
}

export default TopCategories;