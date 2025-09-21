import { useState } from 'react';

function useEmailValidation() {
    const [email, setEmail] = useState('');
    // Regex para validar correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const validateEmail = () => {
        return emailRegex.test(email);
    };

    return { email, setEmail, handleEmailChange, validateEmail };
}

export default useEmailValidation;
