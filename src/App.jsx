import ContentForm from './components/contentForm'
import ButtonSocialForm from './components/buttonSocialForm'
import googleIcon from './svg/google.svg'
import './App.css'

function App() {
    return (
        <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center bg-gradient">
            <div className="card shadow-lg border-0 main-card">
                <div className="card-header text-center text-white header-custom">
                    <div className="mb-2">
                        <div className="icon-circle mx-auto">
                            <i className="material-icons icon-large">person_add</i>
                        </div>
                    </div>
                    <h1 className="h4 mb-1 fw-bold">Crear cuenta</h1>
                    <p className="mb-0 subtitle">Únete a nuestra comunidad</p>
                </div>
                
                <div className="card-body p-3">
                    <ContentForm />
                    
                    <div className="text-center my-2 divider">
                        <span className="text-muted small">o continúa con</span>
                    </div>
                    
                    <div className="d-grid">
                        <ButtonSocialForm imagePath={googleIcon} buttonName="Google" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App