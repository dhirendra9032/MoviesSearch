async function moviesInfo() {
    let movieName = document.getElementById('inp').value;
    let div = document.getElementById('cont');
   


        try {
                res = await fetch(" http://www.omdbapi.com/?i=tt3896198&apikey=74494564");
                let data = await res.json();
                console.log(data);
                if(movieName==data.Title){
                    let title = document.createElement("h1");
                    title.innerHTML = data.Title;
                    title.style.padding="20px"

                    let poster = document.createElement('img');
                    poster.src = data.Poster;

                    let date = document.createElement('h3');
                    date.innerHTML = `Release Date : ${data.Released}`;
                    date.style.padding = "5px";
                    date.style.color = "#fff";

                    let rating = document.createElement('h3');
                    rating.innerHTML = `IMDB Rating: ${data.imdbRating}`;
                    rating.style.padding = "5px"
                    rating.style.color = "#fff";


                    div.append(title,poster, date, rating);
                    
                   
                }else{
                    console.log("Not Available");
                }
            } catch (err) {
                console.log("err:", err);
            }

}
