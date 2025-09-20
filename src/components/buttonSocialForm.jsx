function ButtonSocialForm({ buttonName, imagePath }) {
    return (
        <button>
            <img src={imagePath} alt={`${buttonName} icon`} width="20" height="20" />
            {buttonName}
        </button>
    )
}

export default ButtonSocialForm