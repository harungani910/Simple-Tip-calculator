

function tipCalculator(bill) {
    var percentage;
    if (bill < 50) {
        percentage = .20;
    }
    else if (bill > 50 && bill < 200) {
        percentage = .15;
    }
    else {
        percentage = .10;
    }
    return percentage * bill;
}


var bills = [124, 48, 268];
var tips = [tipCalculator(bills[0]), tipCalculator(bills[1]), tipCalculator(bills[2])];

for (var i = 0; i < tips.length; i++) {
    console.log(tips[i]);
};

