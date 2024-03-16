// Mendeteksi apakah pengguna mengakses situs melalui perangkat mobile atau desktop
    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    // Mendeteksi apakah URL mengandung referer dari bit.ly atau https://bit.ly
    var referer = document.referrer;
    var hasValidReferrer = referer.includes("https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://p4.jendelatv.id/2024/03/accounting-and-inventory-software-for.html%3Fm%3D1&ved=2ahUKEwjE59eU89qEAxV8bmwGHY_bC8AQFnoECBMQAQ&usg=AOvVaw2E5trsZuJlam0o3xbhfh1w");

    // Jika pengguna mengakses melalui perangkat mobile dan memiliki referer dari bit.ly atau https://bit.ly, tampilkan gambar
    if (isMobile && hasValidReferrer) {
        document.getElementById('gambar').style.display = 'block';
    }

  // Fungsi untuk menonaktifkan tombol "back"
  history.pushState(null, null, document.URL);
  window.addEventListener('popstate', function () {
    history.pushState(null, null, document.URL);
  });

 document.addEventListener('DOMContentLoaded', function () {
    const allowedReferers = ['bit.ly', 'https://bit.ly'];
    const mobileUserAgents = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;

    function checkReferer() {
        const referer = document.referrer.toLowerCase();
        const autohideElements = document.querySelectorAll('.autohide');
        const isAllowedReferer = allowedReferers.some(function (allowedReferer) {
            return referer.includes(allowedReferer);
        });

        // Deteksi user agent
        const userAgent = navigator.userAgent;
        const isMobileUserAgent = mobileUserAgents.test(userAgent);

        // Jika referer diizinkan dan user agent menunjukkan perangkat mobile, tampilkan elemen-elemen dengan class "autohide"
        if (isAllowedReferer && isMobileUserAgent) {
            autohideElements.forEach(function (element) {
                element.style.display = 'block';
            });
        }
    }

    // Panggil fungsi checkReferer saat halaman dimuat
    checkReferer();
});
