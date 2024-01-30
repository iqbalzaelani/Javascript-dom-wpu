//Latihan disini saya akan menggunakan publik API (omdb api movie)
$.ajax({
    url: 'http://www.omdbapi.com/?apikey=1f3e495&s=Transformers',
    success: results => {
        const movies = results.Search
        let cards = ''
        movies.forEach(m => {
            cards += `<div class="col-md-4 my5">
                        <div class="card">
                            <img src="${m.Poster}" class="card-img-top">
                            <div class="card-body">
                                <h5 class="card-title">${m.Title}</h5>
                                <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
                                <a href="#" class="btn btn-primary" data-toggle="modal" data-target="#movieDetailModal">Lebih Lanjut</a>
                            </div>
                        </div>
                    </div>`
        })
        $('.movie-container').html(cards)
    },
    error: (e) => {
        console.log(e.responseText)
    }
})
//Menggunakan arrow function dan callback
//Menggunakan template literals