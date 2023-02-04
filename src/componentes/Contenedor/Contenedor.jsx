import { useState, useEffect } from "react"
import {useParams } from "react-router-dom"
import { gFetch } from "../../../utiles/gFetch"
import ItemList from "../itemList/ItemList"



export const Contenedor = ({ saludo }) => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()
    //*const [boolean, setBoolean] = useState(false)



    useEffect(() => {
        if (categoryId) {
            gFetch()
                .then(respuestaPromesa => {
                    setProductos(respuestaPromesa.filter(items => items.categoria == categoryId))
                })

                .catch(err => console.log(err))
                .finally(() => setLoading(false))
        } else {
            gFetch()
                .then(respuestaPromesa => {
                    setProductos(respuestaPromesa)
                })

                .catch(err => console.log(err))
                .finally(() => setLoading(false))
        }

    }, [categoryId])
    return (
        <div className='container'>
            { loading
                ?

                <h1>Cargando...</h1>
                :
                <ItemList productos={productos}/>
            }
        </div>
    )
}

