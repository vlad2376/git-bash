function calcAverageCalories(days) {

    if (days.length === 0) {
        return 0;
    }


    let totalCalories = 0;
    for (let day of days) {
        totalCalories += day.calories;
    }


    let averageCalories = totalCalories / days.length;

    return averageCalories;
}


let weeklyCalories1 = [
    { day: "monday", calories: 3010 },
    { day: "tuesday", calories: 3200 },
    { day: "wednesday", calories: 3120 },
    { day: "thursday", calories: 2900 },
    { day: "friday", calories: 3450 },
    { day: "saturday", calories: 3280 },
    { day: "sunday", calories: 3300 }
];
console.log(calcAverageCalories(weeklyCalories1)); // 3180

let weeklyCalories2 = [
    { day: "monday", calories: 2040 },
    { day: "tuesday", calories: 2270 },
    { day: "wednesday", calories: 2420 },
    { day: "thursday", calories: 1900 },
    { day: "friday", calories: 2370 },
    { day: "saturday", calories: 2280 },
    { day: "sunday", calories: 2610 }
];
console.log(calcAverageCalories(weeklyCalories2)); // 2270

console.log(calcAverageCalories([])); // 0
