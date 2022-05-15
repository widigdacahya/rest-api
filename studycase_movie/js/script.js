function toSearchMovie() {
  //clean first
  $("#movie-list").html("");

  //$.getJSON("http://www.omdbapi.com/?apikey=[yourkey]&")
  //above code has true form like below
  $.ajax({
    url: "http://www.omdbapi.com",
    type: "get",
    dataType: "json",
    data: {
      apikey: "9534a17b",
      s: $("#search-input").val(),
    },
    success: function (result) {
      //console.log(result);
      if (result.Response == "True") {
        let movies = result.Search;
        //console.log(movies);

        $.each(movies, function (i, movie) {
          $("#movie-list").append(
            `
                <div class="col-md-4">
                    <div class="card mb-3" >
                        <img src="` +
              movie.Poster +
              `" class="card-img-top" alt="poster photo">
                            <div class="card-body">
                                <h5 class="card-title">` +
              movie.Title +
              `</h5>
                                <h6 class="card-subtitle mb-2 text-muted">` +
              movie.Year +
              `</h6>
              <div class="row">
                <div class="col d-grid gap-2">
                    <a href="#" class="btn btn-dark see-detail-movie" data-bs-toggle="modal" data-bs-target="#movieModal" data-id="` +
              movie.imdbID +
              `"><i class="bi bi-info-circle-fill"></i> Detail</a>
                </div>
                <div class="col d-grid gap-2">
                    <a href="https://www.google.com/search?q=` +
              movie.Title +
              `" class="btn btn-dark" target="_blank"><i class="bi bi-google"></i> Google</a>
                </div>
              </div>
                                
                                
                            </div>
                    </div>
                </div>
            `
          );
        });

        //after search done, clear text on search bar
        $("#search-input").val("");
      } else {
        //from rspeonse
        //$("#movie-list").html("<h1 class='text-center'>" + result.Error + "</h1>");

        //message by ourself
        //$("#movie-list").html("<h1 class='text-center'>Not Found😅</h1>");

        //writing like html,using backtick
        $("#movie-list").html(`
            <div class="col">
                <h1 class='text-center'>Not Found😅</h1>
            </div>            
        `);
      }
    },
  });
}

// when clicked, ask to api
$("#search-button").on("click", function () {
  if ($("#search-input").val() != "") {
    toSearchMovie();
  } else {
    $("#movie-list").html("");
  }
});

//when enter pressed
$("#search-input").on("keyup", function (event) {
  if (event.keyCode === 13 && $("#search-input").val() != "") {
    toSearchMovie();
  }
  if (event.keyCode === 13 && $("#search-input").val() == "") {
    $("#movie-list").html("");
  }
});

// for modal things
$("#movie-list").on("click", ".see-detail-movie", function () {
  console.log($(this).data("id"));
});
