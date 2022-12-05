(function () {
  const searchForm = document.querySelector(".search-form");
  const searchInput = document.querySelector(".search-content");
  const searchBox = document.querySelector("#search-box");
  const listContainer = document.querySelector(".list-container")

  let searchAbortController = new AbortController();

  searchInput.addEventListener("input", e => {
    const value = e.target.value;
    searchBox.innerHTML = "";

    if (value.length <= 2 ) return;

    searchAbortController.abort();
    searchAbortController = new AbortController();

    fetch(`${location.origin}/search?addr=${value}`, { signal: searchAbortController.signal })
      .then(response => response.json())
      .then(data => {
        data.forEach(addr => {
          const option = document.createElement("option");
          option.value = addr;
          searchBox.insertAdjacentElement("beforeend", option);
        })
      })
      .catch(console.warn);
  });

  let listAbortController = new AbortController();

  searchForm.addEventListener("submit", e => {
    e.preventDefault();
    listContainer.innerHTML = "";
    listAbortController.abort();
    listAbortController = new AbortController();
    const value = e.target.elements.content.value;
    console.log(value);

    fetch(`${location.origin}/search?addr=${value}`, { signal: listAbortController.signal })
      .then(response => response.json())
      .then(data => {
        const ul = document.createElement("ul")
        data.forEach(addr => {
          const li = document.createElement("li");
          li.textContent = addr;
          ul.insertAdjacentElement("beforeend", li);
        })
        listContainer.appendChild(ul);
      })
      .catch(console.warn);
  });

})();