const searchForm = document.getElementById('search-form')
const searchBox = document.getElementById('search-box')
const searchResult = document.getElementById('search-result')
const btn = document.getElementById('btn')
const showMoreBtn = document.getElementById('show-more-btn')

const API = '_OAbLLzk6v5Y7RCynCM9LI7ouAzVdvWkrqg4uFxW7yU'

let keyword = ''
let page = 1

async function searchImages(){

    keyword=searchBox.value
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${API}`

    const response = await fetch(url) 
    const data = await response.json()

    const results = data.results
    // console.log(results)
    results.map((results)=>{
        const img = document.createElement('img')
        img.src = results.urls.small
        img.classList.add('my-image');
        const imgLink = document.createElement('a')
        imgLink.href = results.links.html
        imgLink.target='_blanck'

        imgLink.append(img)
        searchResult.append(imgLink)
    })
}
function clearSearchResults() {
     searchResult.innerHTML = '';
}

searchForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    page= 1;
    clearSearchResults();
    searchImages()
 

})
showMoreBtn.addEventListener('click', () => {
    page += 1;
    searchImages();
});