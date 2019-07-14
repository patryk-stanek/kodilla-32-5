const calculateDistancePoints = (distance, hillSize, kPoints) => {
    /*
        skocznia normalna 85-109m
        skocznia duza 110-184m
        skocznia mamucia 185m+
    */
   
    let start;
    let multipler;
    let score;

    if (hillSize >= 85 && hillSize <= 184) {
        start = 60
    } else if (hillSize > 184) {
        start = 120;
    };

    if (hillSize >= 85 && hillSize <= 109) {
        multipler = 2;
    } else if (hillSize >= 110 && hillSize <= 184) {
        multipler = 1.8;
    } else if (hillSize >= 185) {
        multipler = 1.2;
    };

    score = start + ((distance - kPoints) * multipler);
    return console.log(score);
};

calculateDistancePoints(227, 225, 200);

module.exports = calculateDistancePoints;