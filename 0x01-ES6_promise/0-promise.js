export default function getResponseFromAPI() {
  return new Promise(((resolve, reject) => {
    const request = 5;

    const randomInt = Date.now();
    const value = randomInt % 10;

    if (value < request) {
      resolve(value);
    } else {
      reject(new Error(`The value is too high: ${value}`));
    }
  }));
}
