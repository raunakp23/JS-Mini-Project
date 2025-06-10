const enddate = new Date("1 jan, 2025 24:00:00").getTime();
const startdate = new Date().getTime();

let x = setInterval (function updatetimer() {
    const currentdate = new Date().getTime();

    const distancecovered = currentdate-startdate;
    const distancepending = enddate -currentdate;

    //calculate days, hrs,mins, secs
    // 1 day = 24*60*60*1000 ms
    const onedayinMillis = (24*60*60*1000);
    const onehoursinMillis = (60*60*1000);
    const oneminutesinMillis = (60*1000);
    const onesecondinMillis = (1000);

    const days = Math.floor(distancepending / (onedayinMillis));
    const hours = Math.floor((distancepending % (onedayinMillis) / onehoursinMillis));
    const minutes = Math.floor((distancepending % (onehoursinMillis)) / (oneminutesinMillis));
    const seconds = Math.floor((distancepending % (oneminutesinMillis)) / (onesecondinMillis))

    //populate in UI

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    // calculate width percentage for progress bar
    const totaldistance = enddate - startdate;
    const percentagedistance = (distancecovered/totaldistance) * 100;

    //set width for progress bar
    document.getElementById("progress-bar").style.width = percentagedistance + "%";

    if(distancepending < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "EXPIRED";
        document.getElementById("progress-bar").style.width = "100%";

    }


}, 1000);