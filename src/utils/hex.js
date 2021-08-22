export {
  Hex,
  flat_hex_corner,
  flat_hex_corners,
  axial_to_pixel,
  layout,
}

class Hex {
  constructor(q, r, s) {
    if (q + r + s !== 0) throw new Error('Cubic coordinates invalid');
    this.q = q;
    this.r = r;
  }

  get s() {
    return - this.q - this.r;
  }
}

class Orientation {
  constructor(f0, f1, f2, f3, b0, b1, b2, b3, start_angle) {
    this.f0 = f0;
    this.f1 = f1;
    this.f2 = f2;
    this.f3 = f3;
    this.b0 = b0;
    this.b1 = b1;
    this.b2 = b2;
    this.b3 = b3;
    this.start_angle = start_angle;
  }
}

const orientation_flat = new Orientation(
  3/2, 0, Math.sqrt(3)/2, Math.sqrt(3),
  2/3, 0, -1/3, Math.sqrt(3)/3,
  0.5
);

class Layout {
  constructor(orientation, size, origin) {
    this.orientation = orientation;
    this.size = size;
    this.origin = origin;
  }
}

const layout = new Layout(orientation_flat, { x: 50, y: 50 }, { x: window.innerWidth / 2, y: window.innerHeight / 2 });

function flat_hex_corner(center, i) {
  const angle_deg = 60 * i;
  const angle_rad = Math.PI / 180 * angle_deg;
  return {
    x: center.x + layout.size.x * Math.cos(angle_rad),
    y: center.y + layout.size.y * Math.sin(angle_rad),
  };
}

function flat_hex_corners(center) {
  let string = '';
  for (let i = 0; i <= 5; i++) {
    const {x,y} = flat_hex_corner(center, i);
    string += `${x},${y} `;
  }
  return string;
}

function axial_to_pixel(coords) {
  const o = layout.orientation;
  const x = (o.f0 * coords.q + o.f1 * coords.r) * layout.size.x;
  const y = (o.f2 * coords.q + o.f3 * coords.r) * layout.size.y;
  return {
    x: x + layout.origin.x,
    y: y + layout.origin.y,
  };
}
