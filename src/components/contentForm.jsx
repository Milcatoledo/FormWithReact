import InputForm from './inputForm'
import ButtonForm from './buttonForm'
import '../styles/contentForm.css'
function ContentForm() {
    return (
        <form>
            <>
                <InputForm 
                iconName="person"
                fieldName="Nombres completos" 
                typeInput="text" 
                />
                <InputForm 
                iconName="email"
                fieldName="Correo electrónico" 
                typeInput="text" 
                />
                <InputForm 
                iconName="lock"
                fieldName="Contraseña" 
                typeInput="password" 
                iconExtra="visibility_off"
                showStrength={true}
                />
            </>

            <ButtonForm buttonName="Crear cuenta"/>
            <p>Al registrarte, aceptas nuestros 
                <a href="#"> Términos de Servicio</a> y 
                <a href="#"> Política de Privacidad</a></p>
        </form>
    )
}
export default ContentForm