



async function moviesInfo() {
    let movieName = document.getElementById('inp').value;
    let div = document.getElementById('cont');
   
   
      var fechedData=await    fetch(`https://www.omdbapi.com/?s=${movieName}&apikey=74494564`)
           
    let MovieData = await fechedData.json();
    
    let imdbId = MovieData.Search[0].imdbID;

    
        try {
           
           
         res = await fetch(`https://www.omdbapi.com/?i=${imdbId}&apikey=74494564`);
                let data = await res.json();
          
            
          
               
                    let title = document.createElement("h1");
                    title.innerHTML = data.Title;
                    title.style.padding="20px"

                    let poster = document.createElement('img');
                     poster.src = data.Poster;
            
                    let actors = document.createElement('h3');
                    actors.innerHTML = `Actors : ${data.Actors}`;
                    actors.style.padding = "5px";
                    actors.style.color = "#CCFF90";


                    let date = document.createElement('h3');
                    date.innerHTML = `Release Date : ${data.Released}`;
                    date.style.padding = "5px";
                    date.style.color = "#CCFF90";

                    let rating = document.createElement('h3');
                    rating.innerHTML = `IMDB Rating: ${data.imdbRating}`;
                    rating.style.padding = "5px"
                    rating.style.color = "#CCFF90";
            
                   let Genre = document.createElement('h3');
                    Genre.innerHTML = `Genre: ${data.Genre}`;
                    Genre.style.padding = "5px"
                    Genre.style.color = "#CCFF90";
            
                    let language = document.createElement('h3');
                    language.innerHTML = `Language: ${data.Language}`;
                    language.style.padding = "5px"
                     language.style.color = "#CCFF90";
            
                   let recmend = document.createElement('h3');
                    recmend.innerHTML = `Recommended`;
                    recmend.style.padding = "5px"
            recmend.style.color = "#e54304;";
            
           
                
                
            if (+(data.imdbRating) >= 8) {
                        div.append(title,poster,recmend,actors, date, rating,Genre,language);
            } else {
                 div.append(title,poster,actors, date, rating,Genre,language);
                    }
            
                   
                    
                   
               
            } catch (err) {
                let poster = document.createElement('img');
                    poster.src = "https://thumbs.dreamstime.com/b/not-available-red-rubber-stamp-over-white-background-87242466.jpg";
                    poster.style.width = "200px"
                    poster.style.height = "150px";
                    poster.style.marginTop="100px"

                    
                    div.append(poster);
            }

}
