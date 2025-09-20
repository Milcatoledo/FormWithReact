import useSocialButton from '../hooks/socialLogin.js';
import '../styles/buttonSocialForm.css'

function ButtonSocialForm({ buttonName, imagePath }) {
    const { isLoading, handleSocialLogin } = useSocialButton();
    
    const handleClick = () => {
        if (!isLoading) { 
            handleSocialLogin(buttonName);
        }
    };

    return (
        <button 
            className="btn btn-outline-secondary btn-lg d-flex align-items-center justify-content-center social-btn-hover custom-btn-width"
            onClick={handleClick} 
            disabled={isLoading}
        >
            <img 
                src={imagePath} 
                alt={`${buttonName} icon`} 
                width="20" 
                height="20"
                className="me-2"
            />
            {isLoading ? `Conectando con ${buttonName}...` : buttonName}
        </button>
    )
}

export default ButtonSocialForm