import ContentForm from './components/contentForm'

function App() {
    return (
      <div>
        <div>
          <i className="material-icons">person_add</i>
        </div>
        <h1>Crear cuenta</h1>
        <p className="subtitle">Únete a nuestra comunidad</p>
        <ContentForm />
        <div className="divider">
            <span>o continúa con</span>
        </div>
      </div>
    )
}
export default App