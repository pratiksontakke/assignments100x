function addPromises(promise1, promise2) {
    return new Promise((resolve, reject) => {
        Promise.all([promise1, promise2])
            .then(([value1, value2]) => {
                const sum = value1 + value2;
                resolve(sum);
            })
                .catch((error) => {
                    reject(error);
                });
    });
}

// Example usage:
const promise1 = new Promise((resolve) => setTimeout(() => resolve(2), 20));
const promise2 = new Promise((resolve) => setTimeout(() => resolve(5), 60));

addPromises(promise1, promise2)
    .then((result) => {
        console.log(result); // Output: 7
    })
    .catch((error) => {
        console.error(error);
    });
