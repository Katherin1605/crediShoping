
const Login = () => {
  return (
      <>
      <div className="main-container">
      <div className="d-flex justify-content-center align-items-center vh-100 bd-page">
      <div className="card shadow p-4 border-0 form-card">
        <div className="text-center mb-4 mt-2">
        <div className="icon-circle d-inline-flex mb-3 shadow-sm">
            <i className="bi bi-box-arrow-in-right fs-2" aria-hidden></i>
        </div>
        <h1>Sistema de Ventas a Crédito</h1>
        <p>Ingresa tus credenciales para acceder al sistema</p>
        </div>
        <form>
          <div className="mb-3">
            <label htmlFor="username" className="form-label text-secondary fw-semibold mb-1 text-sm">
                Usuario
            </label>
            <input type="text" className="form-control" id="username" placeholder="Ingresa tu usuario" />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label text-secondary fw-semibold mb-1 text-sm">Contraseña</label>
            <input type="password" className="form-control" id="password" placeholder="Ingresa tu contraseña" />
          </div>
          <button type="submit" className="btn-primary w-100 py-2 mb-4">Iniciar Sesión</button>
        </form>

      </div>
      </div>
      </div>
      </>
  )
}

export default Login
