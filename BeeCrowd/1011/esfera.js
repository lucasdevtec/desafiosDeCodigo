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
const raio = Number(lines[0]);
const pi = 3.14159;
console.log("VOLUME = " + ((4 / 3) * pi * Math.pow(raio, 3)).toFixed(3));
