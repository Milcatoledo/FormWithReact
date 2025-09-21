import usePasswordToggle from '../hooks/passwordToggle';
import useStrongPassword from '../hooks/strongPassword';
import '../styles/inputForm.css';

function InputForm({ fieldName, typeInput, iconName, iconExtra, showStrength = false, value, onChange, onStrengthChange }) {
    const { isAnimating, togglePassword, getInputType, getIcon } = usePasswordToggle();
    const inputType = getInputType(typeInput);
    const displayIcon = typeInput === 'password' ? getIcon() : iconExtra;
    const strengthHook = useStrongPassword();
    const { passwordValue, isActive, strength, handlePasswordChange, getStrengthStyle, getStrengthClass } = showStrength ? strengthHook : {};

    const handleInputChange = (e) => {
        if (showStrength && typeInput === 'password' && handlePasswordChange) {
        handlePasswordChange(e.target.value);
        if (onStrengthChange) {
            onStrengthChange(strength?.score >= 3); // Considera fuerte si score >= 3
        }
        }
        if (onChange) {
        onChange(e);
        }
    };

    return (
        <div className="mb-3">
        <label className="form-label text-muted small">{fieldName}</label>
        <div className="input-group">
            <span className="input-group-text bg-transparent border-end-0">
            <i className="material-icons text-muted">{iconName}</i>
            </span>
            <input
            type={inputType}
            className="form-control border-start-0 ps-0"
            value={showStrength && typeInput === 'password' ? passwordValue : value}
            onChange={handleInputChange}
            required
            />
            {iconExtra && (
            <span className={`input-group-text bg-transparent border-start-0 password-toggle ${isAnimating ? 'animating' : ''}`}>
                <i className="material-icons text-muted" onClick={typeInput === 'password' ? togglePassword : undefined}>
                {displayIcon}
                </i>
            </span>
            )}
        </div>

        {showStrength && typeInput === 'password' && isActive && (
            <div className="password-strength mt-2">
            <div className="progress strength-bar">
                <div
                className={`progress-bar strength-fill ${getStrengthClass && getStrengthClass()}`}
                style={getStrengthStyle && getStrengthStyle()}
                ></div>
            </div>
            <small className="strength-text d-block mt-1">{strength && strength.feedback}</small>
            </div>
        )}
        </div>
    );
}

export default InputForm;
