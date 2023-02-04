const form = document.getElementById("search-form");
const search = document.getElementById("search");
const result = document.getElementById("result");
const more = document.getElementById("more");

async function searchSongs(searchTerm) {
  const apiURL = `https://api.lyrics.ovh/suggest/${searchTerm}`;
  const res = await fetch(apiURL);
  const data = await res.json();
  // console.log(data);
  dataListOfSongs(data);
}

function dataListOfSongs(dataList) {
  result.innerHTML = `
  <ul class="songs">
    ${dataList.data
      .map(
        (song) => `<li>
    <span><strong>${song.artist.name}</strong> - ${song.title}</span>
  </li>`
      )
      .join("")}
  </ul>
 `;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const searchTermInput = search.value.trim();

  if (!searchTermInput) {
    alert("Please type in a search term");
  } else {
    searchSongs(searchTermInput);
  }
});
