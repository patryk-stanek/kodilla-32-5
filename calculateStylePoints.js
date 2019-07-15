const calculateStylePoints = (styleNotes) => {
    let stylePoints = [];

    //checking notes
    styleNotes.forEach(arg => {
        if (arg < 0 || arg > 20 || (arg % 0.5 != 0)) {
            return console.log('Incorrect style points!');
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

    console.log(totalStylePoints);
    return totalStylePoints;
};

// calculateStylePoints(16, 17, 16.5, 16, 18);

module.exports = calculateStylePoints;