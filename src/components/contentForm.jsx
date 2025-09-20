import InputForm from './inputForm'

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
                />
            </>
            <p>Al registrarte, aceptas nuestros Términos de Servicio y Política de Privacidad</p>
        </form>
    )
}
export default ContentForm