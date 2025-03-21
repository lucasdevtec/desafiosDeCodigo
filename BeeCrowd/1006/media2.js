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
const num1 = Number(lines[0]);
const num2 = Number(lines[1]);
const num3 = Number(lines[2]);

console.log("MEDIA = " + ((num1 * 2 + num2 * 3 + num3 * 5) / 10).toFixed(1));
