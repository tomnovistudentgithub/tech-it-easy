
function calculateTotalBought(inventory) {
    return inventory.reduce((total, tv) => total + tv.originalStock, 0);
}
export default calculateTotalBought;