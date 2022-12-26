export class AnimatedSprite extends EventTarget {
  ctx;
  sourceImage;
  height;
  spriteCount;
  scale;
  width;
  positionX = 0;
  positionY = 0;

  constructor(context, sourceImage, spriteCount, width, height, scale = 1) {
    super();
    this.ctx = context;
    this.spriteCount = spriteCount;
    this.scale = scale;
    this.loadSourceImage(sourceImage, width, height);
  }

  loadSourceImage(imageUrl, width, height) {
    let image = new Image();
    image.src = imageUrl;
    image.onload = () => {
      this.sourceImage = image;
      this.width = width ?? image.width / this.spriteCount;
      this.height = height ?? image.height;
      this.drawSprite(0, 0, 0, 0);
      this.dispatchEvent(new CustomEvent("source image loaded"));
    };
  }

  drawSprite(spriteX, spriteY) {
    this.ctx.clearRect(this.positionX, this.positionY, this.width, this.height);
    this.ctx.fillStyle = "#f3f3f3";
    this.ctx.fillRect(this.positionX, this.positionY, this.width, this.height);
    this.ctx.drawImage(
      this.sourceImage,
      this.width * spriteX,
      this.height * spriteY,
      this.width,
      this.height,
      this.positionX,
      this.positionY,
      this.width * this.scale,
      this.height * this.scale
    );
  }

  play() {
    let i = 0;
    setInterval(() => {
      this.drawSprite(i, 0);
      i++;
      if (i >= this.spriteCount) i = 0;
    }, 1000 / 12);
  }
}
