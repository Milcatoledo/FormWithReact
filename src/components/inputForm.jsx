import usePasswordToggle from '../hooks/usePasswordToggle';

function InputForm({ fieldName, typeInput, iconName, iconExtra }) {
    const { isAnimating, togglePassword, getInputType, getIcon } = usePasswordToggle();

    const inputType = getInputType(typeInput);

    const displayIcon = typeInput === 'password' 
        ? getIcon(iconExtra)
        : iconExtra;

    return (
        <div>
            <i className="material-icons input-icon">{iconName}</i>
            <label htmlFor="">{fieldName}</label>
            <input type={inputType} />
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
    );
}

export default InputForm;