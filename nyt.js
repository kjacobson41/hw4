// "page load" event handler
$(function() {
  let apiKey = "b605cf2415ced5685c4050b3e1892032:2:54552145"; // don't steal it please
  let url = "https://api.nytimes.com/svc/movies/v2/reviews/picks.json?api-key=" + apiKey;
  $.get(url, function(data) {
    $(".row-2").empty();
    for (let i=0; i<data.results.length; i++) {
      let movie = data.results[i];
      let html = '<div class="col-12">';
      html = html + '<div class="card">';
      html = html + '<img class="card-img-top" src="' + movie.multimedia.src + '">';
      html = html + '<div class="card-body">';
      html = html + '<h4 class="card-title">' + movie.display_title + '</h4>';
      html = html + '<p class="card-text">' + movie.summary_short + '</p>';
      html = html + '</div></div></div>';
      $(".row-2").append(html);
    }
    $(".row-2").fadeIn(2000);
  });
});
