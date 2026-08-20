document.addEventListener('DOMContentLoaded', () => {
    const envelopeWrapper = document.getElementById('envelope-wrapper');
    const zoomBtn = document.getElementById('zoom-btn');
    const modal = document.getElementById('letter-modal');
    const closeModal = document.getElementById('close-modal');
    const btnMaafModal = document.getElementById('btn-maaf-modal');
    const successMessage = document.getElementById('success-message');
    const btnTolak = document.getElementById('btn-tolak-modal'); // Tombol Jahil
    
    // 1. Klik amplop untuk membuka
    envelopeWrapper.addEventListener('click', () => {
        if (!envelopeWrapper.classList.contains('open')) {
            envelopeWrapper.classList.add('open');
        }
    });

    // 2. Klik tombol "Buka Surat"
    zoomBtn.addEventListener('click', (event) => {
        event.stopPropagation();
        modal.classList.add('show');
        // Reset posisi tombol tolak ke awal tiap surat dibuka
        btnTolak.style.transform = `translate(0px, 0px)`;
    });

    // 3. Klik tanda Silang (X)
    closeModal.addEventListener('click', () => {
        modal.classList.remove('show');
    });

    // 4. Klik tombol "Aku Maafin"
    btnMaafModal.addEventListener('click', () => {
        modal.classList.remove('show');
        envelopeWrapper.style.transition = "all 0.8s ease";
        envelopeWrapper.style.opacity = "0";
        envelopeWrapper.style.transform = "scale(0.8)";
        
        setTimeout(() => {
            envelopeWrapper.style.display = 'none';
            successMessage.classList.remove('hidden');
        }, 800);
    });

    // ==========================================
    // 5. LOGIKA TOMBOL JAHIL (LARI-LARI)
    // ==========================================
    function lariDung() {
        // Angka random untuk posisi X (kiri/kanan) dan Y (atas/bawah)
        const randomX = Math.floor(Math.random() * 200) - 100; // Gerak antara -100px sampai 100px
        const randomY = Math.floor(Math.random() * 150) - 75;  // Gerak antara -75px sampai 75px

        // Pindahkan tombol secara instan
        btnTolak.style.transform = `translate(${randomX}px, ${randomY}px)`;
    }

    // Kalau kursor mouse nyentuh tombol (di Laptop/PC)
    btnTolak.addEventListener('mouseover', lariDung);
    
    // Kalau mau dipencet layarnya (di HP)
    btnTolak.addEventListener('touchstart', (e) => {
        e.preventDefault(); // Mencegah kepencet beneran
        lariDung();
    });

    // Antisipasi kalau dia nge-cheat dan berhasil klik tombolnya
    btnTolak.addEventListener('click', (e) => {
        e.preventDefault();
        btnTolak.innerText = "Yeee tetep harus dimaafin 😜";
        setTimeout(() => {
            btnTolak.innerText = "Gak Mau!";
        }, 1500);
    });
});