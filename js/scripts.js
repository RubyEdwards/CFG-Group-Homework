$(window).scroll(scrollFunction);

function scrollFunction() {
    if ($(window).scrollTop() > 100) {
        $("#go-top-button").show();
    } else {
        $("#go-top-button").hide();
    }
}

function topFunction() {
    $(window).scrollTop(0);
}

function showFootball() {
    document.getElementById("chosenSport").innerText = "football:";
    document.getElementById("fact").innerText = "In 1921 the FA banned women's football. This was only lifted in 1971 - 50 years later!";
}

function showBasketball() {
    document.getElementById("chosenSport").innerText = "basketball:";
    document.getElementById("fact").innerText = "Women's basketball follows mostly the same rules as men's basketball, with the exception that the ball is smaller.";
}

function showHockey() {
    document.getElementById("chosenSport").innerText = "hockey:";
    document.getElementById("fact").innerText = "Zimbabwe won the first ever women's hockey Olympic final in 1980, playing against India.";
}

function showTennis() {
    document.getElementById("chosenSport").innerText = "tennis:";
    document.getElementById("fact").innerText = "In 2007, the prize money for Wimbledon winners became equal for men and women. 1968 was the first ever Wimbledon to offer prize money.";
}

function showRowing() {
    document.getElementById("chosenSport").innerText = "rowing:";
    document.getElementById("fact").innerText = "Women's rowing events debuted at the Olympics in 1976.";
}

function showAthletics() {
    document.getElementById("chosenSport").innerText = "athletics:";
    document.getElementById("fact").innerText = "The number of Olympic women athletes went from 65 at the 1920 Summer Olympics to 331 at the 1936 Summer Olympics.";
}

function showBoxing() {
    document.getElementById("chosenSport").innerText = "boxing:";
    document.getElementById("fact").innerText = "Muhammad Ali's daughter Laila became a prize fighter, as did Joe Frazier's daughter Jacqueline.";
}

function showSwimming() {
    document.getElementById("chosenSport").innerText = "swimming:";
    document.getElementById("fact").innerText = "Pam Morris was the first synchronized swimmer inducted into the International Swimming Hall of Fame in 1965.";
}

function showVolleyball() {
    document.getElementById("chosenSport").innerText = "volleyball:";
    document.getElementById("fact").innerText = "The height of the net for men is 7’ 11.625” while the women’s net height is 7’ 4.25”.";
}

function showBadminton() {
    document.getElementById("chosenSport").innerText = "badminton:";
    document.getElementById("fact").innerText = "In 2006, Saina Nehwal became the first Indian female and the youngest Asian to win a 4-star singles badminton tournament.";
}

function showCycling() {
    document.getElementById("chosenSport").innerText = "cycling:";
    document.getElementById("fact").innerText = "The fastest riders are in Holland, with men averaging 26.92kmh (16.72mph) and women 21.36 km/h (13.27mph).";
}

function showRugby() {
    document.getElementById("chosenSport").innerText = "rugby:";
    document.getElementById("fact").innerText = "In 1887, Emily Valentine became the first female ever recorded to play rugby and score a try during a match. She was only 10 years old, and was asked to play as the team were a man down.";
}

function showCricket() {
    document.getElementById("chosenSport").innerText = "cricket:";
    document.getElementById("fact").innerText = "Eight international teams came together for the first men’s Cricket World Cup in 1975, but  the first Women’s World Cup was played two years earlier, in 1973!";
}

function showReset() {
    document.getElementById("chosenSport").innerText = "";
    document.getElementById("fact").innerText = "";
}