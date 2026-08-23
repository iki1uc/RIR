function generateNarrative(x, y, z) {
  return {
    D: `Dim(${x + y + z})`,
    Q: (x * y * z) === 0 ? 0 : (x * y * z) % 7,
    F: `F-${Math.abs(x - y) + 1}`
  };
}

function generateState(x, y, z) {
  return {
    x: x * x,
    y: y * 2,
    z: z + 7,
    meta: `Zustand (${x},${y},${z})`,
    dqf: generateNarrative(x, y, z)
  };
}

function getState(id) {
  const [x, y, z] = id.split(',').map(Number);
  return generateState(x, y, z);
}

const stateProxy = new Proxy({}, {
  get(_, prop) {
    return getState(prop);
  }
});

console.log(stateProxy['2,4,3']);
