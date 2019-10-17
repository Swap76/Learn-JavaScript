function multiply(a) {
    return (b) => {
        return (c) => {
            return a * b * c
        }
    }
}
console.log(multiply(1)(2)(3)) // Output 6