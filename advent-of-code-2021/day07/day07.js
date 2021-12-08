import { arrayMax, arrayMin, identity, range, stringToNumbers} from "../advent.js";
import { data } from "./data.js";

function solve(cost, positions) {
  const sumFuel = pos => positions.reduce((sum, n) => sum + cost(Math.abs(n - pos)), 0);

  return arrayMin(range(arrayMin(positions), arrayMax(positions)). map(sumFuel));
}

const part1Cost = identity;
const part2Cost = n => (n * (n + 1)) / 2;

// Tests

console.log(solve(part1Cost, stringToNumbers(data)) === 351901);
console.log(solve(part2Cost, stringToNumbers(data)) === 101079875);
