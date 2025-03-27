// fetcht() /*fetch is used to make http request 
// if the request success it will return  response . in response we convert the data to json data it will return 
// a promise 
// */
const API_URL = "https://api.github.com/users/akshayMarch7";

async function getData(){
    try{
        const data = await fetch(API_URL);
        const response = await data.json();
        const image = document.createElement("img");
        image.src = response.avatar_url
        image.height = "200"
        image.width = "200";
        document.body.appendChild(image);

        console.log(response)
    }
    catch(err){
        console.log(err);
    }
}

getData();