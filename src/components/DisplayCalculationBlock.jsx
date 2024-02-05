

function DisplayCalculationBlock({ label, value, styling }) {
    return (
        <div className={styling}>
            <h2>{label}</h2>
            <p>{value}</p>
        </div>

    );
}

export default DisplayCalculationBlock;