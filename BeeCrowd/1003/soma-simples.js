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
const soma = num1 + num2;

console.log("SOMA = " + soma);
