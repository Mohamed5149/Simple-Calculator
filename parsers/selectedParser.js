const cleanDashes = (stringInput) => stringInput.startsWith('--')? stringInput.substring(2): stringInput;
module.exports = (argv) => {
    const params = argv.slice(2);
    const stringInput = params.find(e => isNaN(e));
    var operation = cleanDashes(stringInput);
    const operands = params
            .filter(e => !isNaN(e))
            .map(Number);
    return ({
        operation,
        operands
    });
}