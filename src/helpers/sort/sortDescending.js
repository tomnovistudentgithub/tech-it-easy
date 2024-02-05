export function sortDescending(array, property) {
  return array.sort((a, b) => b[property] - a[property]);
}

