import TopCategories from "../components/Generico/TopCategories";
import cerrajeria from "../assets/categories/cerrajeria.jpg";
import Plomeria from "../assets/categories/plomeria.png";
import Sliderbarproducts from "../components/BarNavegation/Sliderbarproducts";

const Home = () => {
    return (

        <div className="container ">
            <div>
                <div className="flex mt-4">
                    <Sliderbarproducts/>
                    </div>

            </div>
            <div className="flex space-x-2 p-8 ml-2">
                <TopCategories imgCat={cerrajeria} title={"Cerrajería"} />
                <TopCategories imgCat={Plomeria} title={"Plomeria"} />
            </div>
        </div>
    );
}

export default Home;