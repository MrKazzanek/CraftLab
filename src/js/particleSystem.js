/**
 * Canvas 2D Particle System for AlcheMY
 * Spawns particle bursts, swirling smoke, magic sparks, and discovery confetti.
 */

export class ParticleSystem {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.particles = [];
    this.animating = false;
    this.resize();
    window.addEventListener('resize', () => this.resize());
  }

  resize() {
    if (!this.canvas) return;
    this.canvas.width = this.canvas.parentElement.clientWidth;
    this.canvas.height = this.canvas.parentElement.clientHeight;
  }

  spawnBurst(x, y, color = '#facc15', count = 30) {
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 2 + Math.random() * 6;
      this.particles.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size: 3 + Math.random() * 5,
        color,
        alpha: 1,
        decay: 0.015 + Math.random() * 0.02,
        gravity: 0.08,
        shape: Math.random() > 0.5 ? 'circle' : 'star'
      });
    }
    this.startLoop();
  }

  spawnSmoke(x, y, count = 15) {
    for (let i = 0; i < count; i++) {
      this.particles.push({
        x: x + (Math.random() - 0.5) * 20,
        y: y + (Math.random() - 0.5) * 20,
        vx: (Math.random() - 0.5) * 1.5,
        vy: -1 - Math.random() * 2,
        size: 8 + Math.random() * 12,
        color: '#64748b',
        alpha: 0.6,
        decay: 0.01 + Math.random() * 0.015,
        gravity: -0.02,
        shape: 'circle'
      });
    }
    this.startLoop();
  }

  spawnDiscoveryExplosion(x, y) {
    const palette = ['#3b82f6', '#ec4899', '#8b5cf6', '#10b981', '#f59e0b', '#ef4444', '#38bdf8'];
    for (let i = 0; i < 60; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 3 + Math.random() * 9;
      this.particles.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size: 4 + Math.random() * 6,
        color: palette[Math.floor(Math.random() * palette.length)],
        alpha: 1,
        decay: 0.01 + Math.random() * 0.015,
        gravity: 0.05,
        shape: 'star'
      });
    }
    this.startLoop();
  }

  startLoop() {
    if (!this.animating) {
      this.animating = true;
      requestAnimationFrame(() => this.update());
    }
  }

  update() {
    if (!this.ctx) return;
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += p.gravity;
      p.alpha -= p.decay;

      if (p.alpha <= 0) {
        this.particles.splice(i, 1);
        continue;
      }

      this.ctx.save();
      this.ctx.globalAlpha = Math.max(0, p.alpha);
      this.ctx.fillStyle = p.color;

      if (p.shape === 'circle') {
        this.ctx.beginPath();
        this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        this.ctx.fill();
      } else {
        // Draw star / diamond
        this.ctx.beginPath();
        this.ctx.moveTo(p.x, p.y - p.size);
        this.ctx.lineTo(p.x + p.size * 0.5, p.y);
        this.ctx.lineTo(p.x, p.y + p.size);
        this.ctx.lineTo(p.x - p.size * 0.5, p.y);
        this.ctx.closePath();
        this.ctx.fill();
      }
      this.ctx.restore();
    }

    if (this.particles.length > 0) {
      requestAnimationFrame(() => this.update());
    } else {
      this.animating = false;
    }
  }
}
