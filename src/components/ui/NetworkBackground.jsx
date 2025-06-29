import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const NetworkBackground = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const nodesRef = useRef([]);

  // Network configuration
  const config = {
    nodeCount: 80,
    connectionDistance: 150,
    nodeSpeed: 0.3,
    pulseSpeed: 0.02,
    nodeSize: { min: 1, max: 3 },
    colors: {
      nodes: "#00ff88",
      connections: "#00ff88",
      accent: "#00d4ff",
    },
  };

  // Node class
  class NetworkNode {
    constructor(canvas) {
      this.canvas = canvas;
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.vx = (Math.random() - 0.5) * config.nodeSpeed;
      this.vy = (Math.random() - 0.5) * config.nodeSpeed;
      this.size =
        config.nodeSize.min +
        Math.random() * (config.nodeSize.max - config.nodeSize.min);
      this.pulse = Math.random() * Math.PI * 2;
      this.connections = [];
    }

    update() {
      // Update position
      this.x += this.vx;
      this.y += this.vy;

      // Bounce off edges
      if (this.x < 0 || this.x > this.canvas.width) this.vx *= -1;
      if (this.y < 0 || this.y > this.canvas.height) this.vy *= -1;

      // Keep within bounds
      this.x = Math.max(0, Math.min(this.canvas.width, this.x));
      this.y = Math.max(0, Math.min(this.canvas.height, this.y));

      // Update pulse
      this.pulse += config.pulseSpeed;
    }

    draw(ctx) {
      const pulseIntensity = Math.sin(this.pulse) * 0.3 + 0.7;
      const glowSize = this.size * 3;

      // Draw glow
      const gradient = ctx.createRadialGradient(
        this.x,
        this.y,
        0,
        this.x,
        this.y,
        glowSize,
      );
      gradient.addColorStop(
        0,
        `${config.colors.nodes}${Math.floor(pulseIntensity * 40)
          .toString(16)
          .padStart(2, "0")}`,
      );
      gradient.addColorStop(1, "transparent");

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(this.x, this.y, glowSize, 0, Math.PI * 2);
      ctx.fill();

      // Draw core node
      ctx.fillStyle = `${config.colors.nodes}${Math.floor(pulseIntensity * 255)
        .toString(16)
        .padStart(2, "0")}`;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size * pulseIntensity, 0, Math.PI * 2);
      ctx.fill();
    }

    getDistance(other) {
      return Math.sqrt((this.x - other.x) ** 2 + (this.y - other.y) ** 2);
    }
  }

  // Initialize network
  const initializeNetwork = (canvas) => {
    const nodes = [];
    for (let i = 0; i < config.nodeCount; i++) {
      nodes.push(new NetworkNode(canvas));
    }
    return nodes;
  };

  // Draw connections between nearby nodes
  const drawConnections = (ctx, nodes) => {
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const distance = nodes[i].getDistance(nodes[j]);

        if (distance < config.connectionDistance) {
          const opacity = (1 - distance / config.connectionDistance) * 0.4;

          // Create gradient line
          const gradient = ctx.createLinearGradient(
            nodes[i].x,
            nodes[i].y,
            nodes[j].x,
            nodes[j].y,
          );

          gradient.addColorStop(
            0,
            `${config.colors.connections}${Math.floor(opacity * 255)
              .toString(16)
              .padStart(2, "0")}`,
          );
          gradient.addColorStop(
            0.5,
            `${config.colors.accent}${Math.floor(opacity * 200)
              .toString(16)
              .padStart(2, "0")}`,
          );
          gradient.addColorStop(
            1,
            `${config.colors.connections}${Math.floor(opacity * 255)
              .toString(16)
              .padStart(2, "0")}`,
          );

          ctx.strokeStyle = gradient;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.stroke();
        }
      }
    }
  };

  // Animation loop
  const animate = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const nodes = nodesRef.current;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Update and draw connections
    drawConnections(ctx, nodes);

    // Update and draw nodes
    nodes.forEach((node) => {
      node.update();
      node.draw(ctx);
    });

    animationRef.current = requestAnimationFrame(animate);
  };

  // Handle resize
  const handleResize = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.parentElement.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;

    // Reinitialize nodes with new canvas size
    nodesRef.current = initializeNetwork(canvas);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Initial setup
    handleResize();

    // Start animation
    animate();

    // Add resize listener
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <motion.div
      className="absolute inset-0 pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, delay: 0.5 }}
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{
          filter: "blur(0.5px)",
          mixBlendMode: "screen",
        }}
      />
    </motion.div>
  );
};

export default NetworkBackground;
