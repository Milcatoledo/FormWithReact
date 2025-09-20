import usePasswordToggle from '../hooks/passwordToggle';
import useStrongPassword from '../hooks/strongPassword';
import '../styles/strongPassword.css'

function InputForm({ fieldName, typeInput, iconName, iconExtra, showStrength = false }) {
    const { isAnimating, togglePassword, getInputType, getIcon } = usePasswordToggle();
    const inputType = getInputType(typeInput);
    
    const displayIcon = typeInput === 'password'
        ? getIcon()
        : iconExtra;
    
    const strengthHook = useStrongPassword();
    const {
        passwordValue,
        isActive,
        strength,
        handlePasswordChange,
        getStrengthStyle,
        getStrengthClass
    } = showStrength ? strengthHook : {};

    const handleInputChange = (e) => {
        if (showStrength && typeInput === 'password' && handlePasswordChange) {
            handlePasswordChange(e.target.value);
        }
    };

    return (
        <div>
            <div>
                <i className="material-icons input-icon">{iconName}</i>
                <label htmlFor="">{fieldName}</label>
                <input
                    type={inputType}
                    value={showStrength && typeInput === 'password' ? passwordValue : undefined}
                    onChange={handleInputChange}
                />
                {iconExtra && (
                    <i
                        className="material-icons input-icon"
                        onClick={typeInput === 'password' ? togglePassword : undefined}
                        style={{
                            transform: isAnimating ? 'scale(0.8)' : 'scale(1)',
                            transition: 'transform 0.15s ease',
                            cursor: typeInput === 'password' ? 'pointer' : 'default'
                        }}
                    >
                        {displayIcon}
                    </i>
                )}
            </div>
            {/* Indicador de fuerza de contraseña */}
            {showStrength && typeInput === 'password' && (
                <div className={`password-strength ${isActive ? 'active' : ''}`}>
                    <div className="strength-bar">
                        <div
                            className={`strength-fill ${getStrengthClass && getStrengthClass()}`}
                            style={getStrengthStyle && getStrengthStyle()}
                        ></div>
                    </div>
                    <span className="strength-text">{strength && strength.feedback}</span>
                </div>
            )}
        </div>
    );
}

export default InputForm;