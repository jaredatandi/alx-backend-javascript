export default function iterateThroughObject(reportWithIterator) {
  let result = '';
  for (const item of reportWithIterator) {
    result += `${item} | `;
  }
  // Remove the trailing ' | ' separator
  return result.slice(0, -3);
}
