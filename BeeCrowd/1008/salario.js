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
const numero = Number(lines[0]);
const horas = Number(lines[1]);
const salarioPorHora = Number(lines[2]);

console.log("NUMBER = " + numero);
console.log("SALARY = U$ " + (horas * salarioPorHora).toFixed(2));
