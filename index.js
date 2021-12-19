//https://newsapi.org/v2/top-headlines?country=in&apiKey=65a442cf229849a78ab4a21a24fb8a16
let API_KEY = '65a442cf229849a78ab4a21a24fb8a16';
let cards = document.getElementById('cards');
// grab the news container
function load(){
    let source = 'in';
    let cat = document.getElementById('category').value;
    if(cat === undefined){
        cat = 'general';
    }
    console.log("hello user , checking console....wont help but following me will help. hehe");
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=${source}&category=${cat}&apiKey=${API_KEY}`, true);
//what to do when response is ready
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        // console.log(articles);
        let newHtml = "";
        articles.forEach(function (element, index) {
            let news =
                `
    <div class="card mb-3">
      <img class="card-img-top" src="${element["urlToImage"]}" width="auto" height="400em" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">${element["title"]}</h5>
        <p class="card-text">${element["content"]}</p>
        <p class="card-text"><small class="text-muted">${element["publishedAt"]}</small></p>
        <a href="${element["url"] }" target = "_blank" class="btn btn-dark">Read more</a>
      </div>
    </div>
  </div>



`;
newHtml += news; 
        });
cards.innerHTML = newHtml;
}
    else {
        console.log("some error occured");
    }
}
xhr.send();
}
var clockElement = document.getElementById('clock');

function clock() {
    clockElement.textContent = new Date().toString();
}
setInterval(clock, 1000);
load();