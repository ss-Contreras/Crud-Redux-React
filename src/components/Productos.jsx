import React, { Fragment } from 'react'

const Productos = () => {
  return (
    <Fragment>
        <h2 className="text-center my-5">Lista de productos</h2>
        <table className="table table-stripe">
            <thead className="bg-primary table-dark text-center">
                <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Acciones</th>
                </tr>
            </thead>
            <tbody>

            </tbody>
        </table>
    </Fragment>
  )
}

export default Productos