const DescripcionProd = ({ title, parrafo }) => {
    return (
        <div className="text-justify">
            <p className="text-xl font-semibold py-4">{title}</p>
            <p className="text-gray-400">{parrafo}</p>
        </div>
    );
}

export default DescripcionProd;