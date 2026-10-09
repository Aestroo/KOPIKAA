/* Animasi halaman:
   1. kartu dan bagian muncul bertahap saat di-scroll
   2. angka statistik menghitung naik dari 0
   Animasi CSS lain (hero masuk, cangkir melayang) ada di style.css.
   Semua dimatikan otomatis kalau pengunjung memilih "kurangi gerakan". */
(function () {
    "use strict";

    var kurangiGerak = window.matchMedia &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    document.documentElement.classList.add("js");

    /* ---------- 1. muncul saat di-scroll ---------- */
    var target = document.querySelectorAll(
        "main .head, main .card, main .stats, main .tl li, main details, main .cta"
    );

    Array.prototype.forEach.call(target, function (el) {
        el.classList.add("reveal");
        /* jeda bertahap antar saudara dalam satu baris (maks 3 kolom) */
        var kakak = 0, s = el.previousElementSibling;
        while (s) {
            if (s.classList.contains("reveal")) { kakak++; }
            s = s.previousElementSibling;
        }
        el.style.setProperty("--d", (kakak % 3) * 0.09 + "s");
    });

    /* ---------- 2. hitung naik ---------- */
    function baca(teks) {
        var m = teks.match(/^(\d[\d.,]*)([\s\S]*)$/);
        if (!m) { return null; }
        var raw = m[1], sufiks = m[2], nilai, desimal = 0, ribuan = false;
        if (raw.indexOf(",") > -1) {
            var b = raw.split(",");
            nilai = parseFloat(b[0].replace(/\./g, "") + "." + b[1]);
            desimal = b[1].length;
            ribuan = b[0].indexOf(".") > -1;
        } else if (/^\d{1,3}(\.\d{3})+$/.test(raw)) {
            nilai = parseInt(raw.replace(/\./g, ""), 10);
            ribuan = true;
        } else {
            nilai = parseFloat(raw);
        }
        if (isNaN(nilai)) { return null; }
        /* tahun (2023 dst) tidak perlu dihitung naik */
        if (/^\d{4}$/.test(raw) && nilai >= 1900 && nilai <= 2100) { return null; }
        return { nilai: nilai, desimal: desimal, ribuan: ribuan, sufiks: sufiks };
    }

    function tulis(n, p) {
        var b = n.toFixed(p.desimal).split(".");
        if (p.ribuan) { b[0] = b[0].replace(/\B(?=(\d{3})+(?!\d))/g, "."); }
        return b.join(",") + p.sufiks;
    }

    var angka = [];
    Array.prototype.forEach.call(document.querySelectorAll("main .stats b, main .big"), function (el) {
        var asli = el.textContent.trim();
        var p = baca(asli);
        if (!p || p.nilai === 0) { return; }
        angka.push({ el: el, asli: asli, p: p });
        if (!kurangiGerak) { el.textContent = tulis(0, p); }
    });

    function hitung(item) {
        if (kurangiGerak) { item.el.textContent = item.asli; return; }
        var mulai = null, durasi = 1500;
        function langkah(t) {
            if (mulai === null) { mulai = t; }
            var k = Math.min((t - mulai) / durasi, 1);
            var ease = 1 - Math.pow(1 - k, 3);
            if (k < 1) {
                item.el.textContent = tulis(item.p.nilai * ease, item.p);
                requestAnimationFrame(langkah);
            } else {
                item.el.textContent = item.asli; /* nilai akhir persis seperti aslinya */
            }
        }
        requestAnimationFrame(langkah);
    }

    /* ---------- pemicu saat terlihat ---------- */
    function tampil(el) {
        el.classList.add("in");
        angka.forEach(function (a) {
            if (!a.jalan && (el === a.el || el.contains(a.el))) {
                a.jalan = true;
                hitung(a);
            }
        });
    }

    if (!("IntersectionObserver" in window)) {
        Array.prototype.forEach.call(target, tampil);
        return;
    }

    var io = new IntersectionObserver(function (daftar) {
        daftar.forEach(function (d) {
            if (d.isIntersecting) {
                tampil(d.target);
                io.unobserve(d.target);
            }
        });
    }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });

    Array.prototype.forEach.call(target, function (el) { io.observe(el); });
})();
