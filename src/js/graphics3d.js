/**
 * 3D / 2D Badge Graphics Renderer for AlcheMY
 * Renders rotating 3D polygonal gems/cubes/spheres on HTML5 Canvas for 3D elements.
 */

export class Graphics3D {
  constructor() {
    this.activeCanvases = new Map();
  }

  /**
   * Initializes a 3D preview render loop on a target canvas element for 3D elements.
   */
  render3DBadge(canvas, elementId, color = '#60a5fa') {
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let angleX = 0;
    let angleY = 0;

    // Define 3D Cube / Octahedron vertices
    const vertices = [
      { x: -1, y: -1, z: -1 },
      { x:  1, y: -1, z: -1 },
      { x:  1, y:  1, z: -1 },
      { x: -1, y:  1, z: -1 },
      { x: -1, y: -1, z:  1 },
      { x:  1, y: -1, z:  1 },
      { x:  1, y:  1, z:  1 },
      { x: -1, y:  1, z:  1 }
    ];

    const edges = [
      [0,1], [1,2], [2,3], [3,0],
      [4,5], [5,6], [6,7], [7,4],
      [0,4], [1,5], [2,6], [3,7]
    ];

    const animate = () => {
      if (!document.body.contains(canvas)) {
        return; // Stop if canvas was removed from DOM
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const width = canvas.width;
      const height = canvas.height;
      const fov = 100;

      angleX += 0.02;
      angleY += 0.03;

      // Project vertices
      const projected = vertices.map(v => {
        // Rotate around Y
        let x1 = v.x * Math.cos(angleY) - v.z * Math.sin(angleY);
        let z1 = v.x * Math.sin(angleY) + v.z * Math.cos(angleY);

        // Rotate around X
        let y2 = v.y * Math.cos(angleX) - z1 * Math.sin(angleX);
        let z2 = v.y * Math.sin(angleX) + z1 * Math.cos(angleX);

        const scale = fov / (fov + z2 + 3);
        return {
          x: width / 2 + x1 * scale * (width * 0.25),
          y: height / 2 + y2 * scale * (height * 0.25)
        };
      });

      // Draw Edges
      ctx.strokeStyle = color;
      ctx.lineWidth = 2;
      ctx.shadowColor = color;
      ctx.shadowBlur = 8;

      edges.forEach(([i, j]) => {
        ctx.beginPath();
        ctx.moveTo(projected[i].x, projected[i].y);
        ctx.lineTo(projected[j].x, projected[j].y);
        ctx.stroke();
      });

      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }
}

export const graphics3D = new Graphics3D();
