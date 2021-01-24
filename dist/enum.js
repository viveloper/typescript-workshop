var StarbucksGrade;
(function (StarbucksGrade) {
    StarbucksGrade[StarbucksGrade["WELCOME"] = 0] = "WELCOME";
    StarbucksGrade[StarbucksGrade["GREEN"] = 1] = "GREEN";
    StarbucksGrade[StarbucksGrade["GOLD"] = 2] = "GOLD";
})(StarbucksGrade || (StarbucksGrade = {}));
function getDiscount(grade) {
    if (grade === StarbucksGrade.WELCOME) {
        return 0.2;
    }
    else if (grade === StarbucksGrade.GREEN) {
        return 0.3;
    }
    else if (grade === StarbucksGrade.GOLD) {
        return 0.4;
    }
    else {
        throw new Error('unsupported grade');
    }
}
console.log(getDiscount(StarbucksGrade.GREEN));
//# sourceMappingURL=enum.js.map