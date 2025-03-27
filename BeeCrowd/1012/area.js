import fs from "fs";
import path from "path";

const filePath = path.resolve(
  path.dirname(new URL(import.meta.url).pathname),
  "entrada.txt"
);
const input = fs.readFileSync(filePath, "utf8");
const lines = input.split("\n");

/**
 * Escreva a sua solução aqui abaixo
 */

const [a, b, c] = lines[0].split(" ").map((value) => Number(value));

console.log("TRIANGULO: " + ((a * c) / 2).toFixed(3));
console.log("CIRCULO: " + (3.14159 * Math.pow(c, 2)).toFixed(3));
console.log("TRAPEZIO: " + (((a + b) * c) / 2).toFixed(3));
console.log("QUADRADO: " + (b * b).toFixed(3));
console.log("RETANGULO: " + (a * b).toFixed(3));
