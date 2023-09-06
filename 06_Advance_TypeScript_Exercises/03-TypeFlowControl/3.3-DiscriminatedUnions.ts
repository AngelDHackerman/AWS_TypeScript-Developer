// Exercise Context: Implement discriminated unions to create objects with specific shapes.
// la propiedad "kind", actua como el discriminante en este caso

type Shape = { kind: 'circle', radius: number } | { kind: 'rectangle', width: number, height: number }

function area(s: Shape): number { 
  switch (s.kind) {
    case 'circle':
      return Math.PI * Math.pow(s.radius, 2)
    case 'rectangle':
      return s.width * s.height
  }
}

const circle: Shape = {kind: 'circle', radius: 5}
const rectangle: Shape = { kind: 'rectangle', width: 4, height: 7}

console.log(area(circle))  // 78.53
console.log(area(rectangle))  // 28