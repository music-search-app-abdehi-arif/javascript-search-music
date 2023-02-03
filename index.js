const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const resultsDiv = document.getElementById("results");

searchButton.addEventListener("click", function () {
  const searchTerm = searchInput.value;

  fetch(`https://api.example.com/music?q=${searchTerm}`)
    .then((response) => response.json())
    .then((data) => {
      resultsDiv.innerHTML = "";

      data.forEach((item) => {
        const title = item.title;
        const artist = item.artist;

        resultsDiv.innerHTML += `<p>${title} by ${artist}</p>`;
      });
    });
});
