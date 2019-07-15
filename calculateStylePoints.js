const calculateStylePoints = (styleNotes) => {
    let stylePoints = [];

    //checking notes
    styleNotes.forEach(arg => {
        if (typeof arg != 'number') {
            arg = Number(arg);

            !isNaN(arg) ? stylePoints.push(arg) : stylePoints.push(0);

        } else if (arg < 0 || arg > 20 || (arg % 0.5 != 0)) {
            stylePoints.push(0);
        } else {
            stylePoints.push(arg);
        }
    });

    stylePoints.sort((a,b) => a-b);//sorting notes from lowest to highest
    stylePoints.shift();//erasing lowest note;
    stylePoints.pop();//erasing highest notes

    //setting reducer for culminating notes
    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    //calculating style points
    const totalStylePoints = stylePoints.reduce(reducer);

    // console.log(totalStylePoints);
    return totalStylePoints;
};

module.exports = calculateStylePoints;