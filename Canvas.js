var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');





// for (var i = 0; i < 10; i++) {
//   var x = Math.random() * window.innerWidth;
//   var y = Math.random() * window.innerHeight;
//   c.fillStyle = "rgba(" +
//                                       Math.random() * 255 + "," + // Randomly generated brightness for color red
//                                       Math.random() * 255 + "," + // Randomly generated brightness for color green
//                                       Math.random() * 255 + "," + // Randomly generated brightness for color blue
//                                       Math.random() + ")";             // Randomly generated transparency for alpha
//   c.fillRect(x, y, 100, 100);
// }
// for (var i = 0; i < 10; i++) {
//   var x = Math.random() * window.innerWidth;
//   var y = Math.random() * window.innerHeight;
//   c.fillStyle = "rgba(" +
//                                       Math.random() * 255 + "," + // Randomly generated brightness for color red
//                                       Math.random() * 255 + "," + // Randomly generated brightness for color green
//                                       Math.random() * 255 + "," + // Randomly generated brightness for color blue
//                                       Math.random() + ")";             // Randomly generated transparency for alpha
//   c.fillRect(x, y, 100, 100);
// }
// for (var i = 0; i < 10; i++) {
//   var x = Math.random() * window.innerWidth;
//   var y = Math.random() * window.innerHeight;
//   c.fillStyle = "rgba(" +
//                                       Math.random() * 255 + "," + // Randomly generated brightness for color red
//                                       Math.random() * 255 + "," + // Randomly generated brightness for color green
//                                       Math.random() * 255 + "," + // Randomly generated brightness for color blue
//                                       Math.random() + ")";             // Randomly generated transparency for alpha
//   c.fillRect(x, y, 100, 100);
// }
//
// console.log(canvas);
//line
//c.beginPath();
//c.moveTo(50, 300);
//c.lineTo(300, 50);
//c.lineTo(200, 30);
//c.strokeStyle = "red";
//c.stroke();
// for (var i = 0; i < 100; i++) {
//   var x = Math.random() * window.innerWidth;
//   var y = Math.random() * window.innerHeight;
//   c.beginPath();
//   c.moveTo(x, y);
//   var x = Math.random() * window.innerWidth;
//   var y = Math.random() * window.innerHeight;
//   c.lineTo(x, y);
//   var x = Math.random() * window.innerWidth;
//   var y = Math.random() * window.innerHeight;
//   c.lineTo(x, y);
//   c.strokeStyle = "rgba(" +
//                                       Math.random() * 255 + "," + // Randomly generated brightness for color red
//                                       Math.random() * 255 + "," + // Randomly generated brightness for color green
//                                       Math.random() * 255 + "," + // Randomly generated brightness for color blue
//                                       Math.random() + ")";             // Randomly generated transparency for alpha
//   c.stroke();
// }

// Arc/Circle
//c.beginPath();
//c.arc(300, 300, 30, 0, Math.PI * 2, false);
//c.strokeStyle = "blue";
//c.stroke();

// for (var i = 0; i < 50; i++) {
//   var x = Math.random() * window.innerWidth;
//   var y = Math.random() * window.innerHeight;
//   c.beginPath();
//   c.arc(x, y, 30, 0, Math.PI * 2, false);
//   c.strokeStyle = "rgba(" +
//                                       Math.random() * 255 + "," +
//                                       Math.random() * 255 + "," +
//                                       Math.random() * 255 + "," +
//                                       Math.random() + ")";
//
//   c.stroke();
// }
// var x = Math.random() * innerWidth;
// var y = Math.random() * innerHeight;
// var dx = (Math.random() - 0.5) * 8;
// var dy = (Math.random() - 0.5) * 8;
// var radius = 30;
// c.clearRect(0, 0, innerWidth, innerHeight);
// c.beginPath();
// c.arc(x, y, 30, 0, Math.PI * 2, false);
// c.strokeStyle = "blue";
// c.stroke();
// if (x + radius > innerWidth || x - radius < 0) {
//   dx = -dx;
// }
// if (y + radius > innerHeight || y - radius < 0) {
//   dy = -dy
// }
// x += dx;
// y += dy;

var mouse = {
  x: undefined,
  y: undefined
}

var maxRadius = 40;
//var minRadius = 2;

var colorArray = [

  '#f7ffd7',
  '#76862d',
  '#76d337',
  '#116906',
  '	#030701'
]

window.addEventListener('mousemove', function(event) {
  mouse.x = event.x;
  mouse.y = event.y;
})

window.addEventListener('resize', function(){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  init();
});

function Circle(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.minRadius = radius;
  this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

  this.draw = function() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = this.color;
    c.fill();
  };
  this.update = function() {
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
      this.dy = -this.dy
    }
    this.x += this.dx;
    this.y += this.dy;

    //interactivity
    if (mouse.x - this.x < 50 && mouse.x - this.x > -50
      && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
        if (this.radius < maxRadius) {
          this.radius += 1;
        }


    } else if (this.radius > this.minRadius) {
      this.radius -= 1;
    }

    this.draw();
  }
};

// var x = Math.random() * innerWidth;
// var y = Math.random() * innerHeight;
// var dx = (Math.random() - 0.5) * 8;
// var dy = (Math.random() - 0.5) * 8;

var circleArray = [];

function init() {

  circleArray = [];
  for (var i = 0; i < 1600; i++) {
    var radius = Math.random() * 3 + 1;
    var x = Math.random() * (innerWidth - radius * 2) + radius;
    var y = Math.random() * (innerHeight - radius * 2) + radius;
    var dx = (Math.random() - 0.5) * 2;
    var dy = (Math.random() - 0.5) * 2;

    circleArray.push(new Circle(x, y, dx, dy, radius));
  }
};

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);
  for (var i = 0; i < circleArray.length; i++) {
    circleArray[i].update()
  }
};
init();
animate()
