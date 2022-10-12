const PreguntaRespuesta = ({ title }) => {
    return (
        <div className="ml-2">
            <p className="text-2xl font-bold py-4">{title}</p>
            <input className="p-2 w-full border-gray-300 " type="text" placeholder="Tienes Algunas pregunta? o Respuesta?" />
        </div>
    );
}

export default PreguntaRespuesta;