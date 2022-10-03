const search = () => {
    return (
        <div className="flex p-2 ml-4 ">
            <select className="px-4 h-10 w-24 rounded-l-lg border-white bg-white outline-0" id="">
                <option>All</option>
                <option>Categoria 1</option>
                <option>Categoria 2</option>
                <option>Categoria 3</option>
                <option>Categoria 4</option>
                <option>Categoria 5</option>

            </select>
            <input className="flex h-10 w-96 p-2 bg-white outline-0"
                placeholder="I´m shopping for...">
            </input>
            <button className="bg-black text-white w-24 rounded-r-lg">Search</button>
        </div>
    );
}

export default search;
