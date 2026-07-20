// ================================
// Dark Mode Toggle
// ================================

const darkModeBtn = document.getElementById("darkModeBtn");

darkModeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        darkModeBtn.textContent = "☀️";
    } else {
        darkModeBtn.textContent = "🌙";
    }

});

// ================================
// Fetch Random Joke API
// ================================

const jokeBtn = document.getElementById("jokeBtn");
const joke = document.getElementById("joke");

jokeBtn.addEventListener("click", function () {

    joke.innerHTML = "Loading...";

    fetch("https://official-joke-api.appspot.com/random_joke")

        .then(function (response) {
            return response.json();
        })

        .then(function (data) {

            joke.innerHTML =
                "<strong>" + data.setup + "</strong><br><br>" +
                data.punchline;

        })

        .catch(function () {

            joke.innerHTML =
                "Sorry! Unable to load joke. Please try again.";

        });

});

// ================================
// Console Message
// ================================

console.log("Portfolio Website Loaded Successfully!");
