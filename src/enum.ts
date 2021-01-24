enum StarbucksGrade {
  WELCOME,
  GREEN,
  GOLD,
}

function getDiscount(grade: StarbucksGrade): number {
  if (grade === StarbucksGrade.WELCOME) {
    return 0.2;
  } else if (grade === StarbucksGrade.GREEN) {
    return 0.3;
  } else if (grade === StarbucksGrade.GOLD) {
    return 0.4;
  } else {
    throw new Error('unsupported grade');
  }
}

console.log(getDiscount(StarbucksGrade.GREEN));
