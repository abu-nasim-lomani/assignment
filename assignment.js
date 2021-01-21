// Problem Solving 1
function kilometerToMeter(kilometer) {
    if (kilometer < 0) {
        return "distance cannot be negative";
    }
    else {
        var meter = kilometer * 1000;
        return meter;
    }
}




// Problem Solving 2
function budgetCalculator(numberOfClock, numberOfPhone, numberOfLaptop) {
    if (numberOfClock < 0 || numberOfPhone < 0 || numberOfLaptop < 0) {
        return "Negative value doesn't exists";
    }
    else {
        //The price of every Clock=50, phone=100, laptop=500
        var phonePrice = numberOfPhone * 100;
        var clockPrice = numberOfClock * 50;
        var laptopPrice = numberOfLaptop * 500;

        var total = clockPrice + phonePrice + laptopPrice;
        return total;
    }
}





// Problem Solving 3
function hotelCost(day) {
    if (day < 0) {
        return "Negative value doesn't exists";
    } 
    else {
        if (day <= 10) {
            // If there are 10 days then the hotel rent is 100
            var hotelRent = day * 100;
            return hotelRent;
        }
        else if (day <= 20) {
            // If there are 20 days then the hotel rent is 80
            var remainingDay = day - 10;
            var preTenDayRent = 10 * 100;
            var hotelRent = remainingDay * 80;
            var totalRent = preTenDayRent + hotelRent;
            return totalRent;

        }
        else {
            // If it is more than 20 days then hotel rent is 50
            var remainingDay = day - 20;
            var firstTenDayRent = 10 * 100;
            var secondTenDayRent = 10 * 80;
            var hotelRent = remainingDay * 50;
            var totalRent = firstTenDayRent + secondTenDayRent + hotelRent;
            return totalRent;

        }
    }
}






// Problem Solving 4
var arr = ['Jhankar Mahmub', 'Tamim Sahriar Subeen', 'Abu Nasim Lomani', 'Tomalika Bristy'];
function megaFriend([]) {
    var max = arr[0];
    for (var i = 0; i < arr.length; i++) {
        var element = arr[i];
        var elementLength = element.length;
        if (elementLength > max.length) {
            max = element;
            return max;
        }

    }
}