function FB()
{
    window.open("https://www.facebook.com/");
}

function Insta()
{
    window.open("https://www.instagram.com/");
}

function IN()
{
    window.open("https://in.linkedin.com/");
}

function Tweet()
{
    window.open("https://www.twitter.com/?lang=en");
}

function YT()
{
    window.open("https://www.youtube.com/");
}

function addUser()
{
    player1_name = document.getElementById("player1_name").value;
    player2_name = document.getElementById("player2_name").value;
    localStorage.setItem("player1_name", player1_name);
    localStorage.setItem("player2_name", player2_name);
    window.location="Play.html";
}