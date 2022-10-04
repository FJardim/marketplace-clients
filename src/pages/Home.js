import TopCategories from "../components/Generico/TopCategories";
import cerrajeria from "../assets/categories/cerrajeria.jpg";
import Plomeria from "../assets/categories/plomeria.png";

const Home = () => {
    return (
        <div className="flex p-8 ml-2">

            <div className="flex space-x-2">
                <TopCategories imgCat={cerrajeria} title={"Cerrajería"} />
                <TopCategories imgCat={Plomeria} title={"Plomeria"} />
            </div>
        </div>
    );
}

export default Home;