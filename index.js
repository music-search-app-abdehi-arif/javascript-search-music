const formElement = document.getElementById("search-form");
const searchElement = document.getElementById("search");
const resultElement = document.getElementById("result");
const moreElement = document.getElementById("more");

const API_URL_LYRICS_OVH = `https://api.lyrics.ovh/suggest`;

async function searchSongs(searchTerm) {
  const apiURL = `${API_URL_LYRICS_OVH}/${searchTerm}`;
  const response = await fetch(apiURL);
  const result = await response.json();

  renderSongs(result.data);
}

function renderSongs(songs) {
  resultElement.innerHTML = `
  <ul class="songs">
    ${songs
      .map(
        (song) => `
          <li>
            <span><strong>${song.artist.name}</strong> - ${song.title}</span>
          </li>`
      )
      .join("")}
  </ul>
 `;
}

formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  const searchTermInput = searchElement.value.trim();

  if (searchTermInput) {
    searchSongs(searchTermInput);
  }
});
