$.getJSON("data/pizza.json", function (data) {
  //console.log(data);

  let menu = data.menu;
  //console.log(menu);

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
        '</h4><a href="#" class="btn btn-primary"><i class="bi bi-cart-fill"></i>  Pesan</a></div></div></div>'
    );
  });
});
