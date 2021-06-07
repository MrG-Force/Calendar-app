function testRandomDates() {
    var dates = {};
    for (let index = 0; index < 20; index++) {
        var year = 2020 + Math.floor((Math.random() * 20) + 1);
        var month = Math.floor(Math.random() * 12);
        var longMonths = [0, 2, 4, 6, 7, 9, 11];
        if (longMonths.includes(month)) {
            var day = Math.floor((Math.random() * 31) + 1);
        } else if (month == 1) {
            var day = Math.floor((Math.random() * 28) + 1);
        } else {
            var day = Math.floor((Math.random() * 30) + 1);
        }
        dates[index] = new Date(year, month, day)
    }
    var sampleDate1 = new Date(2024, 1, 29);

    for (let key in dates) {
        let date = dates[key];
        yield date;
    }

}
