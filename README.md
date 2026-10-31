# Gym Progress & Body Tracker

Aplikasi web modern berbasis *Single Page Application* (SPA) yang dirancang untuk membantu Anda melacak transformasi fisik secara presisi—mulai dari berat badan, persentase lemak tubuh, indeks massa tubuh (BMI), hingga dokumentasi foto perbandingan visual (*Before & After*).

🌐 **Live Demo / Akses Aplikasi:** [https://gym-tracker-10-beige.vercel.app/](https://gym-tracker-10-beige.vercel.app/)

---

## 🚀 Fitur Utama

* **Pencatatan Progres Presisi Tinggi:** Input berat badan dan persentase lemak tubuh mendukung format hingga 2 digit di belakang koma (contoh: `67.25` kg).
* **Kalkulator BMI Otomatis:** Menghitung indeks massa tubuh secara *real-time* berdasarkan tinggi badan, jenis kelamin, dan berat terkini lengkap dengan indikator status kategori tubuh (Kurus, Ideal, Gemuk, Obesitas).
* **Kalkulator Lemak Tubuh (U.S. Navy):** Estimasi persentase lemak tubuh secara instan menggunakan rumus resmi Angkatan Laut Amerika Serikat berdasarkan lingkar leher, perut, dan pinggul.
* **Target & Pencapaian (*Goal Setting & Milestones*):** Atur fokus latihan (*Cutting* atau *Bulking*), target berat badan, dan pantau persentase pencapaian lengkap dengan lencana pencapaian (*badges*) otomatis.
* **Analitik Grafik & Tren:** Visualisasi grafik interaktif menggunakan Chart.js untuk memantau tren berat badan dan lemak tubuh dengan filter rentang waktu (7 hari, 30 hari, tahun ini, atau rentang kustom).
* **Galeri & Ekspor Before & After:** Bandingkan foto pose tubuh (Depan, Samping, Belakang) antar-tanggal secara berdampingan dan unduh hasilnya menjadi gambar berkualitas tinggi (format lanskap) menggunakan `html2canvas`.
* **Multi-Bahasa (ID / EN):** Mendukung pergantian bahasa antarmuka antara Bahasa Indonesia dan Bahasa Inggris secara instan.
* **Cloud Sync (Firebase Auth & Firestore):** Opsi sinkronisasi data ke *cloud* dengan login Google via *popup*, atau gunakan secara lokal (*Guest Mode*) menggunakan penyimpanan *localStorage*.
* **Backup & Restore Data:** Fitur ekspor dan impor data riwayat lengkap dalam format JSON.

---

## 📱 Cara Penggunaan Aplikasi

### 1. Pengaturan Profil, Target, dan Tinggi Badan
* Klik tombol **"Atur Target"** di bagian atas header aplikasi.
* Masukkan jenis kelamin (Pria/Wanita), tinggi badan (cm), fokus latihan (*Cutting* atau *Bulking*), target berat badan, serta target % lemak tubuh.
* Klik **Simpan Target**. Data ini digunakan untuk menghitung Indeks Massa Tubuh (BMI) secara otomatis dan melacak bilah progres target Anda.

### 2. Mencatat Progres Harian (*Log New Progress*)
* Masuk ke tab **Input & Grafik**.
* Isi tanggal entri, berat badan (mendukung desimal 2 digit, contoh: `67.25`), dan persentase lemak tubuh (opsional).
* Unggah foto perkembangan fisik Anda berdasarkan pose (Foto Depan, Samping Dada, dan Belakang). Foto akan dikompresi otomatis agar penyimpanan tetap ringan.
* Tambahkan catatan latihan atau diet jika diperlukan, lalu klik **Simpan Progres**.

### 3. Menghitung Lemak Tubuh dengan Kalkulator Navy
* Jika Anda belum mengetahui persentase lemak tubuh, gunakan **Navy Body Fat Calculator** di panel sebelah kanan form.
* Pilih jenis kelamin, lalu masukkan ukuran tinggi, leher, perut/pinggang (serta pinggul khusus wanita).
* Klik **Hitung**, lalu klik **Gunakan ke Form** untuk memasukkan hasilnya secara otomatis ke kolom pencatatan.

### 4. Memantau Tren dengan Grafik Analitik
* Masih di tab **Input & Grafik**, gulir ke bawah untuk melihat grafik tren berat badan dan persentase lemak tubuh.
* Gunakan tombol filter waktu (Semua, 7 Hari Terakhir, 30 Hari Terakhir, Tahun Ini, atau Kustom) untuk menganalisis perkembangan secara spesifik.

### 5. Perbandingan Foto (*Before & After*)
* Pindah ke tab **Before & After**.
* Pilih dua tanggal entri yang ingin dibandingkan (Entri Baseline dan Entri Terbaru) serta jenis pose foto.
* Klik **Compare Photos** untuk melihat perbandingan berdampingan lengkap dengan selisih perubahan berat badannya.
* Klik tombol **Ekspor Foto Perbandingan** untuk mengunduh gambarnya dalam format lanskap.

### 6. Manajemen Riwayat & Sinkronisasi
* Pada tab **Riwayat Entri**, Anda dapat meninjau seluruh daftar catatan masa lalu atau menghapus entri yang tidak diperlukan.
* Gunakan tombol **Ekspor JSON** dan **Impor JSON** untuk melakukan cadangan (*backup*) atau pemulihan (*restore*) data.
* Klik tombol **Login Google** di pojok kanan atas untuk menyinkronkan data Anda secara aman di Cloud Firestore.

---

## 🛠️ Tech Stack

* **Frontend:** HTML5, Tailwind CSS (via CDN)
* **Grafik:** Chart.js
* **Ekspor Gambar:** html2canvas
* **Autentikasi & Database (Opsional):** Google Firebase SDK v9 (Compat) - Auth & Firestore
* **Deployment & Analytics:** Vercel Hosting, Web Analytics, & Speed Insights

---

## 📂 Struktur Proyek

```text
├── index.html         # Halaman utama aplikasi (UI, Modal Target, & Layout)
├── app.js             # Logika aplikasi, kalkulasi BMI/Navy, grafik, dan sinkronisasi data
├── GymTracker.jpg     # Logo kustom aplikasi
├── GymTracker.ico     # Favicon situs
└── README.md          # Dokumentasi proyek
```

---

## 💻 Cara Menjalankan Secara Lokal

1. **Clone repositori ini:**
   ```bash
   git clone https://github.com/username/gym-progress-tracker.git
   ```
2. **Buka direktori proyek:**
   ```bash
   cd gym-progress-tracker
   ```
3. **Jalankan file utama:**
   * Cukup buka file `index.html` langsung di *browser* Anda, **ATAU**
   * Gunakan ekstensi *Live Server* di Visual Studio Code.

---

## 📄 Lisensi

Proyek ini bersifat open-source dan dibangun untuk mendukung transformasi fitness Anda. Silakan gunakan dan kembangkan lebih lanjut!