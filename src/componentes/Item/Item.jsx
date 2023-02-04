import { Link } from "react-router-dom"

const Item = (producto) => {
    return (
        <div className='col-4 p-2 mt-5'>
            <div key={producto.id} className='card w-100 mt-5 shadow text-center'>
                <div className="card-head">
                    {producto.nombre}
                </div>
                <div className="card-body">
                    <img src={producto.foto} alt="pelota" className="w-100" />
                    <h6 className="text-center">Categoria: {producto.categoria}</h6>
                    <h6 className="text-center">Precio: {producto.precio}</h6>
                </div>
                <div className="card-footer text-center">
                    <Link to={`/detail/${producto.id}`}>
                        <button type="button" className="btn btn-outline-dark">Ir al detalle</button>
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default Item