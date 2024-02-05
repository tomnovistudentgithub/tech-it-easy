import determineIconForOption from "../helpers/determineIcon/determineIconForOption.jsx";

function DisplayTvBlock({ title, price, url, object,styling, screenSizes }) {
    return (
        <div className={styling}>
            {url && <img class="tv-image" src={url} alt="tv-image" />}
            <div className='specifications'>
            <h2>{title}</h2>
            <h2>{price}</h2>
            <p>{screenSizes}</p>
                <div class="options">
            {object && object.options.map(option => (
                <div key={option.name}>
                    <p>{determineIconForOption(option)} {option.name}</p>

                </div>
            ))
            }
                </div>
            </div>
        </div>

    );
}

export default DisplayTvBlock;