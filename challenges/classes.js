// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker {
    constructor(length, width, height){
    this.length = length;
    this.width = width;
    this.height = height;
}
  volume(){
    let prod = this.length*this.width*this.height;
    return prod;
  }
  surfaceArea(){
    let area = 2*(this.length*this.width+this.length*this.height+this.width*this.height)
    return area;
  }
}
  let cuboid = new CuboidMaker(4, 5, 5);

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker {
    constructor(length,width,height){
        super(length,width,height);
    }
    volume2(){
        let prod2 = this.length*this.length*this.length;
        return prod2;
    }
    surfaceArea2(){
        let area2 = 6 * (this.length*this.length);
        return area2;
    }
}
let cube = new CubeMaker (2, 2, 2);
console.log(cube.volume2());
console.log(cube.surfaceArea2())