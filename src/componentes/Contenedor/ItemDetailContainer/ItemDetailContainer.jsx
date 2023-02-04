import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { gFetch } from "../../../../utiles/gFetch"

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    const {detailId} = useParams()
    //console.log(detailId)
    useEffect(()=>{
        gFetch(detailId)
        .then(resp => setProducto(resp))
        
    },[])
    console.log(producto)
    return (
        <ItemDetail producto={producto}/>)
    
}

export default ItemDetailContainer