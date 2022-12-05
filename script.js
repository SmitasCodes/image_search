const main = document.querySelector("#main");
function fetchImages() {
    main.innerHTML = "";
    event.preventDefault();
    let input = document.querySelector("#input").value;
    let url = "https://api.unsplash.com/search/photos?page=2&per_page=28&query=";
    const clientID = "&client_id=jmzALUdqPjI35eGjTFB6eKSIFrKD1tP_ZJgRnq3w59M";

    if (input.length <= 0) {
        alert("Please enter what kind of images you searching for!")
    } else {
        let img = document.createElement('img');
        fetch(url + input + clientID, {
            method: 'GET'
        })
            .then((response) => response.json())
            .then((images) => {
                for (let i = 0; i < images.results.length; i++) {
                    let img = document.createElement("img");
                    img.src = images.results[i].urls.small;
                    main.appendChild(img)
                }
            })
    }
}