const calculateDistancePoints = require('./calculateDistancePoints');
const calculateStylePoints = require('./calculateStylePoints');

const calculateTotalPoints = (distance, hillSize, styleNotes, kPoint, windFactor, gateFactor, ) => {
    const distancePoints = calculateDistancePoints(distance, hillSize, kPoint);
    const stylePoints = calculateStylePoints(styleNotes);
    const totalPoints = distancePoints + stylePoints + windFactor + gateFactor;

    console.log(totalPoints);
    return totalPoints
}

calculateTotalPoints(227.5, 225, ([18, 18.5, 17.5, 18.5, 18.5]), 200, 8.5, -8.5);

module.exports = calculateTotalPoints;