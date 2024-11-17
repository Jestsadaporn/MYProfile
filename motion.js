
window.addEventListener('scroll', () => {
    const imageSection = document.querySelector('.image-section');
    const sectionPosition = imageSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;
  
    // ถ้าผู้ใช้เลื่อนมาถึงตำแหน่งที่ต้องการ ให้เพิ่มคลาสเพื่อแสดงภาพพร้อมแอนิเมชัน
    if (sectionPosition < screenPosition) {
      imageSection.classList.add('opacity-120', 'translate-y-0');
    }
  });
  