import React from 'react'

const FormCustomers = () => {
  return (
    <>
      <div className='border border-secondary-subtle rounded p-4'>
        <div className='d-flex justify-content-between'>
          <div>
            <h3>Nuevo Cliente</h3>
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
            <label for="inputId" className="form-label">Cédula</label>
            <input type="id" className="form-control" id="inputId" />
          </div>
          <div className="col-md-12 text-start">
            <label for="inputPhone" className="form-label">Teléfono</label>
            <input type="text" className="form-control" id="inputPhone" placeholder="04126756788" />
          </div>
          <div className="col-md-12 text-start">
            <label for="inputAddress" className="form-label">Dirección</label>
            <input type="text" className="form-control" id="inputAddress" placeholder="Calle, casa o dpto, zona" />
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

export default FormCustomers
