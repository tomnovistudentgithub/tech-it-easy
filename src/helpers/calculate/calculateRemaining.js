import calculateTotalBought from './calculateTotalBought.js';
import calculateTotalSold from './calculateTotalSold.js';
function calculateRemaining(inventory) {
    return calculateTotalBought(inventory) - calculateTotalSold(inventory);
}

export default calculateRemaining;