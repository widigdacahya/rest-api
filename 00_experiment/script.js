function semuaLaporan() {
  $.getJSON("ListLaporan.json", function (data) {
    //console.log(data);

    let daftarLaporan = data.daftar_laporan;
    //console.log(daftarLaporan);

    $("#daftar-laporan-diterima").html("");

    $.each(daftarLaporan, function (i, dataLaporan) {
      $("#daftar-laporan-diterima").append(
        `<tr>
            <th scope="row">` +
          dataLaporan.id_laporan +
          `</th>
            <td>` +
          dataLaporan.status_laporan +
          `</td>
            <td>` +
          dataLaporan.korban +
          `</td>
            <td>` +
          dataLaporan.pelapor +
          `</td>
            <td>` +
          dataLaporan.urgensi +
          `</td>
            <td>` +
          dataLaporan.waktu_lapor +
          `</td>
            <td>` +
          dataLaporan.terakhir_diubah +
          `</td>
            <td class="text-center"><button type="button" class="btn btn-primary see-detail-laporan" data-bs-toggle="modal" data-bs-target="#laporanModal"><i class="bi bi-info-circle-fill"></i> Detail</button></td>
            
        </tr>`
      );
    });
  });
}

semuaLaporan();

// $("#daftar-laporan-diterima").on("click", ".see-detail-laporan", function () {
//   $.getJSON("DetailLaporanIdOne.json", function (data) {
//     console.log(data);
//   });
// });
