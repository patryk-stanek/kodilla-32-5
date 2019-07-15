const calculateDistancePoints = (distance, hillSize, kPoints) => {
    let startPoints;
    let sizeMultipler;
    let totalDistancePoints;

    //setting start points
    if (hillSize >= 85 && hillSize <= 184) {
        startPoints = 60
    } else if (hillSize > 184) {
        startPoints = 120;
    };

    //setting multipler
    if (hillSize >= 85 && hillSize <= 109) {
        sizeMultipler = 2;
    } else if (hillSize >= 110 && hillSize <= 184) {
        sizeMultipler = 1.8;
    } else if (hillSize >= 185) {
        sizeMultipler = 1.2;
    };

    //calculate total distance points
    totalDistancePoints = startPoints + ((distance - kPoints) * sizeMultipler);
    console.log(totalDistancePoints);
    return totalDistancePoints;
};

// calculateDistancePoints(227, 225, 200);

module.exports = calculateDistancePoints;