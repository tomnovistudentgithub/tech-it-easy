
function determineIconForOption(option) {
    if (option.applicable) {
        //todo: add styling to css instead of html
        return <img src="src/assets/check.png" alt="Positive" width="20" height="20"  />;
    } else {
        return <img src="src/assets/minus.png" alt="Negative" width="20" height="20" />;
    }
}

export default determineIconForOption;