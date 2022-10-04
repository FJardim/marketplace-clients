import TopCategories from "../components/Generico/TopCategories";
import cerrajeria from "../assets/categories/cerrajeria.jpg";
import Plomeria from "../assets/categories/plomeria.png";
import CardImage from "../components/BarNavegation/CardImage";
import FondoBlanco from "../assets/FondoBlanco.jpg"
const Home = () => {
    return (
        <div className="container ">
            <div className="flex p-8 ml-2 ">
                <div className="flex">
                    <CardImage imagen={FondoBlanco} titulo={"Candado Total"} description={"Just $159.59"} text={"Shop Now"} logo={cerrajeria} />
                    <CardImage imagen={FondoBlanco} titulo={"Candado Total"} description={"Just $159.59"} text={"Comprar"} logo={cerrajeria} />
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