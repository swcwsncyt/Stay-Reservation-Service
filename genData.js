const seed = () => {
  const genMaxGuest = () => {
    const guest = Math.floor(Math.random() * 4);
    return guest || guest + 1;
  };

  const genPrice = () => {
    let num = Math.floor((Math.random() * 400));
    if (num < 20) {
      num = +20;
    }
    const decimal = Math.random().toString().slice(2, 4);
    const numStr = `${num.toString()}.${decimal}`;
    return Number(numStr);
  };

  const genFee = () => {
    let num = Math.floor((Math.random() * 20));
    if (num < 5) {
      num += 5;
    }
    const decimal = Math.random().toString().slice(2, 4);
    const numStr = `${num.toString()}.${decimal}`;
    return Number(numStr);
  };

  const genStar = () => {
    const num = [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5];
    return num[Math.floor(Math.random() * 9)];
  };

  const genReview = () => {
    const review = Math.ceil(Math.random() * 10000);
    return review;
  };

  const genDate = () => {
    const arr = [];
    for (let i = 0; i < 5; i++) {
      const month = [10, 11, 12];
      const day = Math.ceil(Math.random() * 25);
      let dayStr = '';
      if (day < 10) {
        dayStr += `0${day}`;
      } else {
        dayStr = day.toString();
      }
      const str = `2019-${month[Math.floor(Math.random() * 3)]}-${dayStr}`;
      if (!arr.includes(str)) {
        arr.push(str);
      } else {
        i--;
      }
    }
    return arr;
  };

  let listingStr = '';
  let bookingStr = '';
  for (let i = 0; i < 100; i++) {
    const guest = genMaxGuest();
    const price = genPrice();
    const cleanFee = genFee();
    const serviceFee = genFee();
    const review = genReview();
    const star = genStar();
    listingStr += `INSERT INTO listing (maxGuest, price, cleanFee, serviceFee, reviews, star) VALUES (${guest}, ${price}, ${cleanFee}, ${serviceFee}, ${review}, ${star}); \n`;
    const date = genDate();
    for (let r = 0; r < 5; r++) {
      bookingStr += `INSERT INTO booking (listing_id, date) VALUES (${i + 1}, "${date[r]}"); \n`;
    }
  }
  return listingStr + bookingStr;
};
seed();
