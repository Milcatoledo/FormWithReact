import { useState } from 'react';

function usePasswordStrength() {
    const [passwordValue, setPasswordValue] = useState('');
    const [isActive, setIsActive] = useState(false);
    const [strength, setStrength] = useState({ score: 0, feedback: '', level: '' });

    // Función para calcular la fuerza de la contraseña
    const calculatePasswordStrength = (password) => {
        let score = 0;
        let feedback = '';
        let level = '';

        if (password.length >= 8) score += 25;
        if (password.length >= 12) score += 25;

        if (/\d/.test(password)) score += 15;

        if (/[a-z]/.test(password) && /[A-Z]/.test(password)) score += 20;

        if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) score += 15;

        if (password.length < 8) {
            feedback = 'Mínimo 8 caracteres';
            level = 'weak';
        } else if (score < 40) {
            feedback = 'Contraseña débil';
            level = 'weak';
        } else if (score < 70) {
            feedback = 'Contraseña media';
            level = 'medium';
        } else {
            feedback = 'Contraseña fuerte';
            level = 'strong';
        }
        return { score, feedback, level };
    };

    const handlePasswordChange = (password) => {
        setPasswordValue(password);
        
        if (password.length > 0) {
            setIsActive(true);
            const newStrength = calculatePasswordStrength(password);
            setStrength(newStrength);
        } else {
            setIsActive(false);
            setStrength({ score: 0, feedback: '', level: '' });
        }
    };

    const getStrengthStyle = () => {
        return {
            width: `${strength.score}%`,
            transition: 'width 0.3s ease'
        };
    };

    // Función para obtener la clase CSS según el nivel
    const getStrengthClass = () => {
        return strength.level;
    };

    return {
        passwordValue,
        isActive,
        strength,
        handlePasswordChange,
        getStrengthStyle,
        getStrengthClass
    };
}

export default usePasswordStrength;