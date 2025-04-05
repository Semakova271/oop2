export default function showHealth(units) {
  if (typeof units.health !== 'number' || units.health < 0 || Number.isNaN(units.health) || units.health === undefined) {
    throw new Error('Parameter is not a number!');
  }

  if (units.health > 50) {
    return 'healthy';
  }

  if (units.health > 15) {
    return 'wounded';
  }

  return 'critical';
}