 // Copy to Clipboard Function
    function copyToClipboard(text) {
      navigator.clipboard.writeText(text).then(() => {
        const notification = document.getElementById('notification');
        notification.classList.add('show');
        setTimeout(() => {
          notification.classList.remove('show');
        }, 2000);
      });
    }

    // Particle Background
    const canvas = document.getElementById('particle-canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particlesArray = [];
    const numberOfParticles = 100;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 5 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.size > 0.2) this.size -= 0.1;

        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
      }

      draw() {
        ctx.fillStyle = 'rgba(30, 144, 255, 0.5)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function initParticles() {
      particlesArray = [];
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
      }
    }

    function animateParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
        if (particlesArray[i].size <= 0.2) {
          particlesArray.splice(i, 1);
          particlesArray.push(new Particle());
          i--;
        }
      }
      requestAnimationFrame(animateParticles);
    }

    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    });

    initParticles();
    animateParticles();

    // Countdown Timer
    function startCountdown(elementId, duration) {
      const countdownElement = document.getElementById(elementId);
      let time = duration;

      setInterval(() => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        countdownElement.textContent = `Next Reward: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        time--;
        if (time < 0) {
          time = duration;
        }
      }, 1000);
    }

    // Initialize countdown timers for each card
    for (let i = 1; i <= 10; i++) {
      startCountdown(`countdown-${i}`, 900); // 15 minutes = 900 seconds
    }
