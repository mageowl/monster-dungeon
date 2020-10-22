import { effectType } from "./effects.js";

export const charecters = {
  blob: {
    name: "Blob",
    hp: 2,
    maxHP: 2,
    turnAI: {
      type: "effect",
      effects: [{ type: effectType.MELEE_DAMAGE, damage: 1 }],
    },
    img: "./assets/art/charecters/blob.png",
    id: "blob",
  },
  player: {
    name: "Player",
    hp: 20,
    maxHP: 20,
    img: "./assets/art/charecters/player-basic.png",
    id: "player",
  },
  snake: {
    name: "Snake",
    hp: 3,
    maxHp: 3,
    turnAI: {
      type: "effect",
      effects: [{ type: effectType.MELEE_DAMAGE, damage: 2 }],
    },
    img: "./assets/art/charecters/snake.png",
    id: "snake",
  },
  ogre: {
    name: "Ogre",
    hp: 5,
    maxHp: 5,
    turnAI: {
      type: "effect",
      effects: [{ type: effectType.MELEE_DAMAGE, damage: 4 }],
    },
    img: "./assets/art/charecters/ogre.png",
    id: "ogre",
  },
};
