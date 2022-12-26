import { AnimatedSprite } from "./AnimatedSprite.js";

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const frameRate = 15;
canvas.width = 1000;
canvas.height = 480;

const iddle = new AnimatedSprite(ctx, "/src/assets/Idle.png", 11);
const run = new AnimatedSprite(ctx, "/src/assets/Run.png", 8);
const attack1 = new AnimatedSprite(ctx, "/src/assets/Attack1.png", 7);
const attack2 = new AnimatedSprite(ctx, "/src/assets/Attack2.png", 7);
const death = new AnimatedSprite(ctx, "/src/assets/Death.png", 11);
const fall = new AnimatedSprite(ctx, "/src/assets/Fall.png", 3);
const jump = new AnimatedSprite(ctx, "/src/assets/Jump.png", 3);
const damage = new AnimatedSprite(ctx, "/src/assets/Take Hit.png", 4);

run.positionX = 190;
attack1.positionX = 190 * 2;
attack2.positionX = 190 * 3;
death.positionX = 0;
fall.positionX = 190;
jump.positionX = 190 * 2;
damage.positionX = 190 * 3;
death.positionY = 190;
fall.positionY = 190;
jump.positionY = 190;
damage.positionY = 190;

iddle.addEventListener("source image loaded", () => iddle.play());
run.addEventListener("source image loaded", () => run.play());
attack1.addEventListener("source image loaded", () => attack1.play());
attack2.addEventListener("source image loaded", () => attack2.play());
death.addEventListener("source image loaded", () => death.play());
fall.addEventListener("source image loaded", () => fall.play());
jump.addEventListener("source image loaded", () => jump.play());
damage.addEventListener("source image loaded", () => damage.play());
