import { useState } from 'react';
// hook para la visibilidad de la contraseña y la animacion del icono
function usePasswordToggle() {
    const [showPassword, setShowPassword] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    //visibilidad de la contraseña
    const togglePassword = () => {
        setShowPassword(!showPassword);

        setIsAnimating(true);
        setTimeout(() => {
            setIsAnimating(false);
        }, 150);
    };
    const getInputType = (originalType) => {
        return originalType === 'password' 
            ? (showPassword ? 'text' : 'password')
            : originalType;
    };

    const getIcon = () => {
        return showPassword ? 'visibility' : 'visibility_off';
    };

    return {
        showPassword,
        isAnimating,
        togglePassword,
        getInputType,
        getIcon
    };
}

export default usePasswordToggle;