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
const A = Number(lines[0]);
const B = Number(lines[1]);
const C = Number(lines[2]);
const D = Number(lines[3]);

console.log("DIFERENCA = " + (A * B - C * D));
