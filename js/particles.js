/**
 * Neural Network Particle Canvas
 * Creates an animated node-connection background inspired by AI/neural networks
 */

class NeuralCanvas {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.nodes = [];
    this.nodeCount = 70;
    this.connectionDist = 140;
    this.animId = null;
    this.mouse = { x: null, y: null };
    this.resize();
    this.init();
    this.bindEvents();
    this.animate();
  }

  resize() {
    this.canvas.width  = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  init() {
    this.nodes = [];
    const w = this.canvas.width;
    const h = this.canvas.height;
    for (let i = 0; i < this.nodeCount; i++) {
      this.nodes.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 2 + 1,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.02 + Math.random() * 0.02,
      });
    }
  }

  bindEvents() {
    window.addEventListener('resize', () => {
      this.resize();
      this.init();
    });
    window.addEventListener('mousemove', (e) => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
    });
    window.addEventListener('mouseleave', () => {
      this.mouse.x = null;
      this.mouse.y = null;
    });
  }

  drawNode(node) {
    const ctx = this.ctx;
    node.pulse += node.pulseSpeed;
    const glow = 0.5 + 0.5 * Math.sin(node.pulse);
    const r = node.r + glow * 0.8;

    ctx.beginPath();
    ctx.arc(node.x, node.y, r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(0, 212, 255, ${0.3 + glow * 0.5})`;
    ctx.fill();

    // Outer ring
    ctx.beginPath();
    ctx.arc(node.x, node.y, r + 3, 0, Math.PI * 2);
    ctx.strokeStyle = `rgba(0, 212, 255, ${0.05 + glow * 0.08})`;
    ctx.lineWidth = 1;
    ctx.stroke();
  }

  drawConnection(a, b, dist) {
    const opacity = (1 - dist / this.connectionDist) * 0.35;
    this.ctx.beginPath();
    this.ctx.moveTo(a.x, a.y);
    this.ctx.lineTo(b.x, b.y);
    this.ctx.strokeStyle = `rgba(0, 168, 212, ${opacity})`;
    this.ctx.lineWidth = 0.5;
    this.ctx.stroke();
  }

  update() {
    const w = this.canvas.width;
    const h = this.canvas.height;

    for (const node of this.nodes) {
      // Mouse repulsion
      if (this.mouse.x !== null) {
        const dx = node.x - this.mouse.x;
        const dy = node.y - this.mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 100) {
          const force = (100 - dist) / 100 * 0.015;
          node.vx += (dx / dist) * force;
          node.vy += (dy / dist) * force;
        }
      }

      // Speed cap
      const speed = Math.sqrt(node.vx * node.vx + node.vy * node.vy);
      if (speed > 1.2) {
        node.vx = (node.vx / speed) * 1.2;
        node.vy = (node.vy / speed) * 1.2;
      }

      node.x += node.vx;
      node.y += node.vy;

      // Wrap edges
      if (node.x < -20) node.x = w + 20;
      if (node.x > w + 20) node.x = -20;
      if (node.y < -20) node.y = h + 20;
      if (node.y > h + 20) node.y = -20;
    }
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // Draw connections
    for (let i = 0; i < this.nodes.length; i++) {
      for (let j = i + 1; j < this.nodes.length; j++) {
        const a = this.nodes[i];
        const b = this.nodes[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < this.connectionDist) {
          this.drawConnection(a, b, dist);
        }
      }
    }

    // Draw nodes
    for (const node of this.nodes) {
      this.drawNode(node);
    }
  }

  animate() {
    this.update();
    this.draw();
    this.animId = requestAnimationFrame(() => this.animate());
  }

  destroy() {
    if (this.animId) cancelAnimationFrame(this.animId);
  }
}

// Auto-init when DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => new NeuralCanvas('hero-canvas'));
} else {
  new NeuralCanvas('hero-canvas');
}
