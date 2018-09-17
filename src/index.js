module.exports = function solveEquation(equation) {
  const trimmed = equation.replace(/\s/g, "").replace(/\*/g, "");
  const firstSplit = trimmed.split("x^2");
  const a = parseInt(firstSplit[0]) || 0;
  const secondSplit = (firstSplit[1] || "").split("x");
  const b = parseInt(secondSplit[0]) || 0;
  const c = parseInt(secondSplit[1]) || 0;
  const d = Math.round(Math.sqrt(b * b - 4 * a * c));
  const x1 = (-b - d) / (2 * a);
  const x2 = (-b + d) / (2 * a);
  return [Math.min(x1, x2), Math.max(x1, x2)];
};
