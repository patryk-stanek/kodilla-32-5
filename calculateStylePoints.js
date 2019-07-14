const calculateStylePoints = (...args) => {
    let styleNotes = [];

    args.forEach(arg => {
        if (arg < 0 || arg > 20 || (arg % 0.5 != 0)) {
            return console.log('Incorrect style points!');
        } else {
            styleNotes.push(arg);
        }
    });

    let minNote = Math.min(...styleNotes);
    let maxNote = Math.max(...styleNotes);

    const minNoteFilter = (value) => {
        return value > minNote;
    }

    const maxNoteFilter = (value) => {
        return value < maxNote;
    }

    let filteredNotes = (styleNotes.filter(minNoteFilter)).filter(maxNoteFilter);

    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    return filteredNotes.reduce(reducer);
};

module.exports = calculateStylePoints;