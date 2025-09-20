function ButtonForm({ buttonName }) {
    return (
        <button type="submit" className="btn btn-primary btn-lg fw-bold w-100">
            {buttonName}
        </button>
    )
}

export default ButtonForm