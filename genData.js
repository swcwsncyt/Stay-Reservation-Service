var seed = () => {
  var genMaxGuest = () => {
    var guest = Math.floor(Math.random() * 4);
    return guest ? guest : guest + 1;
  }
  
  var genValidDay = () => {
    var day = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
    return day[Math.floor(Math.random() * 7)]
  }

  var genPrice = () => {
    var num = Math.floor((Math.random() * 400));
    if (num < 20) {
      num =+ 20;
    }
    var decimal = Math.random().toString().slice(2,4);
    var numStr = `${num.toString()}.${decimal}`
    return Number(numStr);
  }

  var genFee = () => {
    var num = Math.floor((Math.random() * 20));
    if (num < 5) {
      num += 5;
    }
    var decimal = Math.random().toString().slice(2,4);
    var numStr = `${num.toString()}.${decimal}`
    return Number(numStr);
  }

  var genStar = () => {
    var num = [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5];
    return num[Math.floor(Math.random() * 9)];
  }

  var genReview = () => {
    var review = Math.floor(Math.random() * 10000);
    if (review < 1) {
      review += 1;
    }
    return review;
  }

  var genDate = () => {
    var arr = [];
    for (var i = 0; i < 5; i++) {
      var month = [10, 11, 12];
      var day = Math.floor(Math.random() * 25);
      var dayStr = "";
      if (day < 1){
        day += 1;
      }
      if (day < 10) {
        dayStr += `0${day}`
      } else {
        dayStr = day.toString();
      }
      var str = `2019-${month[Math.floor(Math.random() * 3)]}-${dayStr}`
      if (!arr.includes(str)) {
        arr.push(str);
      } else {
        i--;
      }
    }
    return arr;
  }

  var listingStr = "";
  var bookingStr = "";
  for (var i = 0; i < 100; i++) {
    var guest = genMaxGuest();
    var price = genPrice();
    var cleanFee = genFee();
    var serviceFee = genFee();
    var review = genReview();
    var star = genStar();
    var effectiveDate = "2019-10-01"
    var validDay = genValidDay();
    listingStr += `INSERT INTO listing (maxGuest, price, cleanFee, serviceFee, reviews, star, effectiveDate, validDay) VALUES (${guest}, ${price}, ${cleanFee}, ${serviceFee}, ${review}, ${star}, "${effectiveDate}", "${validDay}"); \n`
    var date = genDate();
    for(var r = 0; r < 5; r++) {
      bookingStr += `INSERT INTO booking (listing_id, date) VALUES (${i + 1}, "${date[r]}"); \n`
    }
  }
  return listingStr + bookingStr;
}
