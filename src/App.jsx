import ContentForm from './components/contentForm'
import ButtonSocialForm from './components/buttonSocialForm'
import googleIcon from './svg/google.svg' 

function App() {
    return (
      <div className='containerCardForm'>
        <div>
          <i className="material-icons">person_add</i>
        </div>
        <h1>Crear cuenta</h1>
        <p className="subtitle">Únete a nuestra comunidad</p>
        <ContentForm />
        <div className="divider">
          <span>o continúa con</span>
        </div>
        <div>
          <ButtonSocialForm imagePath={googleIcon} buttonName="Google" />
        </div>
      </div>
    )
}

export default App