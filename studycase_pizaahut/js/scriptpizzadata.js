function allMenu() {
  $.getJSON("data/pizza.json", function (data) {
    //console.log(data);

    let menu = data.menu;
    //console.log(menu);

    //html tag here will replaced everthing exsited on the page
    $("#daftar-menu").html("");

    //like foreach in php, but it jquery
    $.each(menu, function (i, datamenu) {
      $("#daftar-menu").append(
        '<div class="col-md-4"><div class="card mb-3"><img src="img/menu/' +
          datamenu.gambar +
          '" class="card-img-top"><div class="card-body"><h5 class="card-title">' +
          datamenu.nama +
          '</h5><p class="card-text">' +
          datamenu.deskripsi +
          '</p><h4 class="card-title">Rp. ' +
          datamenu.harga +
          '</h4><a href="#" class="btn btn-warning"><i class="bi bi-cart-fill"></i>  Pesan</a></div></div></div>'
      );
    });
  });
}

allMenu();

$(".nav-link").on("click", function () {
  $(".nav-link").removeClass("active");
  $(this).addClass("active");

  let kategoriFromMenu = $(this).html();
  //console.log(kategoriFromMenu);

  let forKategori = kategoriFromMenu.substring(2);
  //console.log(forKategori);

  //ganti judul
  //karena h1nya di gtml only one, jadi boleh kek gini
  $("h1").html(kategoriFromMenu);

  if (forKategori == "All Menu") {
    allMenu();
    return;
  }

  $.getJSON("data/pizza.json", function (dataresult) {
    //tadi diatas pake append, skearng dengan differet apporach
    let pizzaHereMenu = dataresult.menu;
    let content = "";

    $.each(pizzaHereMenu, function (i, data) {
      if (data.kategori == forKategori.toLowerCase()) {
        content +=
          '<div class="col-md-4"><div class="card mb-3"><img src="img/menu/' +
          data.gambar +
          '" class="card-img-top"><div class="card-body"><h5 class="card-title">' +
          data.nama +
          '</h5><p class="card-text">' +
          data.deskripsi +
          '</p><h4 class="card-title">Rp. ' +
          data.harga +
          '</h4><a href="#" class="btn btn-warning"><i class="bi bi-cart-fill"></i>  Pesan</a></div></div></div>';
      }
    });
    //html tag here will replaced everthing exsited on the page
    $("#daftar-menu").html(content);
  });
});
