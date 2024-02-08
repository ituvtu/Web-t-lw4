document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById('newYearCountdown');
    const context = canvas.getContext('2d');
    context.font = '30px Arial';
    context.textAlign = 'center';
  
    function updateCountdown() {
      const now = new Date();
      const nextYear = now.getFullYear() + 1;
      const newYear = new Date(`January 1, ${nextYear} 00:00:00`);
      const diff = newYear - now;
  
      let days = Math.floor(diff / (1000 * 60 * 60 * 24));
      let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((diff % (1000 * 60)) / 1000);
  
      // Очищення canvas
      context.clearRect(0, 0, canvas.width, canvas.height);
  
      // Встановлення кольору фону
      context.fillStyle = 'green';
      context.fillRect(0, 0, canvas.width, canvas.height);
  
      // Встановлення кольору тексту
      context.fillStyle = 'lemonchiffon';
      context.fillText(`До Нового Року залишилось: ${days} днів ${hours} годин ${minutes} хвилин ${seconds} секунд`, canvas.width / 2, canvas.height / 2);
    }
  
    setInterval(updateCountdown, 1000);
  });
  