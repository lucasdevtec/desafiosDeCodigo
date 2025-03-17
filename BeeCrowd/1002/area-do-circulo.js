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
const pi = 3.14159;
const raio = Number(lines[0]);

console.log("A=" + (raio ** 2 * pi).toFixed(4));
