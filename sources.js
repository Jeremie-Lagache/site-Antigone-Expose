timeLeft = 10;

function countdown() {
	timeLeft--;
	document.getElementById("seconds").innerHTML = String( timeLeft );
	if (timeLeft > 0) {
		setTimeout(countdown, 1000);
	}
    if (timeLeft === 0) {
        document.getElementById('countdown').style.display = "none";
        document.getElementById('sources-container').style.display = "flex";
		document.querySelector('body').style.backgroundImage = "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)"
    }
};

setTimeout(countdown, 1000);

let sources = document.getElementById('sources-container');

sources.addEventListener('click', () => {
	document.location.href="fin.html";
})