import React from 'react'

const FormProducts = () => {
  return (
    <>
     <div className='border border-secondary-subtle rounded p-4'>
        <div className='d-flex justify-content-between'>
          <div>
            <h3>Nuevo Producto</h3>
          </div>
          <div>
            <button type="button" className="btn-close" aria-label="Close"></button>
          </div>
        </div>
        <form className="row g-3">
          <div className="col-md-12 text-start">
            <label for="inputName" className="form-label">Nombre</label>
            <input type="name" className="form-control" id="inputName" />
          </div>
          <div className="col-md-12 text-start">
            <label for="inputId" className="form-label">SKU</label>
            <input type="id" className="form-control" id="inputId" />
          </div>
          <div className="col-md-12 text-start">
            <label for="inputDescription" className="form-label">Descripción</label>
            <textarea class="form-control" id="inputDescription" rows="3"></textarea>
          </div>
          <div className="col-md-4 text-start">
            <label for="inputPrice" className="form-label">Precio</label>
            <input type="text" className="form-control" id="inputPrice" />
          </div>
          <div className="col-md-4 text-start">
            <label for="inputStock" className="form-label">Stock</label>
            <input type="text" className="form-control" id="inputStock" />
          </div>
          <div className="col-md-4 text-start">
            <label for="inputMinStock" className="form-label">Stock Mínimo</label>
            <input type="text" className="form-control" id="inputMinStock" />
          </div>
          <div className="col-md-12 text-start">
            <button type="submit" className="btn btn-success">Guardar</button>
            <button type="submit" className="btn btn-danger ms-3">Cancelar</button>
          </div>
        </form>
      </div> 
    </>
  )
}

export default FormProducts
