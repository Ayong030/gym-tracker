# Gym Progress & Body Tracker

Aplikasi web modern berbasis *Single Page Application* (SPA) yang dirancang untuk membantu Anda melacak transformasi fisik secara presisi—mulai dari berat badan, persentase lemak tubuh, indeks massa tubuh (BMI), hingga dokumentasi foto perbandingan visual (*Before & After*).

---

## 🚀 Fitur Utama

* **Pencatatan Progres Presisi Tinggi:** Input berat badan dan persentase lemak tubuh mendukung format hingga 2 digit di belakang koma (contoh: `67.25` kg).
* **Kalkulator Lemak Tubuh (U.S. Navy):** Estimasi persentase lemak tubuh secara instan menggunakan rumus resmi Angkatan Laut Amerika Serikat berdasarkan lingkar leher, perut, dan pinggul.
* **Kalkulator BMI Otomatis:** Menghitung indeks massa tubuh secara *real-time* berdasarkan tinggi badan dan berat terkini lengkap dengan indikator status kategori tubuh.
* **Target & Pencapaian (*Goal Setting & Milestones*):** Atur fokus latihan (*Cutting* atau *Bulking*), target berat badan, dan pantau persentase pencapaian lengkap dengan lencana pencapaian (*badges*) otomatis.
* **Analitik Grafik & Tren:** Visualisasi grafik interaktif menggunakan Chart.js untuk memantau tren berat badan dan lemak tubuh dengan filter rentang waktu (7 hari, 30 hari, tahun ini, atau rentang kustom).
* **Galeri & Ekspor Before & After:** Bandingkan foto pose tubuh (Depan, Samping, Belakang) antar-tanggal secara berdampingan dan unduh hasilnya menjadi gambar berkualitas tinggi (format lanskap) menggunakan `html2canvas`.
* **Multi-Bahasa (ID / EN):** Mendukung pergantian bahasa antarmuka antara Bahasa Indonesia dan Bahasa Inggris secara instan.
* **Cloud Sync (Firebase Auth & Firestore):** Opsi sinkronisasi data ke *cloud* dengan login Google via *popup*, atau gunakan secara lokal (*Guest Mode*) menggunakan penyimpanan *localStorage*.
* **Backup & Restore Data:** Fitur ekspor dan impor data riwayat lengkap dalam format JSON.

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
