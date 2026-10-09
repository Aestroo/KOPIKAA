/* ============================================================
   DATA SITUS - edit di sini, halaman akan ikut berubah otomatis.
   Tidak perlu menyentuh file HTML.
   ============================================================ */
window.DATA = {

    /* Daftar kopi (halaman Produk + tabel perbandingan) */
    kopi: [
        {
            nama: "Gayo",
            judul: "Gayo, Aceh Tengah",
            deskripsi: "Bersih dan seimbang. Pas untuk pemula.",
            gambar: "img/gayo.jpg",
            alt: "Biji kopi Gayo",
            spek: [
                ["sangrai", "medium"],
                ["ketinggian", "1.400 mdpl"],
                ["rasa", "coklat, karamel"],
                ["asam", "rendah"]
            ],
            cocok: "Pemula dan harian",
            seduh: "V60, French press",
            karakter: "Seimbang"
        },
        {
            nama: "Toraja",
            judul: "Toraja, Sulawesi Selatan",
            deskripsi: "Tebal dan dalam, beraroma rempah dan kakao.",
            gambar: "img/toraja.jpg",
            alt: "Biji kopi Toraja",
            spek: [
                ["sangrai", "medium-dark"],
                ["ketinggian", "1.600 mdpl"],
                ["rasa", "kakao, rempah"],
                ["asam", "rendah"]
            ],
            cocok: "Penyuka kopi pekat",
            seduh: "Espresso, moka pot",
            karakter: "Tebal, gelap"
        },
        {
            nama: "Kintamani",
            judul: "Kintamani, Bali",
            deskripsi: "Segar dan cerah dengan sentuhan sitrus.",
            gambar: "img/kintamani.jpg",
            alt: "Biji kopi Kintamani",
            spek: [
                ["sangrai", "light-medium"],
                ["ketinggian", "1.200 mdpl"],
                ["rasa", "sitrus, madu"],
                ["asam", "tinggi"]
            ],
            cocok: "Penyuka rasa segar",
            seduh: "V60, cold brew",
            karakter: "Cerah, asam"
        }
    ],

    /* Paket langganan. harga dalam rupiah (angka saja). */
    paket: [
        {
            nama: "Santai",
            harga: 89000,
            deskripsi: "Untuk peminum sesekali.",
            fitur: ["250 gram kopi", "1 jenis biji", "Ongkir gratis"],
            populer: false
        },
        {
            nama: "Harian",
            harga: 159000,
            deskripsi: "Satu cangkir tiap pagi.",
            fitur: ["500 gram kopi", "2 jenis biji", "Giling sesuai alat"],
            populer: true
        },
        {
            nama: "Keluarga",
            harga: 279000,
            deskripsi: "Untuk rumah atau kantor kecil.",
            fitur: ["1 kg kopi", "3 jenis biji", "Giling sesuai alat"],
            populer: false
        }
    ],

    /* Proyek di halaman Portofolio */
    proyek: [
        {
            judul: "House blend Kopi Senja",
            deskripsi: "Racikan Gayo dan Toraja yang dibuat khusus untuk satu kedai di Bandung.",
            gambar: "img/cafe.jpg",
            alt: "Racikan kopi Kopi Senja di meja kedai",
            spek: [["jenis", "kolaborasi kafe"], ["volume", "25 kg / bulan"], ["tahun", "2025"]]
        },
        {
            judul: "Pantry kopi Studio Arah",
            deskripsi: "Langganan 1 kg per bulan untuk 30 karyawan, digiling untuk mesin kantor.",
            gambar: "img/kantor.jpg",
            alt: "Pantry kopi di kantor Studio Arah",
            spek: [["jenis", "langganan kantor"], ["volume", "1 kg / bulan"], ["tahun", "2025"]]
        },
        {
            judul: "Workshop seduh manual",
            deskripsi: "Sesi mencicipi dan belajar V60 bersama komunitas, lengkap dengan kopi Kintamani.",
            gambar: "img/event.jpg",
            alt: "Peserta workshop seduh manual V60",
            spek: [["jenis", "acara"], ["peserta", "60 orang"], ["tahun", "2026"]]
        },
        {
            judul: "Paket hadiah pernikahan",
            deskripsi: "Kemasan khusus dengan kartu ucapan untuk suvenir tamu undangan.",
            gambar: "img/wedding.jpg",
            alt: "Paket kopi hadiah pernikahan dengan kartu ucapan",
            spek: [["jenis", "pesanan khusus"], ["jumlah", "150 kemasan"], ["tahun", "2026"]]
        },
        {
            judul: "Batch spesial Kintamani",
            deskripsi: "Sangrai terbatas dari satu kebun, habis terjual dalam tiga hari.",
            gambar: "img/batch.jpg",
            alt: "Biji kopi Kintamani edisi terbatas",
            spek: [["jenis", "edisi terbatas"], ["volume", "40 kg"], ["tahun", "2026"]]
        },
        {
            judul: "Kedai kopi kampus",
            deskripsi: "Pasokan rutin untuk kedai mahasiswa, dengan pelatihan seduh untuk baristanya.",
            gambar: "img/campus.jpg",
            alt: "Barista di kedai kopi kampus",
            spek: [["jenis", "kolaborasi kedai"], ["volume", "15 kg / bulan"], ["tahun", "2025"]]
        }
    ],

    /* Pertanyaan yang sering muncul (halaman Kontak) */
    faq: [
        {
            tanya: "Apakah bisa berhenti langganan kapan saja?",
            jawab: "Bisa. Tidak ada kontrak dan tidak ada biaya pembatalan."
        },
        {
            tanya: "Berapa lama kopi sampai?",
            jawab: "Biasanya 2 sampai 4 hari setelah disangrai, tergantung kotamu."
        },
        {
            tanya: "Bagaimana cara menyimpan kopinya?",
            jawab: "Simpan di wadah tertutup, jauh dari panas dan cahaya. Habiskan dalam 4 minggu agar aromanya terbaik."
        },
        {
            tanya: "Bisa ganti jenis kopi tiap bulan?",
            jawab: "Bisa. Ubah pilihanmu paling lambat 3 hari sebelum tanggal sangrai."
        }
    ]
};
