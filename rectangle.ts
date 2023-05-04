export class Point {
  constructor(public x: number, public y: number) {}

  move(dx: number, dy: number) {
    this.x += dx;
    this.y += dy;
  }
}

export class Rectangle {
  constructor(
    public p1: Point,
    public p2: Point,
    public p3: Point,
    public p4: Point
  ) {}

  move(dx: number, dy: number) {
    this.p1.move(dx, dy);
    this.p2.move(dx, dy);
    this.p3.move(dx, dy);
    this.p4.move(dx, dy);
  }

  getArea(): number {
    const width = Math.sqrt(
      Math.pow(this.p2.x - this.p1.x, 2) + Math.pow(this.p2.y - this.p1.y, 2)
    );
    const height = Math.sqrt(
      Math.pow(this.p4.x - this.p1.x, 2) + Math.pow(this.p4.y - this.p1.y, 2)
    );
    return width * height;
  }
}
