const calculateDistancePoints = (distance, hillSize, kPoints) => {
    let startPoints;
    let sizeMultipler;
    let totalDistancePoints;

    //-------------------------------------hillSize conditions
    if (hillSize < 0) {
        hillSize = 0;
    } else if (typeof hillSize != 'number') {
        hillSize = Number(hillSize);
        
        if (isNaN(hillSize) == true) {
            hillSize = 0;
        }
    }

    //-------------------------------------distance conditions
    if (distance < 0) {
        distance = 0;
    } else if (typeof distance != 'number') {
        distance = Number(distance);

        if (isNaN(distance) == true) {
            distance = 0;
        };
    };

    //-------------------------------------kPoints conditions
    if (kPoints < 0) {
        kPoints = 0;
    } else if (typeof kPoints != 'number') {
        kPoints = Number(kPoints);

        if (isNaN(kPoints) == true) {
            kPoints = 0;
        };
    };

    //setting start points
    if (hillSize >= 85 && hillSize <= 184) {
        startPoints = 60
    } else if (hillSize > 184) {
        startPoints = 120;
    } else {
        startPoints = 60;//condition for wrong hillSize
    };

    //setting multipler
    if (hillSize >= 85 && hillSize <= 109) {
        sizeMultipler = 2;
    } else if (hillSize >= 110 && hillSize <= 184) {
        sizeMultipler = 1.8;
    } else if (hillSize >= 185) {
        sizeMultipler = 1.2;
    } else {
        sizeMultipler = 1;//condition for wrong hillSize
    };

    //calculate total distance points
    totalDistancePoints = startPoints + ((distance - kPoints) * sizeMultipler);

    if (totalDistancePoints < 0) {
        totalDistancePoints = 0;
    };

    // console.log(totalDistancePoints);
    return totalDistancePoints;
};

module.exports = calculateDistancePoints;