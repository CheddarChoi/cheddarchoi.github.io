import { Wave } from "./wave.js";

export class WaveGroup {
  constructor() {
    this.totalWaves = 3;
    this.totalPoints = 6;

    // this.color = ["rgba(54, 150, 118, 0.3)", "rgba(7, 102, 173, 0.3)", "rgba(255, 198, 81, 0.3)"];
    this.color = ["rgba(255, 198, 81, 0.3)", "rgba(255, 198, 81, 0.3)", "rgba(255, 198, 81, 0.3)"];

    this.waves = [];

    for (let i = 0; i < this.totalWaves; i++) {
      const wave = new Wave(i, this.totalPoints, this.color[i]);
      this.waves[i] = wave;
    }
  }

  resize(stageWidth, stageHeight) {
    for (let i = 0; i < this.totalWaves; i++) {
      const wave = this.waves[i];
      wave.resize(stageWidth, stageHeight);
    }
  }

  draw(ctx) {
    for (let i = 0; i < this.totalWaves; i++) {
      const wave = this.waves[i];
      wave.draw(ctx);
    }
  }
}
