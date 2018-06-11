export function union(rects) {
  //calculate the union of the rects
  const bounds = {x: Number.MAX_VALUE, y: Number.MAX_VALUE, r: Number.MIN_VALUE, b: Number.MIN_VALUE};
	rects.forEach(r => {
  	bounds.x = Math.min(bounds.x, r.x);
  	bounds.y = Math.min(bounds.y, r.y);
  	bounds.r = Math.max(bounds.r, r.x + r.w);
  	bounds.b = Math.max(bounds.b, r.y + r.h);
  });
  bounds.w = bounds.r - bounds.x;
  bounds.h = bounds.b - bounds.y;
  return Object.freeze(bounds);
}

export function alignLeft(rects, bounds = union(rects)) {
  	rects.forEach(r => r.x = bounds.x);
}

export function alignRight(rects, bounds = union(rects)) {
  	rects.forEach(r => r.x = bounds.r - r.w);
}

export function alignCenter(rects, bounds = union(rects)) {
  	rects.forEach(r => r.x = bounds.x + (bounds.w - r.w) / 2);
}

export function alignTop(rects, bounds = union(rects)) {
  	rects.forEach(r => r.y = bounds.y);
}

export function alignBottom(rects, bounds = union(rects)) {
  	rects.forEach(r => r.y = bounds.b - r.h);
}

export function alignMiddle(rects, bounds = union(rects)) {
  	rects.forEach(r => r.y = bounds.y + (bounds.w - r.h) / 2);
}

export function distributeHorizontally(rects, bounds = union(rects)) {
		let margin = rects.reduce((accum, r) => accum + r.w, 0);
    margin = (bounds.w - margin) / (rects.length - 1);
    let offset = bounds.x;
    rects.forEach(r => { r.x = offset; offset += r.w + margin});
}

export function distributeVertically(rects, bounds = union(rects)) {
		let margin = rects.reduce((accum, r) => accum + r.h, 0);
    margin = (bounds.h - margin ) / (rects.length - 1);
    let offset = bounds.y;
    rects.forEach(r => { r.y = offset; offset += r.h + margin});
}

export function stackRight(rects, space = 0, bounds = union(rects)) {
    let offset = bounds.x;
    rects.forEach(r => {r.x = offset; offset += r.w + space});
}

export function stackLeft(rects, space = 0, bounds = union(rects)) {
    let offset = bounds.r;
    rects.forEach(r => {r.x = offset - r.w; offset -= r.w + space});
}

export function stackDown(rects, space = 0, bounds = union(rects)) {
    let offset = bounds.y;
    rects.forEach(r => {r.y = offset; offset += r.h + space});
}

export function stackUp(rects, space = 0, bounds = union(rects)) {
    let offset = bounds.b;
    rects.forEach(r => {r.y = offset - r.h; offset -= r.h + space});
}

export function translate(rects, x, y) {
    rects.forEach(r => {r.x += x; r.y += y});
}

export function setX(rects, x) {
    rects.forEach(r => r.x = x);
}

export function setY(rects, y) {
    rects.forEach(r => r.y = y);
}
