import { useState } from 'react';
function useSocialButton() {
    const [isLoading, setIsLoading] = useState(false);
    const showToast = (message, type = 'info') => {
        console.log(`Toast ${type}: ${message}`);
        alert(`${message}`); 
    };
    const handleSocialLogin = (provider) => {
        setIsLoading(true);
        // Simular proceso de autenticación
        setTimeout(() => {
            showToast(`Funcionalidad de ${provider} en desarrollo`, 'info');
            setIsLoading(false);
        }, 500);
    };

    return {
        isLoading,
        handleSocialLogin,
        showToast
    };
}

export default useSocialButton;