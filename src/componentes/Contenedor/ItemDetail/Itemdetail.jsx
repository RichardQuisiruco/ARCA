const ItemDetail = ({ producto }) => {
    return (
        <div className="container">
            <div className="row" >
                <div className="col-6">
                    <img src= {producto.foto}/>
                    <h2>Nombre:{producto.nombre}</h2>
                    <h4>Categoria:{producto.categoria}</h4>
                    <h4>Precio:{producto.precio}</h4>


                </div>
            </div> {detailId} </div>
    )
}