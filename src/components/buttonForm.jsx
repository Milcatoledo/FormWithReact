import '../styles/buttonForm.css'
function ButtonForm({ buttonName }) {
    return (
        <button type="submit" className="btn btn-primary btn-lg fw-bold custom-btn-width">
            {buttonName}
        </button>
    )
}

export default ButtonForm