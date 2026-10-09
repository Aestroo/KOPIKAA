/* Menampilkan data dari data.js ke halaman.
   Setiap elemen dengan atribut data-render="..." akan diisi otomatis. */
(function () {
    "use strict";
    var D = window.DATA;
    if (!D) { return; }

    /* cegah karakter khusus merusak HTML */
    function esc(s) {
        return String(s).replace(/[&<>"']/g, function (c) {
            return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
        });
    }

    /* 89000 -> "Rp89rb" */
    function rupiah(n) {
        if (n >= 1000) {
            return "Rp" + String(n / 1000).replace(".", ",") + "rb";
        }
        return "Rp" + n;
    }

    function specList(rows) {
        return '<ul class="spec">' + rows.map(function (r) {
            return "<li>" + esc(r[0]) + "<b>" + esc(r[1]) + "</b></li>";
        }).join("") + "</ul>";
    }

    var RENDER = {
        kopi: function () {
            return D.kopi.map(function (k) {
                return '<article class="card">' +
                    '<img class="thumb" src="' + esc(k.gambar) + '" alt="' + esc(k.alt) + '">' +
                    "<h3>" + esc(k.judul) + "</h3>" +
                    "<p>" + esc(k.deskripsi) + "</p>" +
                    specList(k.spek) +
                    '<a class="btn ghost" href="kontak.html">Pesan ' + esc(k.nama) + "</a>" +
                    "</article>";
            }).join("");
        },

        perbandingan: function () {
            var head = "<tr><th>kopi</th><th>cocok untuk</th><th>seduh terbaik</th><th>karakter</th></tr>";
            var rows = D.kopi.map(function (k) {
                return "<tr><td>" + esc(k.nama) + "</td><td>" + esc(k.cocok) + "</td><td>" +
                    esc(k.seduh) + "</td><td>" + esc(k.karakter) + "</td></tr>";
            }).join("");
            return head + rows;
        },

        paket: function () {
            return D.paket.map(function (p) {
                return '<div class="card plan' + (p.populer ? " hot" : "") + '">' +
                    (p.populer ? '<span class="tag" style="margin-bottom:12px">Paling populer</span>' : "") +
                    "<h3>" + esc(p.nama) + "</h3>" +
                    '<div class="price">' + rupiah(p.harga) + "<small> /bulan</small></div>" +
                    "<p>" + esc(p.deskripsi) + "</p>" +
                    "<ul>" + p.fitur.map(function (f) { return "<li>" + esc(f) + "</li>"; }).join("") + "</ul>" +
                    '<a class="btn' + (p.populer ? "" : " ghost") + '" href="kontak.html?paket=' +
                    encodeURIComponent(p.nama) + '">Pilih ' + esc(p.nama) + "</a>" +
                    "</div>";
            }).join("");
        },

        proyek: function () {
            return D.proyek.map(function (p) {
                return '<article class="card">' +
                    '<img class="thumb" src="' + esc(p.gambar) + '" alt="' + esc(p.alt) + '">' +
                    "<h3>" + esc(p.judul) + "</h3>" +
                    "<p>" + esc(p.deskripsi) + "</p>" +
                    specList(p.spek) +
                    "</article>";
            }).join("");
        },

        faq: function () {
            return D.faq.map(function (f) {
                return "<details><summary>" + esc(f.tanya) + "</summary><p>" + esc(f.jawab) + "</p></details>";
            }).join("");
        },

        /* pilihan di formulir kontak: semua paket + "Hanya bertanya" */
        "paket-opsi": function () {
            return D.paket.map(function (p) {
                return "<option>" + esc(p.nama) + "</option>";
            }).join("") + "<option>Hanya bertanya</option>";
        }
    };

    document.querySelectorAll("[data-render]").forEach(function (node) {
        var fn = RENDER[node.getAttribute("data-render")];
        if (fn) { node.innerHTML = fn(); }
    });

    /* kontak.html?paket=Harian -> pilihan paket terisi otomatis */
    var pilih = document.getElementById("p");
    var dariLink = new URLSearchParams(window.location.search).get("paket");
    if (pilih && dariLink) {
        Array.prototype.forEach.call(pilih.options, function (o) {
            if (o.text === dariLink) { pilih.value = o.value || o.text; }
        });
    }
})();
