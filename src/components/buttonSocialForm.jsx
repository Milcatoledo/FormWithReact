import useSocialButton from '../hooks/socialLogin.js';
function ButtonSocialForm({ buttonName, imagePath }) {
    const { isLoading, handleSocialLogin} = useSocialButton();

    const handleClick = () => {
        if (!isLoading) { handleSocialLogin(buttonName)}
    };

    return (
        <button className="social-btn" onClick={handleClick} disabled={isLoading} >
            <img src={imagePath} alt={`${buttonName} icon`} width="20" height="20"/>
            {isLoading ? `Conectando con ${buttonName}...` : buttonName}
        </button>
    )
}

export default ButtonSocialForm