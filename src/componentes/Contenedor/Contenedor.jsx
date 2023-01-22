import { useState,useEffect } from "react"
import { gFetch } from "../../../utiles/gFetch"



export const Contenedor = ({ saludo }) => {
    const [productos, setProductos] =useState([])
    const [loading, setLoading] = useState(true)
    //*const [boolean, setBoolean] = useState(false)



    useEffect(()=>{
        gFetch()
        .then(respuestaPromesa => {
            setProductos(respuestaPromesa)
        })

        .catch(err => console.log(err))
        .finally(()=> setLoading(false))

    },[])
    console.log(productos)
    return (
        <div>
            {loading
            ?
            
            <h1>Cargando...</h1>
            :

            productos.map(producto => <div key={producto.id} className='p-2 card w-25 mt-5 shadow text-center'>
                <div className="card-head">
                    {producto.nombre}
                </div>
                <div className="card-body">
                    <img src={producto.foto} alt="pelota" className="w-100" />
                    <h6 className="text-center">Categoria: {producto.categoria}</h6>
                    <h6 className="text-center">Precio: {producto.precio}</h6>
                </div>
                <div className="card-footer text-center">
                    <link to={'/detail/${productos.id}$'}>
                    <button type="button" className="btn btn-outline-dark">Comprar</button>
                    </link>
                    
                </div>
                </div>
            )

        }
        </div>    
    )
}

