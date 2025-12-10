
// HOME SCORE
let homeScore = 0;
let homeScoreEl = document.getElementById("home-score");
console.log(homeScore)

// --- HOME BUTTONS ---
document.getElementById("home-1").addEventListener("click", function() {
    homeScore += 1;
    homeScoreEl.textContent = homeScore;
});

 document.getElementById("home-2").addEventListener("click",
    function(){
        homeScore += 2;
        homeScoreEl.textContent = homeScore;
    }
 )

 document.getElementById("home-3").addEventListener("click",
    function(){
        homeScore+=3;
        homeScoreEl.textContent = homeScore;
    }
 )

 // GUEST SCORE
let guestScore = 0;
let guestScoreEl = document.getElementById("guest-score");

// --- GUEST BUTTONS ---
document.getElementById("guest-1").addEventListener("click", function() {
    guestScore += 1;
    guestScoreEl.textContent = guestScore;
});

document.getElementById("guest-2").addEventListener("click", function() {
    guestScore += 2;
    guestScoreEl.textContent = guestScore;
});

document.getElementById("guest-3").addEventListener("click", function() {
    guestScore += 3;
    guestScoreEl.textContent = guestScore;
});