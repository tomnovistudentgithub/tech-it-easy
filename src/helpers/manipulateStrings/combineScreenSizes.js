function combineScreenSizes(tv) {



    function convertToCm(size) {
        return Math.round(size * 2.54);
    }



    const sizesWithCm = tv.availableSizes.map(size => `${size} inches (${convertToCm(size)} cm)`);

    return sizesWithCm.join(" | ");
}
export default combineScreenSizes;

