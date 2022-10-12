const SearchTopicos = () => {
    return (
        <div className="flex p-2 justify-center">
            <select className="px-4 h-10 w-28 rounded-l-lg border-white bg-white outline-0" id="">
                <option>Tópicos </option>
                <option>Tópicos 1</option>
                <option>Tópicos 2</option>
                <option>Tópicos 3</option>
                <option>Tópicos 4</option>
                <option>Tópicos 5</option>

            </select>
            <input className="flex h-10 w-96 p-4 bg-white outline-0 rounded-r-lg"
                placeholder="Buscar....">
            </input>
            <button className="ml-4 bg-main text-white w-20 rounded-lg">Search</button>
        </div>
    );
}

export default SearchTopicos;