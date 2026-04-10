
const Payments = () => {
  return (
    <>
        <h1>Control de Pagos</h1>

        <div className="card text-bg-light mb-3">
            <div className="card-header text-start">Ventas Pendientes de Pago</div>
            <div className="card-body">
                <div className="d-flex justify-content-between">
                <h5 className="text-start py-2">Nombre cliente</h5>
                <button className="h-75 text-primary"><i class="bi bi-eye"></i></button>
                </div>
                <p className='text-start'> Fecha de venta</p>
                <div className='d-flex justify-content-around'>
                <p className="card-text">Total</p>
                <p className="card-text">Pagado</p>
                <p className="card-text">Saldo</p>
                </div>
            </div>
        </div>

        <div className='card text-bg-light mb-3'>
        <div className='d-flex justify-content-between'>
        <div className="card-header text-start p-2">Detalle de Venta</div>
          <div>
            <button type="button" className="btn-close p-3" aria-label="Close"></button>
          </div>
        </div>
          <div className="card-body">
                <div>
                <h5 className='text-start text-secondary'>Cliente</h5>
                <h5 className='text-start'>nombre de cliente</h5>
                </div>
                <div>
                <h5 className='text-start text-secondary'> Fecha de venta</h5>
                <h5 className='text-start'>fecha de venta</h5>
                </div>

                <div>
                    <h5 className='text-start text-secondary'>Productos</h5>
                    <h5>nombre de producto</h5>
                </div>

                <div>
                    <h5>Total</h5>
                    <h5>Cuotas</h5>
                    <h5 className="text-secondary">Valor por cuota</h5>
                    <h5>Total</h5>
                </div>
            </div>
        </div>
    </>
  )
}

export default Payments
