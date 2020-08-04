const Area = require("./Area");
const prompt = require("prompt-sync")();

class MyClass extends Area {
    main() {
    console.log("Enter your choice");
    console.log("1. Circle\n2. Square\n3. Rectangle\n4. Triangle");
    var choice = Number(prompt())
    switch (choice) {
      case 1:
        var radius = prompt("Enter the radius: ");
        var result = this.circle(radius);
        console.log("Area of circle is : ", result);
        break;
    case 2:
        var side = prompt("Enter the side of square: ");
        var result = this.square(side);
        console.log("Area of square is : ", result);
        break;
    case 3:
        var length = prompt("Enter the length and width of rectangle: ");
        var width = prompt();
        var result = this.rectangle(length, width);
        console.log("Area of rectangle is : ", result);
        break;
    case 4:
        var base = prompt("Enter the base and height of triangle: ");
        var height = prompt();
        var result = this.triangle(base, height);
        console.log("Area of triangle is : ", result);
        break;
    default:
        console.log("Invalid entry !")
    }
  }
}

var mc = new MyClass();
mc.main();