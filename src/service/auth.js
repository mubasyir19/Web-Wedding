export function isAuthenticated(req) {
  if (typeof window !== "undefined") {
    // Jika kode dijalankan pada sisi klien
    const token = localStorage.getItem("token"); // Ambil token dari localStorage
    return !!token;
  } else {
    // Jika kode dijalankan pada sisi server, Anda dapat menetapkan logika otentikasi sesuai kebutuhan
    // Contoh: Anda dapat memeriksa token pada cookie
    const token = req.cookies.token; // Anda dapat menyesuaikan ini sesuai dengan mekanisme otentikasi Anda
    return !!token;
  }
}
