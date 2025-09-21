import InputForm from './inputForm';
import ButtonForm from './buttonForm';
import '../styles/contentForm.css';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import useEmailValidation from '../hooks/emailForm';

function ContentForm() {
    const { email, handleEmailChange, validateEmail } = useEmailValidation();
    const [fullName, setFullName] = useState('');
    const [passwordStrong, setPasswordStrong] = useState(false);

    const handleFullNameChange = (e) => setFullName(e.target.value);
    const handlePasswordStrengthChange = (isStrong) => setPasswordStrong(isStrong);

    const showToast = (message, type = 'info') => {
        if (type === 'success') toast.success(message);
        else if (type === 'error') toast.error(message);
        else toast(message);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const emailError = !validateEmail();
        const passwordError = !passwordStrong;
        let errorMessages = [];

        if (emailError) errorMessages.push('Correo con formato incorrecto');
        if (passwordError) errorMessages.push('Contraseña no suficientemente fuerte');

        if (errorMessages.length > 0) {
        showToast(errorMessages.join(' y '), 'error');
        return;
        }

        showToast('Formulario enviado con éxito', 'success');
    };

    return (
        <>
        <form onSubmit={handleSubmit}>
            <InputForm
            iconName="person"
            fieldName="Nombres completos"
            typeInput="text"
            value={fullName}
            onChange={handleFullNameChange}
            />
            <InputForm
            fieldName="Correo electrónico"
            typeInput="email"
            iconName="email"
            value={email}
            onChange={handleEmailChange}
            />
            <InputForm
            iconName="lock"
            fieldName="Contraseña"
            typeInput="password"
            iconExtra="visibility_off"
            showStrength={true}
            onStrengthChange={handlePasswordStrengthChange}
            />
            <ButtonForm buttonName="Crear cuenta" />
            <p> Al registrarte, aceptas nuestros
            <a href="#"> Términos de Servicio</a> y
            <a href="#"> Política de Privacidad</a>
            </p>
        </form>
        <Toaster position="top-right" toastOptions={{ duration: 3000 }} />
        </>
    );
}

export default ContentForm;
