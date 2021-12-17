let searchButton = document.querySelector("#search")

searchButton.addEventListener("click", ()=> {
    console.log("button pressed")
    sendApiRequest()
})


async function sendApiRequest (){
    let API_KEY = "C5YtUXWbQkJc0VigSaFvz0gJaYZdQ4enbuTXUBlz"
    let response = await fetch (`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`);
    console.log(response)
    let data = await response.json()
    console.log(data)
    useApiData(data)
}


function useApiData (data) {

    document.querySelector("#content1").innerHTML += data.title

    document.querySelector("#content2").innerHTML += data.date

    document.querySelector("#content3").innerHTML += data.explanation

    document.querySelector("#content4").innerHTML += `<img src="${data.url}">`

    document.querySelector("body").style.backgroundColor = "black";

    document.querySelector("#content1").style.zIndex = "10";
    document.querySelector("#content1").style.textAlign = "center";
    document.querySelector("#content1").style.fontSize = "30px";
    document.querySelector("#content1").style.fontWeight = "bolder";
    document.querySelector("#content1").style.color = "white";

    document.querySelector("#content2").style.zIndex = "10";
    document.querySelector("#content2").style.textAlign = "center";
    document.querySelector("#content2").style.fontWeight = "bold";
    document.querySelector("#content2").style.fontSize = "20px";
    document.querySelector("#content2").style.color = "white";

    document.querySelector("#content3").style.zIndex = "10";
    document.querySelector("#content3").style.textAlign = "center";
    document.querySelector("#content3").style.color = "white";

    document.querySelector("#content4").style.width = "300px";
    document.querySelector("#content4").style.height = "300px";


}

const menuToggle = document.querySelector('.toggle')
          const showcase = document.querySelector('.showcase')

            menuToggle.addEventListener('click', () => {
                menuToggle.classList.toggle('active')
                showcase.classList.toggle('active')
        })







