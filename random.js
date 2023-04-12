// random.js
document.addEventListener("DOMContentLoaded", function() {
    var postList = document.getElementById("postList");
    var displayedPosts = []; // Array untuk menyimpan postingan yang sudah ditampilkan
    var allPosts = [
        // Daftar semua URL/link postingan acak
        {
            title: "Chord Terakhir - Sufian Suhaimi",
            link: "https://www.chordabcd.com/2022/06/chord-terakhir.html"
        },
        {
            title: "Chord Mencoba Untuk Setia - Adista",
            link: "https://www.chordabcd.com/2022/06/chord-mencoba-untuk-setia.html"
        },
        {
            title: "Chord Cintaku Takkan Berubah - Anie Carera",
            link: "https://www.chordabcd.com/2022/06/chord-cintaku-takkan-berubah.html"
        },
        {
            title: "Chord When I See You Smile - Bad English",
            link: "https://www.chordabcd.com/2022/06/chord-when-i-see-you-smile.html"
        },
        {
            title: "JChord Benciku Sangka Sayang - Sonia",
            link: "https://www.chordabcd.com/2022/08/chord-benci-ku-sangka-sayang-sonia.html"
        },
        {
            title: "Chord Di Saat Aku Tersakiti - Dadali",
            link: "https://www.chordabcd.com/2022/09/chord-disaat-aku-tersakiti.html"
        },
        {
            title: "Chord Keroncong Perpisahan - Day Afternoon",
            link: "https://www.chordabcd.com/2022/06/chord-keroncong-perpisahan.html"
        },
        {
            title: "Chord Dear God Versi Indonesia - Avenged Sevenfold",
            link: "https://www.chordabcd.com/2022/06/chord-dear-god-versi-indonesia-kunci.html"
        },
        {
            title: "Chord Goo Goo Dolls - Iris",
            link: "https://www.chordabcd.com/2022/06/chord-goo-goo-dolls.html"
        },
        {
            title: "Chord Hujan Kemarin - Taxi Band",
            link: "https://www.chordabcd.com/2022/06/chord-hujan-kemarin.html"
        },
        {
            title: "Chord Bento Iwan Fals",
            link: "https://www.chordabcd.com/2022/06/chord-bento.html"
        },
        {
            title: "Chord Cinta Sakota - Mitha Talahatu",
            link: "https://www.chordabcd.com/2022/06/chord-cinta-sakota.html"
        },
        {
            title: "Chord Senyum Membawa Pesan - Mustache and Beard",
            link: "https://www.chordabcd.com/2022/06/chord-senyum-membawa-pesan.html"
        },
        {
            title: "Chord Mardua Holong - Omega Trio",
            link: "https://www.chordabcd.com/2022/06/chord-mardua-holong.html"
        },
		{
            title: "Chord Kau Tercipta Bukan Untukku - Ratih Purwasih",
            link: "https://www.chordabcd.com/2022/06/chord-kau-tercipta-bukan-untukku.html"
        },
		{
            title: "Chord Apa Maumu - Sang Alang",
            link: "https://www.chordabcd.com/2022/06/chord-apa-maumu.html"
        },
		{
            title: "Chord Sephia - Sheila on 7",
            link: "https://www.chordabcd.com/2022/06/chord-sephia.html"
        },
		{
            title: "Chord Sunset Di Tanah Anarki - Superman Is Dead",
            link: "https://www.chordabcd.com/2022/06/chord-sunset-di-tanah-anarki.html"
        },
		{
            title: "Chord Ada Dia - Super Emak",
            link: "https://www.chordabcd.com/2022/06/chord-ada-dia.html"
        },
		{
            title: "Chord Kuat Kita Bersinar - Superman Is Dead",
            link: "https://www.chordabcd.com/2022/06/chord-kuat-kita-bersinar.html"
        },
		{
            title: "Chord Salam Tresno - Just Music Official",
            link: "https://www.chordabcd.com/2022/06/chord-salam-tresno.html"
        },
		{
            title: "Chord Banyu Moto - Nella Kharisma feat. Dory Harsa",
            link: "https://www.chordabcd.com/2022/06/chord-banyu-moto-nella-kharisma.html"
        },
		{
            title: "Chord Hanya Rindu - Andmesh",
            link: "https://www.chordabcd.com/2022/06/chord-hanya-rindu.html"
        },
		{
            title: "Chord Wong Sepele - Ndarboy Genk",
            link: "https://www.chordabcd.com/2022/06/chord-wong-sepele.html"
        },
		{
            title: "Chord Perlahan - GuyonWaton",
            link: "https://www.chordabcd.com/2022/06/chord-perlahan.html"
        },
		{
            title: "Chord Cinta Karena Cinta - Judika",
            link: "https://www.chordabcd.com/2022/06/chord-cinta-karena-cinta.html"
        },
		{
            title: "Chord Titipane Gusti - Denny Caknan",
            link: "https://www.chordabcd.com/2022/06/chord-titipane-gusti.html"
        },
		{
            title: "Chord Yang Terlupakan - Iwan Fals",
            link: "https://www.chordabcd.com/2022/06/chord-yang-terlupakan.html"
        },
		{
            title: "Chord Gaun Merah - Sonia",
            link: "https://www.chordabcd.com/2022/06/chord-gaun-merah.html"
        },
		{
            title: "Chord Wakil Rakyat - Iwan Fals",
            link: "https://www.chordabcd.com/2022/06/chord-wakil-rakyat.html"
        },
		{
            title: "Chord Bukti - Virgoun",
            link: "https://www.chordabcd.com/2022/06/chord-bukti.html"
        },
		{
            title: "Chord Berita Kepada Kawan - Ebiet G Ade",
            link: "https://www.chordabcd.com/2022/06/chord-berita-kepada-kawan.html"
        },
		{
            title: "Chord Gereja Tua - Panbers",
            link: "https://www.chordabcd.com/2022/06/chord-gereja-tua.html"
        },
		{
            title: "Chord Angin Dalu - Woro Widowati",
            link: "https://www.chordabcd.com/2022/06/chord-angin-dalu.html"
        },
		{
            title: "Chord Selalu Ada - Blackout",
            link: "https://www.chordabcd.com/2022/06/chord-selalu-ada.html"
        },
		{
            title: "Chord Pelangi Dimatamu - Jamrud",
            link: "https://www.chordabcd.com/2022/08/chord-pelangi-dimatamu.html"
        },
		{
            title: "Chord Bersama Bintang - Drive",
            link: "https://www.chordabcd.com/2022/06/chord-bersama-bintang.html"
        },
		{
            title: "Chord Cinta Terbaik - Cassandra",
            link: "https://www.chordabcd.com/2022/06/chord-cinta-terbaik.html"
        },
		{
            title: "Chord Ditinggal Pas Sayang Sayange - Safira Inema",
            link: "https://www.chordabcd.com/2022/06/chord-ditinggal-pas-sayang-sayange.html"
        },
		{
            title: "Chord So Far Away - Avenged Sevenfold",
            link: "https://www.chordabcd.com/2022/06/chord-so-far-away.html"
        },
		{
            title: "Chord Tanpa Batas Waktu - Ade Govinda feat. Fadly",
            link: "https://www.chordabcd.com/2022/06/chord-tanpa-batas-waktu.html"
        },
		{
            title: "Chord Aku Tenang - Fourtwnty",
            link: "https://www.chordabcd.com/2022/06/chord-aku-tenang.html"
        },
		{
            title: "Chord Kehilangan - Firman",
            link: "https://www.chordabcd.com/2022/06/chord-kehilangan.html"
        },
		{
            title: "Chord PAMER BOJO - Didi Kempot",
            link: "https://www.chordabcd.com/2022/06/chord-pamer-bojo.html"
        },
		{
            title: "Chord Yowis - Hendra Kumbara",
            link: "https://www.chordabcd.com/2022/06/chord-yowis.html"
        },
		{
            title: "Chord Pernah Ada Rasa Cinta (Tinggal Kenangan) - Gaby",
            link: "https://www.chordabcd.com/2022/06/chord-pernah-ada-rasa-cinta.html"
        },
		{
            title: "Chord Ku Tak Bisa - SLANK",
            link: "https://www.chordabcd.com/2022/06/chord-ku-tak-bisa-slank.html"
        },
		{
            title: "Chord Someone You Loved - Lewis Capaldi",
            link: "https://www.chordabcd.com/2022/06/chord-someone-you-loved.html"
        },
		{
            title: "Chord Manusia Bodoh - Ada Band",
            link: "https://www.chordabcd.com/2022/06/chord-manusia-bodoh.html"
        },
		{
            title: "Chord Jadilah Legenda - Superman Is Dead",
            link: "https://www.chordabcd.com/2022/06/chord-jadilah-legenda.html"
        },
		{
            title: "Chord Kekasih Bayangan - Cakra Khan",
            link: "https://www.chordabcd.com/2022/06/chord-kekasih-bayangan.html"
        },
		{
            title: "Chord Tenda Biru - Desy Ratnasari",
            link: "https://www.chordabcd.com/2022/06/chord-tenda-biru.html"
        },
		{
            title: "Chord Kenangan Manis - Pamungkas",
            link: "https://www.chordabcd.com/2022/06/chord-kenangan-manis.html"
        },
		{
            title: "Chord Manusia Setengah Dewa - Iwan Fals",
            link: "https://www.chordabcd.com/2022/06/chord-manusia-setengah-dewa.html"
        },
		{
            title: "Chord Cinta Terlarang - ILIR 7",
            link: "https://www.chordabcd.com/2022/08/chord-cinta-terlarang.html"
        },
		{
            title: "Chord Tatu - Didi Kempot",
            link: "https://www.chordabcd.com/2022/06/chord-tatu.html"
        },
		{
            title: "Chord Kapalang Nyaah - Rina Apriliana",
            link: "https://www.chordabcd.com/2022/06/chord-kapalang-nyaah.html"
        },
		{
            title: "Chord Loro Pikir - Vita Alvia",
            link: "https://www.chordabcd.com/2022/06/chord-loro-pikir.html"
        },
		{
            title: "Chord Kopi Hitam - Momonon",
            link: "https://www.chordabcd.com/2022/06/chord-kopi-hitam.html"
        },
		{
            title: "Chord Kalung Emas - Didi Kempot",
            link: "https://www.chordabcd.com/2022/06/chord-kalung-emas.html"
        },
		{
            title: "Chord Hitam Putih - Cozy Republic",
            link: "https://www.chordabcd.com/2022/06/chord-hitam-putih.html"
        },
		{
            title: "Chord Akhirnya Ku Menemukanmu - Naff",
            link: "https://www.chordabcd.com/2022/06/chord-akhirnya-ku-menemukanmu.html"
        },
		{
            title: "Chord Sesuatu Di Jogja - Adhitia Sofyan",
            link: "https://www.chordabcd.com/2022/06/chord-sesuatu-di-jogja.html"
        },
		{
            title: "Chord Tanya Hati - Pasto",
            link: "https://www.chordabcd.com/2022/06/chord-tanya-hati.html"
        },
		{
            title: "Chord Harusnya Aku - Armada",
            link: "https://www.chordabcd.com/2022/06/chord-harusnya-aku.html"
        },
		{
            title: "Chord Kehadiranmu - Vagetoz",
            link: "https://www.chordabcd.com/2022/06/chord-kehadiranmu.html"
        },
		{
            title: "Chord Luka Disini - Ungu",
            link: "https://www.chordabcd.com/2022/06/chord-luka-disini.html"
        },
		{
            title: "Chord Bingung - Iksan Skuter",
            link: "https://www.chordabcd.com/2022/06/chord-bingung.html"
        },
		{
            title: "Chord Bintang Kehidupan - Nike Ardilla",
            link: "https://www.chordabcd.com/2022/06/chord-bintang-kehidupan.html"
        },
		{
            title: "Chord Selamat Ulang Tahun - Jamrud",
            link: "https://www.chordabcd.com/2022/06/chord-selamat-ulang-tahun.html"
        },
		{
            title: "Chord Kuatno Aku - Denny Caknan feat Ilux ID",
            link: "https://www.chordabcd.com/2022/06/chord-kuatno-aku.html"
        },
		{
            title: "Chord Walau Habis Terang - Peterpan",
            link: "https://www.chordabcd.com/2022/06/chord-walau-habis-terang.html"
        },
		{
            title: "Chord Allah Allah Aghisna - Nazwa Maulidi",
            link: "https://www.chordabcd.com/2022/06/chord-allah-allah-aghisna.html"
        },
		{
            title: "Chord Lelaki Cadangan - T2",
            link: "https://www.chordabcd.com/2022/06/chord-lelaki-cadangan.html"
        },
		{
            title: "Chord Janji Suci - Yovie & Nuno",
            link: "https://www.chordabcd.com/2022/06/chord-janji-suci.html"
        },
		{
            title: "Chord 7 Samudera - Gamma1",
            link: "https://www.chordabcd.com/2022/06/chord-7-samudera.html"
        },
		{
            title: "Chord Rahasia Hati - Element",
            link: "https://www.chordabcd.com/2022/06/chord-rahasia-hati.html"
        },
		{
            title: "Chord Zona Nyaman - Fourtwnty",
            link: "https://www.chordabcd.com/2022/06/chord-zona-nyaman.html"
        },
		{
            title: "Chord Dia - Anji",
            link: "https://www.chordabcd.com/2022/06/chord-dia.html"
        },
		{
            title: "Chord Menemukanmu - Seventeen",
            link: "https://www.chordabcd.com/2022/06/chord-menemukanmu.html"
        },
		{
            title: "Chord Munajat Cinta - The Rock",
            link: "https://www.chordabcd.com/2022/06/chord-munajat-cinta.html"
        },
		{
            title: "Chord Hukum Rimba - Marjinal",
            link: "https://www.chordabcd.com/2022/06/chord-hukum-rimba.html"
        },
		{
            title: "Chord Man Ana - Sabyan",
            link: "https://www.chordabcd.com/2022/06/chord-man-ana.html"
        },
		{
            title: "Chord Kartonyono Medot Janji - Denny Caknan",
            link: "https://www.chordabcd.com/2022/06/chord-kartonyono-medot-janji.html"
        },
		{
            title: "Chord Rela Demi Cinta - Thomas Arya",
            link: "https://www.chordabcd.com/2022/06/chord-rela-demi-cinta.html"
        },
		{
            title: "Chord Hati Yang Luka - Betharia Sonata",
            link: "https://www.chordabcd.com/2022/06/chord-hati-yang-luka.html"
        },
		{
            title: "Chord Di Batas Kota Ini - Tommy J Pisa",
            link: "https://www.chordabcd.com/2022/06/chord-di-batas-kota-ini.html"
        },
		{
            title: "Chord Kemarin - Seventeen",
            link: "https://www.chordabcd.com/2022/06/chord-kemarin.html"
        },
		{
            title: "Chord Aku Lelakimu - Virzha",
            link: "https://www.chordabcd.com/2022/06/chord-aku-lelakimu.html"
        },
		{
            title: "Chord Separuh Aku - NOAH",
            link: "https://www.chordabcd.com/2022/06/chord-separuh-aku.html"
        },
		{
            title: "Chord Dont Look Back In Anger - Oasis",
            link: "https://www.chordabcd.com/2022/08/chord-dont-look-back-in-anger.html"
        },
		{
            title: "Chord Kenanglah Aku - Naff",
            link: "https://www.chordabcd.com/2022/06/chord-kenanglah-aku.html"
        },
		{
            title: "Chord Jadi Aku Sebentar Saja - Judika",
            link: "https://www.chordabcd.com/2022/06/chord-jadi-aku-sebentar-saja.html"
        },
		{
            title: "Chord More Than Words - Extreme",
            link: "https://www.chordabcd.com/2022/06/chord-more-than-words.html"
        },
		{
            title: "Chord Let it Be - The Beatles",
            link: "https://www.chordabcd.com/2022/06/chord-let-it-be.html"
        },
		{
            title: "Chord Ada Aku Disini - Dhyo Haw",
            link: "https://www.chordabcd.com/2022/08/chord-ada-aku-disini.html"
        },
		{
            title: "Chord Menghitung Hari - Krisdayanti",
            link: "https://www.chordabcd.com/2022/06/chord-menghitung-hari.html"
        },
		{
            title: "Chord Menghitung Hari 2 - Anda Perdana",
            link: "https://www.chordabcd.com/2022/06/chord-menghitung-hari-2.html"
        },
		{
            title: "Chord Demi Cinta - Kerispatih",
            link: "https://www.chordabcd.com/2022/06/chord-demi-cinta.html"
        },
		{
            title: "Chord Resah Jadi Luka - Daun Jatuh",
            link: "https://www.chordabcd.com/2022/06/chord-resah-jadi-luka.html"
        },
		{
            title: "Chord Menepi - Ngatmombilung",
            link: "https://www.chordabcd.com/2022/06/chord-menepi.html"
        },
		{
            title: "Chord Haruskah Berakhir - Ridho Rhoma",
            link: "https://www.chordabcd.com/2022/06/chord-haruskah-berakhir.html"
        },
		{
            title: "Chord Roman Picisan - Dewa 19",
            link: "https://www.chordabcd.com/2022/06/chord-roman-picisan.html"
        },
		{
            title: "Chord Lost Stars - Adam Levine",
            link: "https://www.chordabcd.com/2022/06/chord-lost-stars.html"
        },
		{
            title: "Chord Tekan Semene - Aftershine",
            link: "https://www.chordabcd.com/2022/06/chord-tekan-semene.html"
        },
		{
            title: "Chord Waktu Yang Salah - Fiersa Besari ft Tantri",
            link: "https://www.chordabcd.com/2022/06/chord-waktu-yang-salah.html"
        },
		{
            title: "Chord Sampai Tutup Usia - Angga Candra",
            link: "https://www.chordabcd.com/2022/06/chord-sampai-tutup-usia.html"
        },
		{
            title: "Chord Cinta Kita - Slank",
            link: "https://www.chordabcd.com/2022/06/chord-cinta-kita-slank.html"
        },
		{
            title: "Chord Resah Jadi Luka - Putih Abu-Abu",
            link: "https://www.chordabcd.com/2022/09/chord-resah-jadi-luka.html"
        },
		{
            title: "Chord Sepine Wengi - Vivi Voletha",
            link: "https://www.chordabcd.com/2022/06/chord-sepine-wengi.html"
        },
		{
            title: "Chord R.I.P Rhyme In Peace - Bondan Prakoso",
            link: "https://www.chordabcd.com/2022/06/chord-rip.html"
        },
		{
            title: "Chord Lintang Ati - Nella Kharisma",
            link: "https://www.chordabcd.com/2022/06/chord-lintang-ati.html"
        },
		{
            title: "Chord Jalan Datar - Adibal Sahrul",
            link: "https://www.chordabcd.com/2022/09/chord-jalan-datar.html"
        },
		{
            title: "Chord Negara Lucu - Enau",
            link: "https://www.chordabcd.com/2022/06/chord-negara-lucu.html"
        },
		{
            title: "Chord Mantra Cinta - Rizky Febian",
            link: "https://www.chordabcd.com/2022/06/chord-mantra-cinta.html"
        },
		{
            title: "Chord Antara Ada Dan Tiada - Utopia",
            link: "https://www.chordabcd.com/2022/06/chord-antara-ada-dan-tiada.html"
        },
		{
            title: "Chord Officially Missing You - Tamia",
            link: "https://www.chordabcd.com/2023/02/chord-officially-missing-you-tamia.html"
        },
		{
            title: "Chord Tak Ingin Pergi - Riswandi",
            link: "https://www.chordabcd.com/2022/06/chord-tak-ingin-pergi.html"
        },
		{
            title: "Chord Bahagialah Bersamanya - Alcas",
            link: "https://www.chordabcd.com/2022/09/chord-bahagialah-bersamanya.html"
        },
		{
            title: "Chord Stasiun Balapan - Didi Kempot",
            link: "https://www.chordabcd.com/2022/08/chord-stasiun-balapan.html"
        },
		{
            title: "Chord Ruang Rindu - Letto",
            link: "https://www.chordabcd.com/2022/06/chord-ruang-rindu.html"
        },
		{
            title: "Chord Sampai Nanti - Nabila Maharani",
            link: "https://www.chordabcd.com/2023/01/chord-sampai-nanti-nabila-maharani.html"
        },
		{
            title: "Chord Terdiam Sepi - Via Vallen",
            link: "https://www.chordabcd.com/2022/07/chord-terdiam-sepi.html"
        },
		{
            title: "Chord Terhanyut Dalam Kemesraan - Ikke Nurjanah",
            link: "https://www.chordabcd.com/2022/06/chord-terhanyut-dalam-kemesraan.html"
        },
		{
            title: "Chord Cari Pacar Lagi - ST12",
            link: "https://www.chordabcd.com/2022/06/chord-cari-pacar-lagi.html"
        },
		{
            title: "Chord Merindu Lagi - Yovie & Nuno",
            link: "https://www.chordabcd.com/2022/06/chord-merindu-lagi.html"
        },
		{
            title: "Chord Jangan Bertengkar Lagi - Kangen Band",
            link: "https://www.chordabcd.com/2022/06/chord-jangan-bertengkar-lagi.html"
        },
		{
            title: "Chord Terbang Bersamaku - Kangen Band",
            link: "https://www.chordabcd.com/2022/06/chord-terbang-bersamaku.html"
        },
		{
            title: "Chord Jika Itu Yang Terbaik - Ungu",
            link: "https://www.chordabcd.com/2022/06/chord-jika-itu-yang-terbaik.html"
        },
		{
            title: "Chord Dermaga Biru - Thomas Arya",
            link: "https://www.chordabcd.com/2022/06/chord-dermaga-biru.html"
        },
		{
            title: "Chord Tanjung Mas Ninggal Janji - Didi Kempot",
            link: "https://www.chordabcd.com/2022/06/chord-tanjung-mas-ninggal-janji.html"
        },
		{
            title: "Chord Tak Ada Yang Abadi - Peterpan",
            link: "https://www.chordabcd.com/2022/06/chord-tak-ada-yang-abadi.html"
        },
		{
            title: "Chord Bagai Langit Dan Bumi - Via Vallen",
            link: "https://www.chordabcd.com/2022/06/chord-bagai-langit-dan-bumi.html"
        },
		{
            title: "Chord Banyu Langit - Didi Kempot",
            link: "https://www.chordabcd.com/2022/06/chord-banyu-langit.html"
        },
		{
            title: "Chord Jarak Dan Kita - Dhyo Haw",
            link: "https://www.chordabcd.com/2022/06/chord-jarak-dan-kita.html"
        },
		{
            title: "Chord DITINGGAL RABI - Via Vallen",
            link: "https://www.chordabcd.com/2022/06/chord-ditinggal-rabi.html"
        },
		{
            title: "Chord Tikus Tikus Kantor - Iwan Fals",
            link: "https://www.chordabcd.com/2022/06/chord-tikus-tikus-kantor.html"
        },
		{
            title: "Chord Tuhan Jagakan Dia - Motif Band",
            link: "https://www.chordabcd.com/2022/06/chord-tuhan-jagakan-dia.html"
        },
		{
            title: "Chord Aku Takut - Republik",
            link: "https://www.chordabcd.com/2022/06/chord-aku-takut.html"
        },
		{
            title: "Chord Balungan Kere - Ndarboy Genk",
            link: "https://www.chordabcd.com/2022/08/chord-balungan-kere.html"
        },
		{
            title: "Chord Lady Rose - Superman Is Dead",
            link: "https://www.chordabcd.com/2022/06/chord-lady-rose.html"
        },
		{
            title: "Chord Terlalu Cinta - Rossa",
            link: "https://www.chordabcd.com/2022/06/chord-terlalu-cinta.html"
        },
		{
            title: "Chord Bidadari Tak Bersayap - Anji",
            link: "https://www.chordabcd.com/2022/06/chord-bidadari-tak-bersayap.html"
        },
		{
            title: "Chord Bintang 14 Hari - Kangen Band",
            link: "https://www.chordabcd.com/2022/06/chord-bintang-14-hari.html"
        },
		{
            title: "Chord Pura Pura Lupa - Mahen",
            link: "https://www.chordabcd.com/2022/06/chord-pura-pura-lupa.html"
        },
		{
            title: "Chord Semua Tak Sama - Padi",
            link: "https://www.chordabcd.com/2022/06/chord-semua-tak-sama.html"
        },
		{
            title: "Chord Mereka Yang Berdasi - Desa LukaNegara",
            link: "https://www.chordabcd.com/2022/06/chord-mereka-yang-berdasi.html"
        },
		{
            title: "Chord Maaf Cintaku - Iwan Fals",
            link: "https://www.chordabcd.com/2022/06/chord-maaf-cintaku-.html"
        },
		{
            title: "Chord Diary Depresiku - Last Child",
            link: "https://www.chordabcd.com/2022/06/chord-diary-depresiku.html"
        },
		{
            title: "Chord Belum Ada Judul - Iwan Fals",
            link: "https://www.chordabcd.com/2022/06/chord-belum-ada-judul.html"
        },
		{
            title: "Chord Deen Assalam - Nissa Sabyan",
            link: "https://www.chordabcd.com/2022/06/chord-deen-assalam.html"
        },
		{
            title: "Chord Terlalu Pahit - Slank",
            link: "https://www.chordabcd.com/2022/06/chord-terlalu-pahit.html"
        },
		{
            title: "Chord Sebuah Kisah Klasik - Sheila On 7",
            link: "https://www.chordabcd.com/2022/08/chord-sebuah-kisah-klasik.html"
        },
		{
            title: "Chord KITA - Sheila On 7",
            link: "https://www.chordabcd.com/2022/06/chord-kita.html"
        },
		{
            title: "Chord Dan - Sheila On 7",
            link: "https://www.chordabcd.com/2022/06/chord-dan.html"
        },
		{
            title: "Chord Stand By Me - Ben E King",
            link: "https://www.chordabcd.com/2022/07/chord-stand-by-me.html"
        },
		{
            title: "Chord Tentang Cinta - Ipang",
            link: "https://www.chordabcd.com/2022/06/chord-tentang-cinta.html"
        },
		{
            title: "Chord Rindu Dalam Hati - Arsy Widianto, Brisia Jodie",
            link: "https://www.chordabcd.com/2022/06/chord-rindu-dalam-hati.html"
        },
		{
            title: "Chord Korban Janji - Guyon Waton",
            link: "https://www.chordabcd.com/2022/06/chord-korban-janji.html"
        },
		{
            title: "Chord Garis Terdepan - Fiersa Besari",
            link: "https://www.chordabcd.com/2022/06/chord-garis-terdepan.html"
        },
		{
            title: "Chord Bengkung - Alvi Ananta",
            link: "https://www.chordabcd.com/2022/06/chord-bengkung.html"
        },
		{
            title: "Chord Maafkan - Slank",
            link: "https://www.chordabcd.com/2022/06/chord-maafkan.html"
        },
		{
            title: "Chord Teman Cintaku - Devano Danendra",
            link: "https://www.chordabcd.com/2022/06/chord-teman-cintaku.html"
        },
		{
            title: "Chord Anoman Obong - Lesti",
            link: "https://www.chordabcd.com/2022/06/chord-anoman-obong.html"
        },
		{
            title: "Chord Kosipa - Yayan Jatnika",
            link: "https://www.chordabcd.com/2022/06/chord-kosipa.html"
        },
		{
            title: "Chord Sobat - Padi",
            link: "https://www.chordabcd.com/2022/06/chord-sobat.html"
        },
		{
            title: "Chord Sepatu - Tulus",
            link: "https://www.chordabcd.com/2022/06/chord-sepatu.html"
        },
		{
            title: "Chord Melompat Lebih Tinggi - Sheila On 7",
            link: "https://www.chordabcd.com/2022/06/chord-melompat-lebih-tinggi.html"
        },
		{
            title: "Chord Kukira Kau Rumah - Amigdala",
            link: "https://www.chordabcd.com/2022/06/chord-kukira-kau-rumah.html"
        },
		{
            title: "Chord Papatong - Bah Dadeng",
            link: "https://www.chordabcd.com/2022/06/chord-papatong.html"
        },
		{
            title: "Chord Senja Di Ambang Pilu - Danilla",
            link: "https://www.chordabcd.com/2022/06/chord-senja-di-ambang-pilu.html"
        },
		{
            title: "Chord Cinta Stadium Akhir - SouQy",
            link: "https://www.chordabcd.com/2022/06/chord-cinta-stadium-akhir.html"
        },
		{
            title: "Chord Kisah Seorang Pramuria - Boomerang",
            link: "https://www.chordabcd.com/2022/08/chord-kisah-seorang-pramuria.html"
        },
		{
            title: "Chord Salah - Lobow",
            link: "https://www.chordabcd.com/2022/06/chord-salah.html"
        },
		{
            title: "Chord Kolam Susu - Koes Plus",
            link: "https://www.chordabcd.com/2022/06/chord-kolam-susu.html"
        },
		{
            title: "Chord Orang Pinggiran - Iwan Fals",
            link: "https://www.chordabcd.com/2022/06/chord-orang-pinggiran.html"
        },
		{
            title: "Chord Sahabat Sejati - Sheila On 7",
            link: "https://www.chordabcd.com/2022/06/chord-sahabat-sejati.html"
        },
		{
            title: "Chord Tanpa Cinta - Yovie & Nuno",
            link: "https://www.chordabcd.com/2022/06/chord-tanpa-cinta.html"
        },
		{
            title: "Chord Puisi - Jikustik",
            link: "https://www.chordabcd.com/2022/06/chord-puisi.html"
        },
		{
            title: "Chord Sakit Hati - Tipe X",
            link: "https://www.chordabcd.com/2022/06/chord-sakit-hati.html"
        },
		{
            title: "Chord Juwita Malam - Slank",
            link: "https://www.chordabcd.com/2022/06/chord-juwita-malam.html"
        },
		{
            title: "Chord Selir Hati - TRIAD",
            link: "https://www.chordabcd.com/2022/06/chord-selir-hati.html"
        },
		{
            title: "Chord Perahu Kertas - Maudy Ayunda",
            link: "https://www.chordabcd.com/2022/06/chord-perahu-kertas.html"
        },
		{
            title: "Chord Terkesima - Rhoma Irama Feat Noer Halimah",
            link: "https://www.chordabcd.com/2022/06/chord-terkesima.html"
        },
		{
            title: "Chord Yakin - Radja",
            link: "https://www.chordabcd.com/2022/06/chord-yakin.html"
        },
		{
            title: "Chord Siapkah Kau Tuk Jatuh Cinta Lagi - Hivi",
            link: "https://www.chordabcd.com/2022/06/chord-siapkah-kau-tuk-jatuh-cinta-lagi.html"
        },
		{
            title: "Chord High Hopes - Kodaline",
            link: "https://www.chordabcd.com/2022/06/chord-high-hopes.html"
        },
		{
            title: "Chord Karena Wanita Ingin Dimengerti - Ada Band",
            link: "https://www.chordabcd.com/2022/06/chord-karena-wanita-ingin-dimengerti.html"
        },
		
		
        // Tambahkan objek dengan judul dan link postingan acak sesuai kebutuhan Anda
    ];

    // Fungsi untuk membuat daftar postingan acak
    function createPostList() {
        while (displayedPosts.length < 10) { // Menampilkan hanya 10 postingan
            var post = allPosts[Math.floor(Math.random() * allPosts.length)];
            // Cek apakah postingan sudah ditampilkan sebelumnya
            if (!isPostDisplayed(post)) {
                displayedPosts.push(post); // Tambahkan postingan ke array displayedPosts
                var li = document.createElement("li");
                var title = document.createElement("div");
                var link = document.createElement("a");
                title.classList.add("post-title");
                link.classList.add("post-link");
                link.href = post.link;
                link.textContent = post.title;
                title.appendChild(link);
                li.appendChild(title);
                postList.appendChild(li);
            }
        }
    }

    // Fungsi untuk memeriksa apakah postingan sudah ditampilkan sebelumnya
    function isPostDisplayed(post) {
        for (var i = 0; i < displayedPosts.length; i++) {
            if (displayedPosts[i].title === post.title && displayedPosts[i].link === post.link) {
                return true; // Jika sudah ditampilkan sebelumnya, return true
            }
        }
        return false; // Jika belum ditampilkan sebelumnya, return false
    }

    createPostList();
});