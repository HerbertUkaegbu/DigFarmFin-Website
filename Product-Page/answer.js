var expiryMsg; // Message displayed to users
var today;     // Todays's date
var elEnds;    //The element that shows the message about the offer ending

function offerExpires(today) {
    var weekFromToday, day, date, month, year, dayNames, monthNames;

    weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);

    dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Auguest', 'September', 'October', 'November', 'December'];

    day = dayNames[weekFromToday.getDay()];
    date = weekFromToday.getDate();
    month = monthNames[weekFromToday.getMonth()];
    year = weekFromToday.getFullYear();

    expiryMsg = 'Offer expires next ';
    expiryMsg += day + '(' + date + ' ' + month + ' ' + year + ')';
    return expiryMsg;
}

today = new Date();                          // Put today's date in variable
elEnds = document.getElementById('expired'); // Get the offerEnds element
elEnds.innerHTML = offerExpires(today);      // Add the expiry message