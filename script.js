document.addEventListener('click', function() {
    document.body.style.backgroundColor = '#FBFCEF';
 
});
 
const searchBarContainerEl = document.querySelector(".search-bar-container")
 
const magnifierEl = document.querySelector(".magnifier");
 
magnifierEl.addEventListener('click', () => {
  searchBarContainerEl.classList.toggle('active');
});
