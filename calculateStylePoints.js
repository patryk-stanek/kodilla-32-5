const calculateStylePoints = (...args) => {
    let styleNotes = [];

    const BreakException = {};

    args.forEach(arg => {
        if (arg < 0 || arg > 20 || (arg % 0.5 != 0)) {
            return console.log('Incorrect style points!');
        } else {
            styleNotes.push(arg);
        }
    });

    styleNotes.sort((a,b) => a-b);
    styleNotes.shift();
    styleNotes.pop();

    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    const calculatedPoints = styleNotes.reduce(reducer);

    return calculatedPoints;
};

// calculateStylePoints(16, 17, 16.5, 16, 18.1);

module.exports = calculateStylePoints;