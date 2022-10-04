<<<<<<< HEAD
import CardImage from "../components/BarNavegation/CardImage";
import FondoBlanco from "../assets/FondoBlanco.jpg"
const Home = () => {
    return (
        <div>

<div className="container flex">
<CardImage imagen={FondoBlanco} titulo={"Candado Total"} description={"Just $159.59"} text={"Shop Now"} />
<CardImage imagen={FondoBlanco} titulo={"Candado Total"} description={"Just $159.59"} text={"Comprar"} />
</div>
            Hola Probando











=======
import TopCategories from "../components/Generico/TopCategories";
import cerrajeria from "../assets/categories/cerrajeria.jpg";
import Plomeria from "../assets/categories/plomeria.png";

const Home = () => {
    return (
        <div className="flex p-8 ml-2">
>>>>>>> ba1825f705e06ba16d2b4534e912c8d57a42e673

            <div className="flex space-x-2">
                <TopCategories imgCat={cerrajeria} title={"Cerrajería"} />
                <TopCategories imgCat={Plomeria} title={"Plomeria"} />
            </div>
        </div>
    );
}

export default Home;