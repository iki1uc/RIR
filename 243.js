function parseCoordinates(id) {
  if (typeof id !== "string") {
    throw new TypeError("Die ID muss ein String im Format 'x,y,z' sein.");
  }

  const parts = id.split(",");
  if (parts.length !== 3 || parts.some(part => part.trim() === "")) {
    throw new Error("Erwartetes Format: 'x,y,z'.");
  }

  const coordinates = parts.map(Number);
  if (!coordinates.every(Number.isFinite)) {
    throw new Error("Alle Koordinaten müssen endliche Zahlen sein.");
  }

  return coordinates;
}

function getState(id) {
  const [x, y, z] = parseCoordinates(id);
  return generateState(x, y, z);
}

export const stateProxy = new Proxy(Object.create(null), {
  get(_, prop) {
    if (typeof prop !== "string") return undefined;
    return getState(prop);
  }
});
