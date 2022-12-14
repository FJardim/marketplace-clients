import CajaTiendas from "../components/Tiendas/CajaTiendas";
import imagen0 from "../assets/Imagen0.png";
import perfil from "../assets/perfil.jpg";
import { Link } from "react-router-dom";

const ListTiendas = () => {
    return (
        <div >
            <div className="flex p-6">
                <Link to={"/"} className="text-blue-600 cursor-pointer">Home/</Link>
                <Link> Tiendas </Link>
            </div>
            <div className="bg-white">
                <p className="text-4xl text-center font-base p-6">Lista de Tiendas</p>
                <div className="flex p-6 space-x-20 justify-center">
                    <CajaTiendas portada={imagen0} imagen={perfil} nombre={"Ferreteria Car, C.A."} direccion={"Valencia Calle Plaza Local 1-34 del centro de valencia"} telefono={"0241-9631025"} email={"ferreteria@gmail.com"} />
                    <CajaTiendas portada={imagen0} imagen={perfil} nombre={"Ferreteria Car, C.A."} direccion={"Valencia Calle Plaza"} telefono={"0241-9631025"} email={"ferreteria@gmail.com"} />
                    <CajaTiendas portada={imagen0} imagen={perfil} nombre={"Ferreteria Car, C.A."} direccion={"Valencia Calle Plaza"} telefono={"0241-9631025"} email={"ferreteria@gmail.com"} />
                </div>
            </div>
        </div >
    );
}

export default ListTiendas;