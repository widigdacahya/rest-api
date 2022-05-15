// when clicked, ask to api
$("#search-button").on("click", function () {
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
                                <a href="https://www.google.com/search?q=` +
              movie.Title +
              `" class="btn btn-dark" target="_blank"><i class="bi bi-info-circle-fill"></i> See More</a>
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
});
