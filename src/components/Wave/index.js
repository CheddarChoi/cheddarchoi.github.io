import React, { useEffect, useRef } from "react";
import { WaveGroup } from "./wavegroup.js";

const Wave = () => {
  const canvasRef = useRef(null);
  const waveGroupRef = useRef(new WaveGroup());

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const waveGroup = waveGroupRef.current;

    // const pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;
    const pixelRatio = 1;

    const resize = () => {
      const stageWidth = document.body.clientWidth;
      const stageHeight = 240;

      canvas.width = stageWidth * pixelRatio;
      canvas.height = stageHeight * pixelRatio;
      ctx.scale(pixelRatio, pixelRatio);

      waveGroup.resize(stageWidth, stageHeight);
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width / pixelRatio, canvas.height / pixelRatio);
      waveGroup.draw(ctx);
      window.requestAnimationFrame(animate);
    };

    window.addEventListener("resize", resize);
    resize();
    animate();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="w-100 position-absolute">
      <canvas ref={canvasRef} />
    </div>
  );
};

export default Wave;
