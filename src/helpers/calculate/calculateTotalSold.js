function calculateTotalSold(inventory) {
    return inventory.
    reduce((total, tv) => total + tv.sold, 0);
}

export default calculateTotalSold;