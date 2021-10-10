/*let url = "https://api.nasa.gov/planetary/apod?api_key=ToCpyJhAnXU1y9pI4phfWI8S27Lkn9qnZGqu8LdB";

fetch(url).then(
    function(response){
        console.log(response);
        return response.json();
    }
).then(
    function(json){
        
        let explain = document.createElement("h1");
        
        explain.innerHTML = json.explanation;
        
        explain.style["font-family"] = "Garamond";
        explain.style["color"] = "black";
       
        document.body.appendChild(explain);
        
        console.log(json);
    }
) 

const menuToggle = document.querySelector('.toggle');
      const showcase = document.querySelector('.showcase');

      menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        showcase.classList.toggle('active');
      })*/

      const menuToggle = document.querySelector('.toggle')
          const showcase = document.querySelector('.showcase')

            menuToggle.addEventListener('click', () => {
                menuToggle.classList.toggle('active')
                showcase.classList.toggle('active')
        })